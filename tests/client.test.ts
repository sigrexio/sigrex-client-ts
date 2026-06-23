import test from 'node:test';
import assert from 'node:assert';
import crypto from 'crypto';
import { generateHmacSignature, SigrexClient, SigrexError } from '../src/index.js';

test('Signature Generation', async (t) => {
  await t.test('should correctly sign a GET request (no body)', () => {
    const secret = 'your_private_api_secret';
    const method = 'GET';
    const path = '/api/v2/strategy/llm-session';
    const timestamp = '1700000000';

    const actual = generateHmacSignature(secret, method, path, timestamp);

    // Manually compute HMAC SHA256 to compare
    const expectedMessage = 'GET/api/v2/strategy/llm-session1700000000';
    const expected = crypto
      .createHmac('sha256', secret)
      .update(expectedMessage)
      .digest('hex');

    assert.strictEqual(actual, expected);
  });

  await t.test('should correctly sign a POST request with body', () => {
    const secret = 'your_private_api_secret';
    const method = 'POST';
    const path = '/api/v2/strategy/llm-session';
    const timestamp = '1700000000';
    const body = {
      name: 'My Strategy',
      cron_interval: '15M'
    };

    const actual = generateHmacSignature(secret, method, path, timestamp, body);

    const expectedMessage = 'POST/api/v2/strategy/llm-session{"name":"My Strategy","cron_interval":"15M"}1700000000';
    const expected = crypto
      .createHmac('sha256', secret)
      .update(expectedMessage)
      .digest('hex');

    assert.strictEqual(actual, expected);
  });
});

test('SigrexClient HTTP and Signing Middleware', async (t) => {
  await t.test('should inject appropriate headers for HMAC-SHA256 request', async () => {
    let mockFetchCalled = false;
    let requestUrl = '';
    let requestHeaders: Record<string, string> = {};
    let requestBody = '';

    const mockFetch = (async (url: string, options: any) => {
      mockFetchCalled = true;
      requestUrl = url;
      requestHeaders = options.headers;
      requestBody = options.body;

      return {
        ok: true,
        status: 200,
        statusText: 'OK',
        headers: new Map([['content-type', 'application/json']]),
        json: async () => ({ message: 'Success' })
      } as any;
    }) as typeof fetch;

    const client = new SigrexClient({
      apiKey: 'test-api-key',
      apiSecret: 'test-api-secret',
      fetch: mockFetch
    });

    const result = await client.exchanges.list({ enabled: true });

    assert.ok(mockFetchCalled);
    assert.strictEqual(result.message, 'Success');
    assert.ok(requestUrl.includes('/api/v2/exchange?enabled=true'));
    assert.strictEqual(requestHeaders['api-key'], 'test-api-key');
    assert.ok(requestHeaders['timestamp']);
    assert.ok(requestHeaders['signature']);

    // Verify signature matches the HMAC of our request URL search path
    const urlObj = new URL(requestUrl);
    const signaturePath = urlObj.pathname + urlObj.search;
    const expectedSig = generateHmacSignature(
      'test-api-secret',
      'GET',
      signaturePath,
      requestHeaders['timestamp']
    );
    assert.strictEqual(requestHeaders['signature'], expectedSig);
  });

  await t.test('should invoke custom signer callback if provided', async () => {
    let customSignerCalled = false;
    let signedMessage = '';

    const customSigner = (message: string) => {
      customSignerCalled = true;
      signedMessage = message;
      return 'custom-signature-token-1234';
    };

    const mockFetch = (async (url: string, options: any) => {
      return {
        ok: true,
        status: 200,
        statusText: 'OK',
        headers: new Map([['content-type', 'application/json']]),
        json: async () => ({ status: 'ACTIVE' })
      } as any;
    }) as typeof fetch;

    const client = new SigrexClient({
      apiKey: 'test-api-key',
      signer: customSigner,
      fetch: mockFetch
    });

    const result = await client.strategies.llmSessions.status(5, { status: 'ACTIVE' });

    assert.ok(customSignerCalled);
    assert.strictEqual(result.status, 'ACTIVE');
    assert.ok(signedMessage.startsWith('PUT/api/v2/strategy/llm-session/5/status'));
    assert.ok(signedMessage.includes('ACTIVE'));
  });

  await t.test('should throw SigrexError on unsuccessful HTTP response', async () => {
    const mockFetch = (async (url: string, options: any) => {
      return {
        ok: false,
        status: 400,
        statusText: 'Bad Request',
        headers: new Map([['content-type', 'application/json']]),
        json: async () => ({ error: 'Invalid parameters provided' })
      } as any;
    }) as typeof fetch;

    const client = new SigrexClient({
      apiKey: 'test-api-key',
      apiSecret: 'test-api-secret',
      fetch: mockFetch
    });

    await assert.rejects(
      async () => {
        await client.strategies.code.create({
          name: 'Invalid strategy',
          triggers: []
        } as any);
      },
      (err: any) => {
        assert.ok(err instanceof SigrexError);
        assert.strictEqual(err.status, 400);
        assert.strictEqual(err.message, 'Invalid parameters provided');
        assert.strictEqual(err.body.error, 'Invalid parameters provided');
        return true;
      }
    );
  });
});
