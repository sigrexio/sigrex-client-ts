# Sigrex API TypeScript Client

A fully-typed, isomorphic, zero-dependency TypeScript API client for the **Sigrex API** with built-in support for automatic request signing (HMAC-SHA256 and custom signers like ML-DSA44).

---

## Features

- **Fully Typed**: Generated directly from the [Sigrex OpenAPI Specification](https://docs.sigrex.io/api-reference). Every request payload and response body is strongly-typed.
- **Isomorphic**: Works in Node.js, browsers, Cloudflare Workers, Edge runtimes, and other JS environments.
- **Automatic Request Signing**: Automatically calculates and attaches required headers (`api-key`, `timestamp`, `signature`) to every request.
- **Flexible Signatures**: Supports standard **HMAC-SHA256** and provides a callback interface for custom signers (e.g., **ML-DSA44**).
- **Clean API Hierarchy**: Logical grouping of methods matching the API tag hierarchy (e.g., `client.strategies.llmSessions.list()`).

---

## Installation

```bash
# npm
npm install @sigrex/client

# Deno
deno add @sigrex/client
```

When using Deno, import directly from the JSR scope:

```typescript
import { SigrexClient } from "jsr:@sigrex/client";
```

---

## Quick Start (HMAC-SHA256)

To get started, instantiate the `SigrexClient` using your public **API key** and private **API secret**. All HTTP requests are automatically signed and sent using native `fetch`.

```typescript
import { SigrexClient } from '@sigrex/client';

const client = new SigrexClient({
  apiKey: 'YOUR_PUBLIC_API_KEY',
  apiSecret: 'YOUR_PRIVATE_API_SECRET',
});

// Example: Retrieve all exchanges
async function getExchanges() {
  try {
    const exchanges = await client.exchanges.list({ enabled: true });
    console.log('Exchanges:', exchanges);
  } catch (error) {
    console.error('Error fetching exchanges:', error);
  }
}

getExchanges();
```

---

## Advanced: Post-Quantum Signatures (ML-DSA44)

The Sigrex API supports post-quantum **ML-DSA44** signature authentication. You can provide a custom `signer` callback function to sign requests using `@oqs/liboqs-js` (or any other cryptographic engine) without adding heavy WebAssembly or native binaries to your core dependencies.

```typescript
import { SigrexClient } from '@sigrex/client';
import { createMLDSA44 } from '@oqs/liboqs-js';

const PRIVATE_KEY_B64 = 'YOUR_PRIVATE_KEY_BASE64';

const client = new SigrexClient({
  apiKey: 'YOUR_PUBLIC_API_KEY',
  signer: async (message: string) => {
    // Initialize ML-DSA44 signer
    const sig = await createMLDSA44();
  
    // Sign the message payload
    const messageBytes = new TextEncoder().encode(message);
    const signature = sig.sign(
      messageBytes,
      Uint8Array.from(Buffer.from(PRIVATE_KEY_B64, 'base64'))
    );
  
    // Convert signature to base64
    const signatureB64 = Buffer.from(signature).toString('base64');
  
    // Clean up
    sig.destroy();
  
    return signatureB64;
  }
});

// Example: Get active LLM Sessions
async function getLLMSessions() {
  const sessions = await client.strategies.llmSessions.list();
  console.log('Sessions:', sessions);
}
```

---

## API Reference

The client exposes nested namespaces to make finding endpoints easy and intuitive. Methods that return a list (or a paginated `{ total, data }` result) start with `list`, and methods that return a single item start with `get`:

### 1. Exchanges

Exposes CEX, DEX, and Prediction exchanges.

- `client.exchanges.list(queryParams?)`
- `client.exchanges.listCex()`
- `client.exchanges.listDex(chain)`
- `client.exchanges.listPrediction()`
- `client.exchanges.listWithExchangeRate()`

### 2. Strategies

Exposes LLM Sessions, Code Strategies, and Reactions (both LLM and Code).

- **LLM Sessions**:
  - `client.strategies.llmSessions.list()`
  - `client.strategies.llmSessions.create(body)`
  - `client.strategies.llmSessions.get(id)`
  - `client.strategies.llmSessions.update(id, body)`
  - `client.strategies.llmSessions.delete(id)`
  - `client.strategies.llmSessions.status(id, body)` (Enable/disable session)
  - `client.strategies.llmSessions.public(id, body)` (Set visibility)
  - `client.strategies.llmSessions.listFolder()`
  - `client.strategies.llmSessions.createFolder(body)`
- **Code Strategies**:
  - `client.strategies.code.list()`
  - `client.strategies.code.create(body)`
  - `client.strategies.code.get(id)`
  - `client.strategies.code.update(id, body)`
  - `client.strategies.code.delete(id)`
- **Reactions (LLM)**:
  - `client.strategies.reactions.llm.list()`
  - `client.strategies.reactions.llm.create(body)`
- **Reactions (Code)**:
  - `client.strategies.reactions.code.list()`
  - `client.strategies.reactions.code.create(body)`

### 3. Signal Bots

- **CEX Bots**: `client.bots.cex.list()`, `client.bots.cex.create()`, etc.
- **DEX Bots**: `client.bots.dex.list()`, `client.bots.dex.create()`, etc.
- **Prediction Bots**: `client.bots.prediction.list()`, `client.bots.prediction.create()`, etc.

### 4. Webhooks

- **Bot Hooks**: `client.webhooks.bot.list()`, `client.webhooks.bot.create()`, etc.
- **Data Hooks**: `client.webhooks.data.list()`, `client.webhooks.data.create()`, etc.

### 5. API Keys Management

Exposes key endpoints for managing third-party LLM and CEX keys securely.

- **Exchange Keys**: `client.apiKeys.exchange.list()`, `client.apiKeys.exchange.create()`, etc.
- **LLM Keys**: `client.apiKeys.llm.list()`, `client.apiKeys.llm.create()`, etc.
- **Prediction Keys**: `client.apiKeys.prediction.list()`, `client.apiKeys.prediction.create()`, etc.

### 6. Account

Exposes the authenticated user's account and friendships.

- `client.account.getMe()` (Account with package and subscription details)
- `client.account.listAllFriend(status)` (All friendships, sent and received)
- `client.account.listFriend(status, side, { page, limit })` (Paginated)
- `client.account.listFriendRejected({ page, limit })` (Paginated, received requests that were rejected)

`status` is one of `'pending' | 'accepted' | 'rejected'`; `side` is one of `'sent' | 'received' | 'both'`.

### 7. Logs

Exposes signal, transaction, data, and error logs. Every method except `get(id)` is paginated: `page` (starting at 1) and `limit` are required (`limit` is capped at 100), and the response is `{ total, data }`.

- **Signal Logs**:
  - `client.logs.signal.list({ page, limit })`
  - `client.logs.signal.listHook(hookId, { page, limit })` (Bot hook)
  - `client.logs.signal.listBySource(source, { page, limit })`
  - `client.logs.signal.listBySourceAndId(source, id, { page, limit })`
  - `source`: `'webhook' | 'email' | 'telegram' | 'llm-session' | 'code-strategy' | 'llm-reaction' | 'code-reaction'`
- **Transaction Logs**:
  - `client.logs.transaction.list({ page, limit })`
  - `client.logs.transaction.listSignalBot(type, service, id, { page, limit })` (Signal bot)
  - `client.logs.transaction.get(id)`
  - `type`: `'cex' | 'dex'`; `service`: `'spot' | 'futures' | 'stock' | 'prediction'`
- **Data Logs**:
  - `client.logs.data.list({ page, limit })`
  - `client.logs.data.listHook(hookId, { page, limit })` (Data hook)
- **Error Logs**:
  - `client.logs.error.list({ page, limit })`
  - `client.logs.error.listBySourceAndId(source, id, { page, limit })`
  - `client.logs.error.get(id)`
  - `source`: `'llm-session' | 'code-strategy' | 'llm-reaction' | 'code-reaction' | 'data-hook' | 'bot-hook' | 'invoice'`

```typescript
// Example: Page through the signal logs of an LLM session
const { total, data } = await client.logs.signal.listBySourceAndId('llm-session', 'SESSION_ID', {
  page: 1,
  limit: 50,
});
console.log(`Showing ${data?.length} of ${total} signal logs`);
```

---

## Error Handling

All failed HTTP requests (status code outside `2xx`) throw a `SigrexError`. You can inspect the error's status code, status message, and API-returned error details:

```typescript
import { SigrexError } from '@sigrex/client';

try {
  await client.strategies.llmSessions.delete('non-existent-id');
} catch (error) {
  if (error instanceof SigrexError) {
    console.error(`API Error [${error.status}]: ${error.message}`);
    console.error('Raw Body:', error.body);
  } else {
    console.error('Network or other error:', error);
  }
}
```

---

## License

MIT
