import { SigrexBaseClient } from '../client.js';
import { paths } from '../types.js';

export class LlmSessionsService {
  constructor(private client: SigrexBaseClient) {}

  /**
   * Get all LLM sessions
   */
  async list(): Promise<paths['/api/v2/strategy/llm-session']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/llm-session']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/llm-session`,
      
      
    });
  }
      

  /**
   * Create a new LLM session
   */
  async create(body: NonNullable<paths['/api/v2/strategy/llm-session']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/llm-session']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/llm-session']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/strategy/llm-session`,
      body,
      
    });
  }
      

  /**
   * Get the total number of LLM sessions
   */
  async getTotal(): Promise<paths['/api/v2/strategy/llm-session/total']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/llm-session/total']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/llm-session/total`,
      
      
    });
  }
      

  /**
   * Get LLM session by ID
   */
  async get(id: string | number): Promise<paths['/api/v2/strategy/llm-session/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/llm-session/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/llm-session/${id}`,
      
      
    });
  }
      

  /**
   * Update LLM session
   */
  async update(id: string | number, body: NonNullable<paths['/api/v2/strategy/llm-session/{id}']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/llm-session/{id}']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/llm-session/{id}']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/strategy/llm-session/${id}`,
      body,
      
    });
  }
      

  /**
   * Delete LLM session
   */
  async delete(id: string | number): Promise<paths['/api/v2/strategy/llm-session/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/llm-session/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/strategy/llm-session/${id}`,
      
      
    });
  }
      

  /**
   * Duplicate an LLM session
   */
  async duplicate(body: NonNullable<paths['/api/v2/strategy/llm-session/duplicate']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/llm-session/duplicate']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/llm-session/duplicate']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/strategy/llm-session/duplicate`,
      body,
      
    });
  }
      

  /**
   * Reset LLM session triggers, history or responses
   */
  async reset(id: string | number, body: NonNullable<paths['/api/v2/strategy/llm-session/{id}/reset']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/llm-session/{id}/reset']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/llm-session/{id}/reset']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/strategy/llm-session/${id}/reset`,
      body,
      
    });
  }
      

  /**
   * Update LLM session status
   */
  async status(id: string | number, body: NonNullable<paths['/api/v2/strategy/llm-session/{id}/status']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/llm-session/{id}/status']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/llm-session/{id}/status']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/strategy/llm-session/${id}/status`,
      body,
      
    });
  }
      

  /**
   * Update LLM session public visibility
   */
  async public(id: string | number, body: NonNullable<paths['/api/v2/strategy/llm-session/{id}/public']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/llm-session/{id}/public']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/llm-session/{id}/public']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/strategy/llm-session/${id}/public`,
      body,
      
    });
  }
      

  /**
   * Get all LLM session folders
   */
  async listFolder(): Promise<paths['/api/v2/strategy/llm-session/folder']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/llm-session/folder']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/llm-session/folder`,
      
      
    });
  }
      

  /**
   * Create a new LLM session folder
   */
  async postFolder(body: NonNullable<paths['/api/v2/strategy/llm-session/folder']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/llm-session/folder']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/llm-session/folder']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/strategy/llm-session/folder`,
      body,
      
    });
  }
      

  /**
   * Get LLM Sessions from root folder
   */
  async listFolderRoot(): Promise<paths['/api/v2/strategy/llm-session/folder/root']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/llm-session/folder/root']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/llm-session/folder/root`,
      
      
    });
  }
      

  /**
   * Get LLM session folder by ID
   */
  async getFolder(id: string | number): Promise<paths['/api/v2/strategy/llm-session/folder/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/llm-session/folder/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/llm-session/folder/${id}`,
      
      
    });
  }
      

  /**
   * Update LLM session folder
   */
  async updateFolder(id: string | number, body: NonNullable<paths['/api/v2/strategy/llm-session/folder/{id}']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/llm-session/folder/{id}']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/llm-session/folder/{id}']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/strategy/llm-session/folder/${id}`,
      body,
      
    });
  }
      

  /**
   * Delete LLM session folder
   */
  async deleteFolder(id: string | number): Promise<paths['/api/v2/strategy/llm-session/folder/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/llm-session/folder/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/strategy/llm-session/folder/${id}`,
      
      
    });
  }
      
}
