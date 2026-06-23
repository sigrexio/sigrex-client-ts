import { SigrexBaseClient } from '../client.js';
import { paths } from '../types.js';

export class BotWebhooksService {
  constructor(private client: SigrexBaseClient) {}

  /**
   * Get all bot webhooks
   */
  async list(): Promise<paths['/api/v2/webhook/bot']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/bot']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/webhook/bot`,
      
      
    });
  }
      

  /**
   * Create a new bot webhook
   */
  async create(body: NonNullable<paths['/api/v2/webhook/bot']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/webhook/bot']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/bot']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/webhook/bot`,
      body,
      
    });
  }
      

  /**
   * Get bot webhook by ID
   */
  async get(id: string | number): Promise<paths['/api/v2/webhook/bot/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/bot/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/webhook/bot/${id}`,
      
      
    });
  }
      

  /**
   * Update bot webhook
   */
  async update(id: string | number, body: NonNullable<paths['/api/v2/webhook/bot/{id}']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/webhook/bot/{id}']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/bot/{id}']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/webhook/bot/${id}`,
      body,
      
    });
  }
      

  /**
   * Delete bot webhook
   */
  async delete(id: string | number): Promise<paths['/api/v2/webhook/bot/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/bot/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/webhook/bot/${id}`,
      
      
    });
  }
      

  /**
   * Get webhook shares
   */
  async shares(id: string | number): Promise<paths['/api/v2/webhook/bot/{id}/shares']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/bot/{id}/shares']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/webhook/bot/${id}/shares`,
      
      
    });
  }
      

  /**
   * Share webhook with user
   */
  async (id: string | number, body: NonNullable<paths['/api/v2/webhook/bot/share/{id}']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/webhook/bot/share/{id}']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/bot/share/{id}']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/webhook/bot/share/${id}`,
      body,
      
    });
  }
      

  /**
   * Remove webhook share
   */
  async deleteShare(id: string | number, body: NonNullable<paths['/api/v2/webhook/bot/share/{id}']['delete']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/webhook/bot/share/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/bot/share/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/webhook/bot/share/${id}`,
      body,
      
    });
  }
      

  /**
   * Get CEX signal bots for webhook
   */
  async listBotSignalCex(id: string | number, queryParams: paths['/api/v2/webhook/bot/bot/signal/{id}/cex']['get']['parameters']['query']): Promise<paths['/api/v2/webhook/bot/bot/signal/{id}/cex']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/bot/bot/signal/{id}/cex']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/webhook/bot/bot/signal/${id}/cex`,
      
      queryParams,
    });
  }
      

  /**
   * Get DEX signal bots for webhook
   */
  async listBotSignalDex(id: string | number, queryParams: paths['/api/v2/webhook/bot/bot/signal/{id}/dex']['get']['parameters']['query']): Promise<paths['/api/v2/webhook/bot/bot/signal/{id}/dex']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/bot/bot/signal/{id}/dex']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/webhook/bot/bot/signal/${id}/dex`,
      
      queryParams,
    });
  }
      

  /**
   * Get prediction signal bots by webhook ID
   */
  async listBotSignalPrediction(id: string | number, queryParams: paths['/api/v2/webhook/bot/bot/signal/{id}/prediction']['get']['parameters']['query']): Promise<paths['/api/v2/webhook/bot/bot/signal/{id}/prediction']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/bot/bot/signal/{id}/prediction']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/webhook/bot/bot/signal/${id}/prediction`,
      
      queryParams,
    });
  }
      

  /**
   * Update webhook status
   */
  async status(id: string | number, body: NonNullable<paths['/api/v2/webhook/bot/{id}/status']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/webhook/bot/{id}/status']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/bot/{id}/status']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/webhook/bot/${id}/status`,
      body,
      
    });
  }
      

  /**
   * Get all shared webhooks for user
   */
  async listShared(): Promise<paths['/api/v2/webhook/bot/shared']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/bot/shared']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/webhook/bot/shared`,
      
      
    });
  }
      

  /**
   * Get webhooks shared with specific user
   */
  async getWithShared(id: string | number): Promise<paths['/api/v2/webhook/bot/shared/with/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/bot/shared/with/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/webhook/bot/shared/with/${id}`,
      
      
    });
  }
      

  /**
   * Get webhooks shared by specific user
   */
  async getByShared(id: string | number): Promise<paths['/api/v2/webhook/bot/shared/by/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/bot/shared/by/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/webhook/bot/shared/by/${id}`,
      
      
    });
  }
      
}
