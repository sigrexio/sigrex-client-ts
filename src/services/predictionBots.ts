import { SigrexBaseClient } from '../client.js';
import { paths } from '../types.js';

export class PredictionBotsService {
  constructor(private client: SigrexBaseClient) {}

  /**
   * Get prediction market by slug
   */
  async getMarket(slug: string | number): Promise<paths['/api/v2/bot/signal/prediction/market/{slug}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/prediction/market/{slug}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/prediction/market/${slug}`,
      
      
    });
  }
      

  /**
   * Get all prediction signal bots
   */
  async list(): Promise<paths['/api/v2/bot/signal/prediction']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/prediction']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/prediction`,
      
      
    });
  }
      

  /**
   * Create a new prediction signal bot
   */
  async create(body: NonNullable<paths['/api/v2/bot/signal/prediction']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/bot/signal/prediction']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/prediction']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/bot/signal/prediction`,
      body,
      
    });
  }
      

  /**
   * Get the total number of Prediction signal bots
   */
  async getTotal(): Promise<paths['/api/v2/bot/signal/prediction/total']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/prediction/total']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/prediction/total`,
      
      
    });
  }
      

  /**
   * Get prediction signal bot by ID
   */
  async get(id: string | number): Promise<paths['/api/v2/bot/signal/prediction/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/prediction/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/prediction/${id}`,
      
      
    });
  }
      

  /**
   * Update prediction signal bot
   */
  async update(id: string | number, body: NonNullable<paths['/api/v2/bot/signal/prediction/{id}']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/bot/signal/prediction/{id}']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/prediction/{id}']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/bot/signal/prediction/${id}`,
      body,
      
    });
  }
      

  /**
   * Delete prediction signal bot
   */
  async delete(id: string | number): Promise<paths['/api/v2/bot/signal/prediction/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/prediction/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/bot/signal/prediction/${id}`,
      
      
    });
  }
      

  /**
   * Update prediction signal bot status
   */
  async status(id: string | number, body: NonNullable<paths['/api/v2/bot/signal/prediction/{id}/status']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/bot/signal/prediction/{id}/status']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/prediction/{id}/status']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/bot/signal/prediction/${id}/status`,
      body,
      
    });
  }
      

  /**
   * Duplicate a prediction signal bot
   */
  async duplicate(body: NonNullable<paths['/api/v2/bot/signal/prediction/duplicate']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/bot/signal/prediction/duplicate']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/prediction/duplicate']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/bot/signal/prediction/duplicate`,
      body,
      
    });
  }
      

  /**
   * Get all prediction signal bot folders
   */
  async listFolder(): Promise<paths['/api/v2/bot/signal/prediction/folder']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/prediction/folder']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/prediction/folder`,
      
      
    });
  }
      

  /**
   * Create a new prediction signal bot folder
   */
  async postFolder(body: NonNullable<paths['/api/v2/bot/signal/prediction/folder']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/bot/signal/prediction/folder']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/prediction/folder']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/bot/signal/prediction/folder`,
      body,
      
    });
  }
      

  /**
   * Get prediction signal bots from root folder
   */
  async listFolderRoot(): Promise<paths['/api/v2/bot/signal/prediction/folder/root']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/prediction/folder/root']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/prediction/folder/root`,
      
      
    });
  }
      

  /**
   * Get prediction signal bot folder by ID
   */
  async getFolder(id: string | number): Promise<paths['/api/v2/bot/signal/prediction/folder/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/prediction/folder/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/prediction/folder/${id}`,
      
      
    });
  }
      

  /**
   * Update prediction signal bot folder
   */
  async updateFolder(id: string | number, body: NonNullable<paths['/api/v2/bot/signal/prediction/folder/{id}']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/bot/signal/prediction/folder/{id}']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/prediction/folder/{id}']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/bot/signal/prediction/folder/${id}`,
      body,
      
    });
  }
      

  /**
   * Delete prediction signal bot folder
   */
  async deleteFolder(id: string | number): Promise<paths['/api/v2/bot/signal/prediction/folder/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/prediction/folder/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/bot/signal/prediction/folder/${id}`,
      
      
    });
  }
      
}
