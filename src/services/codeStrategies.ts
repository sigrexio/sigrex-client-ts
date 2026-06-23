import { SigrexBaseClient } from '../client.js';
import { paths } from '../types.js';

export class CodeStrategiesService {
  constructor(private client: SigrexBaseClient) {}

  /**
   * Get all code strategies
   */
  async list(): Promise<paths['/api/v2/strategy/code']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/code']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/code`,
      
      
    });
  }
      

  /**
   * Create a new code strategy
   */
  async create(body: NonNullable<paths['/api/v2/strategy/code']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/code']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/code']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/strategy/code`,
      body,
      
    });
  }
      

  /**
   * Get the total number of Code Strategies
   */
  async getTotal(): Promise<paths['/api/v2/strategy/code/total']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/code/total']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/code/total`,
      
      
    });
  }
      

  /**
   * Get code strategy by ID
   */
  async get(id: string | number): Promise<paths['/api/v2/strategy/code/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/code/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/code/${id}`,
      
      
    });
  }
      

  /**
   * Update code strategy
   */
  async update(id: string | number, body: NonNullable<paths['/api/v2/strategy/code/{id}']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/code/{id}']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/code/{id}']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/strategy/code/${id}`,
      body,
      
    });
  }
      

  /**
   * Delete code strategy
   */
  async delete(id: string | number): Promise<paths['/api/v2/strategy/code/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/code/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/strategy/code/${id}`,
      
      
    });
  }
      

  /**
   * Duplicate a code strategy
   */
  async duplicate(body: NonNullable<paths['/api/v2/strategy/code/duplicate']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/code/duplicate']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/code/duplicate']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/strategy/code/duplicate`,
      body,
      
    });
  }
      

  /**
   * Reset code strategy triggers and/or storage
   */
  async reset(id: string | number, body: NonNullable<paths['/api/v2/strategy/code/{id}/reset']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/code/{id}/reset']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/code/{id}/reset']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/strategy/code/${id}/reset`,
      body,
      
    });
  }
      

  /**
   * Update code strategy status
   */
  async status(id: string | number, body: NonNullable<paths['/api/v2/strategy/code/{id}/status']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/code/{id}/status']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/code/{id}/status']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/strategy/code/${id}/status`,
      body,
      
    });
  }
      

  /**
   * Update code strategy public visibility
   */
  async public(id: string | number, body: NonNullable<paths['/api/v2/strategy/code/{id}/public']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/code/{id}/public']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/code/{id}/public']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/strategy/code/${id}/public`,
      body,
      
    });
  }
      

  /**
   * Delete code strategy storage
   */
  async store(id: string | number): Promise<paths['/api/v2/strategy/code/{id}/store']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/code/{id}/store']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/strategy/code/${id}/store`,
      
      
    });
  }
      

  /**
   * Get all code strategy folders
   */
  async listFolder(): Promise<paths['/api/v2/strategy/code/folder']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/code/folder']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/code/folder`,
      
      
    });
  }
      

  /**
   * Create a new code strategy folder
   */
  async postFolder(body: NonNullable<paths['/api/v2/strategy/code/folder']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/code/folder']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/code/folder']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/strategy/code/folder`,
      body,
      
    });
  }
      

  /**
   * Get code strategies from root folder
   */
  async listFolderRoot(): Promise<paths['/api/v2/strategy/code/folder/root']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/code/folder/root']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/code/folder/root`,
      
      
    });
  }
      

  /**
   * Get code strategy folder by ID
   */
  async getFolder(id: string | number): Promise<paths['/api/v2/strategy/code/folder/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/code/folder/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/strategy/code/folder/${id}`,
      
      
    });
  }
      

  /**
   * Update code strategy folder
   */
  async updateFolder(id: string | number, body: NonNullable<paths['/api/v2/strategy/code/folder/{id}']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/strategy/code/folder/{id}']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/code/folder/{id}']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/strategy/code/folder/${id}`,
      body,
      
    });
  }
      

  /**
   * Delete code strategy folder
   */
  async deleteFolder(id: string | number): Promise<paths['/api/v2/strategy/code/folder/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/strategy/code/folder/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/strategy/code/folder/${id}`,
      
      
    });
  }
      
}
