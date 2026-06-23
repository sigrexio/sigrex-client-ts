export { SigrexClient, SigrexBaseClient, SigrexClientOptions, SigrexError } from './client.js';
export { generateHmacSignature, SignerCallback } from './crypto.js';

// Export generated types
export * from './types.js';

// Export individual services for typing convenience
export { ExchangesService } from './services/exchanges.js';
export { LlmSessionsService } from './services/llmSessions.js';
export { LlmReactionsService } from './services/llmReactions.js';
export { CodeReactionsService } from './services/codeReactions.js';
export { CodeStrategiesService } from './services/codeStrategies.js';
export { CexBotsService } from './services/cexBots.js';
export { PredictionBotsService } from './services/predictionBots.js';
export { DexBotsService } from './services/dexBots.js';
export { BotWebhooksService } from './services/botWebhooks.js';
export { DataWebhooksService } from './services/dataWebhooks.js';
export { ExchangeApiKeysService } from './services/exchangeApiKeys.js';
export { LlmApiKeysService } from './services/llmApiKeys.js';
export { PredictionApiKeysService } from './services/predictionApiKeys.js';
