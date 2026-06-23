import { SigrexBaseClient } from '../client.js';
import { paths } from '../types.js';

export class CexBotsService {
  constructor(private client: SigrexBaseClient) {}

  /**
   * Get all CEX signal bots
   */
  async list(): Promise<paths['/api/v2/bot/signal/cex']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/cex']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/cex`,
      
      
    });
  }
      

  /**
   * Create a new CEX signal bot
   */
  async create(body: NonNullable<paths['/api/v2/bot/signal/cex']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/bot/signal/cex']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/cex']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/bot/signal/cex`,
      body,
      
    });
  }
      

  /**
   * Get the total number of CEX signal bots
   */
  async getTotal(): Promise<paths['/api/v2/bot/signal/cex/total']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/cex/total']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/cex/total`,
      
      
    });
  }
      

  /**
   * Get CEX signal bot by ID
   */
  async get(id: string | number): Promise<paths['/api/v2/bot/signal/cex/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/cex/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/cex/${id}`,
      
      
    });
  }
      

  /**
   * Update CEX signal bot
   */
  async update(id: string | number, body: NonNullable<paths['/api/v2/bot/signal/cex/{id}']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/bot/signal/cex/{id}']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/cex/{id}']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/bot/signal/cex/${id}`,
      body,
      
    });
  }
      

  /**
   * Delete CEX signal bot
   */
  async delete(id: string | number): Promise<paths['/api/v2/bot/signal/cex/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/cex/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/bot/signal/cex/${id}`,
      
      
    });
  }
      

  /**
   * Update CEX signal bot status
   */
  async status(id: string | number, body: NonNullable<paths['/api/v2/bot/signal/cex/{id}/status']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/bot/signal/cex/{id}/status']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/cex/{id}/status']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/bot/signal/cex/${id}/status`,
      body,
      
    });
  }
      

  /**
   * Duplicate a CEX signal bot
   */
  async duplicate(body: NonNullable<paths['/api/v2/bot/signal/cex/duplicate']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/bot/signal/cex/duplicate']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/cex/duplicate']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/bot/signal/cex/duplicate`,
      body,
      
    });
  }
      

  /**
   * Get all CEX signal bot folders
   */
  async listFolder(): Promise<paths['/api/v2/bot/signal/cex/folder']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/cex/folder']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/cex/folder`,
      
      
    });
  }
      

  /**
   * Create a new CEX signal bot folder
   */
  async postFolder(body: NonNullable<paths['/api/v2/bot/signal/cex/folder']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/bot/signal/cex/folder']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/cex/folder']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/bot/signal/cex/folder`,
      body,
      
    });
  }
      

  /**
   * Get CEX signal bots from root folder
   */
  async listFolderRoot(): Promise<paths['/api/v2/bot/signal/cex/folder/root']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/cex/folder/root']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/cex/folder/root`,
      
      
    });
  }
      

  /**
   * Get CEX signal bot folder by ID
   */
  async getFolder(id: string | number): Promise<paths['/api/v2/bot/signal/cex/folder/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/cex/folder/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/cex/folder/${id}`,
      
      
    });
  }
      

  /**
   * Update CEX signal bot folder
   */
  async updateFolder(id: string | number, body: NonNullable<paths['/api/v2/bot/signal/cex/folder/{id}']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/bot/signal/cex/folder/{id}']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/cex/folder/{id}']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/bot/signal/cex/folder/${id}`,
      body,
      
    });
  }
      

  /**
   * Delete CEX signal bot folder
   */
  async deleteFolder(id: string | number): Promise<paths['/api/v2/bot/signal/cex/folder/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/cex/folder/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/bot/signal/cex/folder/${id}`,
      
      
    });
  }
      
}
