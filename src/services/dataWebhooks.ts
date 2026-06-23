import { SigrexBaseClient } from '../client.js';
import { paths } from '../types.js';

export class DataWebhooksService {
  constructor(private client: SigrexBaseClient) {}

  /**
   * Get all data webhooks
   */
  async list(): Promise<paths['/api/v2/webhook/data']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/data']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/webhook/data`,
      
      
    });
  }
      

  /**
   * Create a new data webhook
   */
  async create(body: NonNullable<paths['/api/v2/webhook/data']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/webhook/data']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/data']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/webhook/data`,
      body,
      
    });
  }
      

  /**
   * Get data webhook by ID
   */
  async get(id: string | number): Promise<paths['/api/v2/webhook/data/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/data/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/webhook/data/${id}`,
      
      
    });
  }
      

  /**
   * Update data webhook
   */
  async update(id: string | number, body: NonNullable<paths['/api/v2/webhook/data/{id}']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/webhook/data/{id}']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/data/{id}']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/webhook/data/${id}`,
      body,
      
    });
  }
      

  /**
   * Delete data webhook
   */
  async delete(id: string | number): Promise<paths['/api/v2/webhook/data/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/data/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/webhook/data/${id}`,
      
      
    });
  }
      

  /**
   * Get webhook shares
   */
  async shares(id: string | number): Promise<paths['/api/v2/webhook/data/{id}/shares']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/data/{id}/shares']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/webhook/data/${id}/shares`,
      
      
    });
  }
      

  /**
   * Get LLM reactions for webhook
   */
  async llmReactions(id: string | number, queryParams: paths['/api/v2/webhook/data/{id}/llm-reactions']['get']['parameters']['query']): Promise<paths['/api/v2/webhook/data/{id}/llm-reactions']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/data/{id}/llm-reactions']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/webhook/data/${id}/llm-reactions`,
      
      queryParams,
    });
  }
      

  /**
   * Get code reactions for webhook
   */
  async codeReactions(id: string | number, queryParams: paths['/api/v2/webhook/data/{id}/code-reactions']['get']['parameters']['query']): Promise<paths['/api/v2/webhook/data/{id}/code-reactions']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/data/{id}/code-reactions']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/webhook/data/${id}/code-reactions`,
      
      queryParams,
    });
  }
      

  /**
   * Share webhook with user
   */
  async (id: string | number, body: NonNullable<paths['/api/v2/webhook/data/share/{id}']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/webhook/data/share/{id}']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/data/share/{id}']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/webhook/data/share/${id}`,
      body,
      
    });
  }
      

  /**
   * Remove webhook share
   */
  async deleteShare(id: string | number, body: NonNullable<paths['/api/v2/webhook/data/share/{id}']['delete']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/webhook/data/share/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/data/share/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/webhook/data/share/${id}`,
      body,
      
    });
  }
      

  /**
   * Update webhook status
   */
  async status(id: string | number, body: NonNullable<paths['/api/v2/webhook/data/{id}/status']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/webhook/data/{id}/status']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/data/{id}/status']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/webhook/data/${id}/status`,
      body,
      
    });
  }
      

  /**
   * Get all shared data webhooks for user
   */
  async listShared(): Promise<paths['/api/v2/webhook/data/shared']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/data/shared']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/webhook/data/shared`,
      
      
    });
  }
      

  /**
   * Get data webhooks shared with specific user
   */
  async getWithShared(id: string | number): Promise<paths['/api/v2/webhook/data/shared/with/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/data/shared/with/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/webhook/data/shared/with/${id}`,
      
      
    });
  }
      

  /**
   * Get data webhooks shared by specific user
   */
  async getByShared(id: string | number): Promise<paths['/api/v2/webhook/data/shared/by/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/webhook/data/shared/by/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/webhook/data/shared/by/${id}`,
      
      
    });
  }
      
}
