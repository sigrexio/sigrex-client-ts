import { generateHmacSignature, SignerCallback } from './crypto.js';
import { ExchangesService } from './services/exchanges.js';
import { LlmSessionsService } from './services/llmSessions.js';
import { LlmReactionsService } from './services/llmReactions.js';
import { CodeReactionsService } from './services/codeReactions.js';
import { CodeStrategiesService } from './services/codeStrategies.js';
import { CexBotsService } from './services/cexBots.js';
import { PredictionBotsService } from './services/predictionBots.js';
import { DexBotsService } from './services/dexBots.js';
import { BotWebhooksService } from './services/botWebhooks.js';
import { DataWebhooksService } from './services/dataWebhooks.js';
import { ExchangeApiKeysService } from './services/exchangeApiKeys.js';
import { LlmApiKeysService } from './services/llmApiKeys.js';
import { PredictionApiKeysService } from './services/predictionApiKeys.js';

export interface SigrexClientOptions {
  /**
   * Your public API key.
   */
  apiKey: string;

  /**
   * Your private API secret (required for HMAC SHA256 signing if a custom signer is not provided).
   */
  apiSecret?: string;

  /**
   * Optional custom signing callback (e.g., for ML-DSA44 signature generation).
   * Receives the signature payload string: METHOD + PATH (+ BODY if POST/PUT) + TIMESTAMP.
   * Should return the signature string (e.g., base64 encoded for ML-DSA44, hex for HMAC).
   */
  signer?: SignerCallback;

  /**
   * Base URL of the Sigrex API.
   * Defaults to 'https://api.sigrex.io'.
   */
  baseUrl?: string;

  /**
   * Custom fetch function override (defaults to global fetch).
   */
  fetch?: typeof fetch;
}

export class SigrexError extends Error {
  public status: number;
  public statusText: string;
  public body: any;

  constructor(status: number, statusText: string, body: any) {
    const message = body?.error || body?.message || `${status} ${statusText}`;
    super(message);
    this.name = 'SigrexError';
    this.status = status;
    this.statusText = statusText;
    this.body = body;
  }
}

export class SigrexBaseClient {
  protected options: Required<Omit<SigrexClientOptions, 'apiSecret' | 'signer' | 'fetch'>> & {
    apiSecret?: string;
    signer?: SignerCallback;
    fetch: typeof fetch;
  };

  constructor(options: SigrexClientOptions) {
    if (!options.apiKey) {
      throw new Error('API key is required.');
    }
    if (!options.apiSecret && !options.signer) {
      throw new Error('Either apiSecret or a custom signer function must be provided.');
    }

    const localFetch = options.fetch || (typeof globalThis !== 'undefined' && globalThis.fetch) || (typeof window !== 'undefined' && window.fetch);
    if (!localFetch) {
      throw new Error('Fetch API is not available. Please provide a custom fetch implementation or upgrade your environment.');
    }

    this.options = {
      apiKey: options.apiKey,
      apiSecret: options.apiSecret,
      signer: options.signer,
      baseUrl: options.baseUrl || 'https://api.sigrex.io',
      fetch: localFetch
    };
  }

  /**
   * Sends a signed HTTP request to the Sigrex API.
   */
  public async request<TResponse = any, TBody = any>(req: {
    method: string;
    path: string;
    queryParams?: Record<string, any>;
    body?: TBody;
  }): Promise<TResponse> {
    const methodUpper = req.method.toUpperCase();
    const timestamp = Math.floor(Date.now() / 1000).toString();

    // 1. Construct URL and Query Parameters
    const url = new URL(req.path.startsWith('/') ? req.path : `/${req.path}`, this.options.baseUrl);
    if (req.queryParams) {
      for (const [key, val] of Object.entries(req.queryParams)) {
        if (val !== undefined && val !== null) {
          url.searchParams.append(key, String(val));
        }
      }
    }

    // 2. Prepare Path for Signature (pathname + search query string)
    const signaturePath = url.pathname + url.search;

    // 3. Generate Message Payload and Signature
    let signature: string;
    if (this.options.signer) {
      const hasBody = (methodUpper === 'POST' || methodUpper === 'PUT') && req.body !== undefined && req.body !== null;
      const bodyStr = hasBody ? JSON.stringify(req.body) : '';
      const message = methodUpper + signaturePath + bodyStr + timestamp;
      signature = await this.options.signer(message);
    } else if (this.options.apiSecret) {
      signature = generateHmacSignature(
        this.options.apiSecret,
        methodUpper,
        signaturePath,
        timestamp,
        req.body
      );
    } else {
      throw new Error('Either apiSecret or a custom signer function must be provided.');
    }

    // 4. Construct Headers
    const headers: Record<string, string> = {
      'api-key': this.options.apiKey,
      'timestamp': timestamp,
      'signature': signature,
    };

    if (req.body !== undefined && req.body !== null) {
      headers['Content-Type'] = 'application/json';
    }

    // 5. Send Request
    const fetchOptions: RequestInit = {
      method: methodUpper,
      headers,
    };

    if (req.body !== undefined && req.body !== null) {
      fetchOptions.body = JSON.stringify(req.body);
    }

    const response = await this.options.fetch(url.toString(), fetchOptions);

    let responseData: any;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }

    if (!response.ok) {
      throw new SigrexError(response.status, response.statusText, responseData);
    }

    return responseData as TResponse;
  }
}

export class SigrexClient extends SigrexBaseClient {
  public exchanges = new ExchangesService(this);
  
  public strategies = {
    llmSessions: new LlmSessionsService(this),
    reactions: {
      llm: new LlmReactionsService(this),
      code: new CodeReactionsService(this),
    },
    code: new CodeStrategiesService(this),
  };

  public bots = {
    cex: new CexBotsService(this),
    prediction: new PredictionBotsService(this),
    dex: new DexBotsService(this),
  };

  public webhooks = {
    bot: new BotWebhooksService(this),
    data: new DataWebhooksService(this),
  };

  public apiKeys = {
    exchange: new ExchangeApiKeysService(this),
    llm: new LlmApiKeysService(this),
    prediction: new PredictionApiKeysService(this),
  };
}
