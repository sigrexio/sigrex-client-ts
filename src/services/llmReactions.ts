import { SigrexBaseClient } from '../client.js';
import { paths } from '../types.js';

export class LlmReactionsService {
  constructor(private client: SigrexBaseClient) {}

  /**
   * Get all LLM reactions
   */
  async list(): Promise<paths['/api/v2/strategy/reaction/llm']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/llm']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/reaction/llm`,
      
      
    });
  }
      

  /**
   * Create a new LLM reaction
   */
  async create(body: NonNullable<paths['/api/v2/strategy/reaction/llm']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/reaction/llm']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/llm']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/strategy/reaction/llm`,
      body,
      
    });
  }
      

  /**
   * Get LLM reaction by ID
   */
  async get(id: string | number): Promise<paths['/api/v2/strategy/reaction/llm/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/llm/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/reaction/llm/${id}`,
      
      
    });
  }
      

  /**
   * Update LLM reaction
   */
  async update(id: string | number, body: NonNullable<paths['/api/v2/strategy/reaction/llm/{id}']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/reaction/llm/{id}']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/llm/{id}']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/strategy/reaction/llm/${id}`,
      body,
      
    });
  }
      

  /**
   * Delete LLM reaction
   */
  async delete(id: string | number): Promise<paths['/api/v2/strategy/reaction/llm/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/llm/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/strategy/reaction/llm/${id}`,
      
      
    });
  }
      

  /**
   * Get the total number of LLM Reaction
   */
  async getTotal(): Promise<paths['/api/v2/strategy/reaction/llm/total']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/llm/total']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/reaction/llm/total`,
      
      
    });
  }
      

  /**
   * Duplicate an LLM reaction
   */
  async duplicate(body: NonNullable<paths['/api/v2/strategy/reaction/llm/duplicate']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/reaction/llm/duplicate']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/llm/duplicate']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/strategy/reaction/llm/duplicate`,
      body,
      
    });
  }
      

  /**
   * Reset LLM reaction triggers, history or responses
   */
  async reset(id: string | number, body: NonNullable<paths['/api/v2/strategy/reaction/llm/{id}/reset']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/reaction/llm/{id}/reset']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/llm/{id}/reset']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/strategy/reaction/llm/${id}/reset`,
      body,
      
    });
  }
      

  /**
   * Update LLM reaction status
   */
  async status(id: string | number, body: NonNullable<paths['/api/v2/strategy/reaction/llm/{id}/status']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/reaction/llm/{id}/status']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/llm/{id}/status']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/strategy/reaction/llm/${id}/status`,
      body,
      
    });
  }
      

  /**
   * Update LLM reaction public visibility
   */
  async public(id: string | number, body: NonNullable<paths['/api/v2/strategy/reaction/llm/{id}/public']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/reaction/llm/{id}/public']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/llm/{id}/public']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/strategy/reaction/llm/${id}/public`,
      body,
      
    });
  }
      

  /**
   * Get all LLM reaction folders
   */
  async listFolder(): Promise<paths['/api/v2/strategy/reaction/llm/folder']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/llm/folder']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/reaction/llm/folder`,
      
      
    });
  }
      

  /**
   * Create a new LLM reaction folder
   */
  async postFolder(body: NonNullable<paths['/api/v2/strategy/reaction/llm/folder']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/reaction/llm/folder']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/llm/folder']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/strategy/reaction/llm/folder`,
      body,
      
    });
  }
      

  /**
   * Get LLM reactions from root folder
   */
  async listFolderRoot(): Promise<paths['/api/v2/strategy/reaction/llm/folder/root']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/llm/folder/root']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/reaction/llm/folder/root`,
      
      
    });
  }
      

  /**
   * Get LLM reaction folder by ID
   */
  async getFolder(id: string | number): Promise<paths['/api/v2/strategy/reaction/llm/folder/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/llm/folder/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/reaction/llm/folder/${id}`,
      
      
    });
  }
      

  /**
   * Update LLM reaction folder
   */
  async updateFolder(id: string | number, body: NonNullable<paths['/api/v2/strategy/reaction/llm/folder/{id}']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/reaction/llm/folder/{id}']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/llm/folder/{id}']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/strategy/reaction/llm/folder/${id}`,
      body,
      
    });
  }
      

  /**
   * Delete LLM reaction folder
   */
  async deleteFolder(id: string | number): Promise<paths['/api/v2/strategy/reaction/llm/folder/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/llm/folder/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/strategy/reaction/llm/folder/${id}`,
      
      
    });
  }
      
}
