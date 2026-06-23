import crypto from 'crypto';

/**
 * Generates an HMAC SHA256 signature for a Sigrex API request.
 * 
 * Signature Message:
 * - GET/DELETE: METHOD + PATH + TIMESTAMP
 * - POST/PUT:   METHOD + PATH + BODY + TIMESTAMP
 * 
 * @param secret The API private secret.
 * @param method The HTTP method (e.g., 'GET', 'POST').
 * @param path The request path starting with '/api/v2/' (e.g., '/api/v2/strategy/llm-session').
 * @param timestamp The Unix timestamp in seconds as a string.
 * @param body Optional request body (will be JSON stringified if present).
 * @returns The HMAC SHA256 signature in hexadecimal format.
 */
export function generateHmacSignature(
  secret: string,
  method: string,
  path: string,
  timestamp: string,
  body?: any
): string {
  const methodUpper = method.toUpperCase();
  const hasBody = (methodUpper === 'POST' || methodUpper === 'PUT') && body !== undefined && body !== null;
  const bodyStr = hasBody ? JSON.stringify(body) : '';
  const message = methodUpper + path + bodyStr + timestamp;

  return crypto
    .createHmac('sha256', secret)
    .update(message)
    .digest('hex');
}

/**
 * Interface representing the signature generation callback.
 * Useful for ML-DSA44 or other signing algorithms.
 */
export type SignerCallback = (message: string) => Promise<string> | string;
