import { SigrexBaseClient } from '../client.js';
import { paths } from '../types.js';

export class LlmApiKeysService {
  constructor(private client: SigrexBaseClient) {}

  /**
   * Get all enabled LLM services
   */
  async listServices(): Promise<paths['/api/v2/api/llm/services']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/api/llm/services']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/api/llm/services`,
      
      
    });
  }
      

  /**
   * Get models for a specific service
   */
  async getModels(serviceId: string | number): Promise<paths['/api/v2/api/llm/models/{serviceId}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/api/llm/models/{serviceId}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/api/llm/models/${serviceId}`,
      
      
    });
  }
      

  /**
   * Update model for an API key
   */
  async model(id: string | number, body: NonNullable<paths['/api/v2/api/llm/{id}/model']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/api/llm/{id}/model']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/api/llm/{id}/model']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/api/llm/${id}/model`,
      body,
      
    });
  }
      

  /**
   * Get all LLM API keys for user
   */
  async list(): Promise<paths['/api/v2/api/llm']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/api/llm']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/api/llm`,
      
      
    });
  }
      

  /**
   * Create a new LLM API key
   */
  async create(body: NonNullable<paths['/api/v2/api/llm']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/api/llm']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/api/llm']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/api/llm`,
      body,
      
    });
  }
      

  /**
   * Delete an LLM API key
   */
  async delete(id: string | number): Promise<paths['/api/v2/api/llm/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/api/llm/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/api/llm/${id}`,
      
      
    });
  }
      
}
