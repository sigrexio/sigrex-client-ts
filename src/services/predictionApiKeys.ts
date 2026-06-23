import { SigrexBaseClient } from '../client.js';
import { paths } from '../types.js';

export class PredictionApiKeysService {
  constructor(private client: SigrexBaseClient) {}

  /**
   * Get all prediction API keys
   */
  async list(): Promise<paths['/api/v2/api/prediction']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/api/prediction']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/api/prediction`,
      
      
    });
  }
      

  /**
   * Create a new prediction API key
   */
  async create(body: NonNullable<paths['/api/v2/api/prediction']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/api/prediction']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/api/prediction']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/api/prediction`,
      body,
      
    });
  }
      

  /**
   * Get prediction signal bots by API ID
   */
  async getSignalBot(id: string | number, queryParams: paths['/api/v2/api/prediction/bot/signal/{id}']['get']['parameters']['query']): Promise<paths['/api/v2/api/prediction/bot/signal/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/api/prediction/bot/signal/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/api/prediction/bot/signal/${id}`,
      
      queryParams,
    });
  }
      

  /**
   * Update prediction API key status
   */
  async status(id: string | number, body: NonNullable<paths['/api/v2/api/prediction/{id}/status']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/api/prediction/{id}/status']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/api/prediction/{id}/status']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/api/prediction/${id}/status`,
      body,
      
    });
  }
      

  /**
   * Delete prediction API key
   */
  async delete(id: string | number): Promise<paths['/api/v2/api/prediction/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/api/prediction/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/api/prediction/${id}`,
      
      
    });
  }
      

  /**
   * Test prediction API credentials
   */
  async postTest(body: NonNullable<paths['/api/v2/api/prediction/test']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/api/prediction/test']['post']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/api/prediction/test']['post']['responses']['200']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/api/prediction/test`,
      body,
      
    });
  }
      
}
