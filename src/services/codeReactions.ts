import { SigrexBaseClient } from '../client.js';
import { paths } from '../types.js';

export class CodeReactionsService {
  constructor(private client: SigrexBaseClient) {}

  /**
   * Get all code reactions
   */
  async list(): Promise<paths['/api/v2/strategy/reaction/code']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/code']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/reaction/code`,
      
      
    });
  }
      

  /**
   * Create a new code reaction
   */
  async create(body: NonNullable<paths['/api/v2/strategy/reaction/code']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/reaction/code']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/code']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/strategy/reaction/code`,
      body,
      
    });
  }
      

  /**
   * Get the total number of Code Reactions
   */
  async getTotal(): Promise<paths['/api/v2/strategy/reaction/code/total']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/code/total']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/reaction/code/total`,
      
      
    });
  }
      

  /**
   * Get code reaction by ID
   */
  async get(id: string | number): Promise<paths['/api/v2/strategy/reaction/code/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/code/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/reaction/code/${id}`,
      
      
    });
  }
      

  /**
   * Update code reaction
   */
  async update(id: string | number, body: NonNullable<paths['/api/v2/strategy/reaction/code/{id}']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/reaction/code/{id}']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/code/{id}']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/strategy/reaction/code/${id}`,
      body,
      
    });
  }
      

  /**
   * Delete code reaction
   */
  async delete(id: string | number): Promise<paths['/api/v2/strategy/reaction/code/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/code/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/strategy/reaction/code/${id}`,
      
      
    });
  }
      

  /**
   * Duplicate a code reaction
   */
  async duplicate(body: NonNullable<paths['/api/v2/strategy/reaction/code/duplicate']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/reaction/code/duplicate']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/code/duplicate']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/strategy/reaction/code/duplicate`,
      body,
      
    });
  }
      

  /**
   * Reset code reaction triggers and/or storage
   */
  async reset(id: string | number, body: NonNullable<paths['/api/v2/strategy/reaction/code/{id}/reset']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/reaction/code/{id}/reset']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/code/{id}/reset']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/strategy/reaction/code/${id}/reset`,
      body,
      
    });
  }
      

  /**
   * Update code reaction status
   */
  async status(id: string | number, body: NonNullable<paths['/api/v2/strategy/reaction/code/{id}/status']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/reaction/code/{id}/status']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/code/{id}/status']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/strategy/reaction/code/${id}/status`,
      body,
      
    });
  }
      

  /**
   * Update code reaction public visibility
   */
  async public(id: string | number, body: NonNullable<paths['/api/v2/strategy/reaction/code/{id}/public']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/reaction/code/{id}/public']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/code/{id}/public']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/strategy/reaction/code/${id}/public`,
      body,
      
    });
  }
      

  /**
   * Delete code reaction storage
   */
  async store(id: string | number): Promise<paths['/api/v2/strategy/reaction/code/{id}/store']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/code/{id}/store']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/strategy/reaction/code/${id}/store`,
      
      
    });
  }
      

  /**
   * Get all code reaction folders
   */
  async listFolder(): Promise<paths['/api/v2/strategy/reaction/code/folder']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/code/folder']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/reaction/code/folder`,
      
      
    });
  }
      

  /**
   * Create a new code reaction folder
   */
  async postFolder(body: NonNullable<paths['/api/v2/strategy/reaction/code/folder']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/reaction/code/folder']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/code/folder']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/strategy/reaction/code/folder`,
      body,
      
    });
  }
      

  /**
   * Get code reactions from root folder
   */
  async listFolderRoot(): Promise<paths['/api/v2/strategy/reaction/code/folder/root']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/code/folder/root']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/reaction/code/folder/root`,
      
      
    });
  }
      

  /**
   * Get code reaction folder by ID
   */
  async getFolder(id: string | number): Promise<paths['/api/v2/strategy/reaction/code/folder/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/code/folder/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/reaction/code/folder/${id}`,
      
      
    });
  }
      

  /**
   * Update code reaction folder
   */
  async updateFolder(id: string | number, body: NonNullable<paths['/api/v2/strategy/reaction/code/folder/{id}']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/reaction/code/folder/{id}']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/code/folder/{id}']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/strategy/reaction/code/folder/${id}`,
      body,
      
    });
  }
      

  /**
   * Delete code reaction folder
   */
  async deleteFolder(id: string | number): Promise<paths['/api/v2/strategy/reaction/code/folder/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/reaction/code/folder/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/strategy/reaction/code/folder/${id}`,
      
      
    });
  }
      
}
