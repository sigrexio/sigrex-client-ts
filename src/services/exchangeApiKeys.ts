import { SigrexBaseClient } from '../client.js';
import { paths } from '../types.js';

export class ExchangeApiKeysService {
  constructor(private client: SigrexBaseClient) {}

  /**
   * Get all exchange API keys for user
   */
  async list(): Promise<paths['/api/v2/api/exchange']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/api/exchange']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/api/exchange`,
      
      
    });
  }
      

  /**
   * Create a new exchange API key
   */
  async create(body: NonNullable<paths['/api/v2/api/exchange']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/api/exchange']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/api/exchange']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/api/exchange`,
      body,
      
    });
  }
      

  /**
   * Get signal bots that use an API key
   */
  async getSignalBot(id: string | number, queryParams: paths['/api/v2/api/exchange/bot/signal/{id}']['get']['parameters']['query']): Promise<paths['/api/v2/api/exchange/bot/signal/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/api/exchange/bot/signal/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/api/exchange/bot/signal/${id}`,
      
      queryParams,
    });
  }
      

  /**
   * Update API key status
   */
  async status(id: string | number, body: NonNullable<paths['/api/v2/api/exchange/{id}/status']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/api/exchange/{id}/status']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/api/exchange/{id}/status']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/api/exchange/${id}/status`,
      body,
      
    });
  }
      

  /**
   * Delete an exchange API key
   */
  async delete(id: string | number): Promise<paths['/api/v2/api/exchange/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/api/exchange/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/api/exchange/${id}`,
      
      
    });
  }
      

  /**
   * Test exchange API key credentials
   */
  async postTest(body: NonNullable<paths['/api/v2/api/exchange/test']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/api/exchange/test']['post']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/api/exchange/test']['post']['responses']['200']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/api/exchange/test`,
      body,
      
    });
  }
      
}
