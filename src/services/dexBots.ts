import { SigrexBaseClient } from '../client.js';
import { paths } from '../types.js';

export class DexBotsService {
  constructor(private client: SigrexBaseClient) {}

  /**
   * Get all DEX signal bots
   */
  async list(): Promise<paths['/api/v2/bot/signal/dex']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/dex']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/dex`,
      
      
    });
  }
      

  /**
   * Create a new DEX signal bot
   */
  async create(body: NonNullable<paths['/api/v2/bot/signal/dex']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/bot/signal/dex']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/dex']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/bot/signal/dex`,
      body,
      
    });
  }
      

  /**
   * Get the total number of DEX signal bots
   */
  async getTotal(): Promise<paths['/api/v2/bot/signal/dex/total']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/dex/total']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/dex/total`,
      
      
    });
  }
      

  /**
   * Get DEX signal bot by ID
   */
  async get(id: string | number): Promise<paths['/api/v2/bot/signal/dex/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/dex/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/dex/${id}`,
      
      
    });
  }
      

  /**
   * Update DEX signal bot
   */
  async update(id: string | number, body: NonNullable<paths['/api/v2/bot/signal/dex/{id}']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/bot/signal/dex/{id}']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/dex/{id}']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/bot/signal/dex/${id}`,
      body,
      
    });
  }
      

  /**
   * Delete DEX signal bot
   */
  async delete(id: string | number): Promise<paths['/api/v2/bot/signal/dex/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/dex/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/bot/signal/dex/${id}`,
      
      
    });
  }
      

  /**
   * Get DEX signal bot by chain and address
   */
  async getByChainAndAddress(chainId: string | number, address: string | number): Promise<paths['/api/v2/bot/signal/dex/{chainId}/{address}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/dex/{chainId}/{address}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/dex/${chainId}/${address}`,
      
      
    });
  }
      

  /**
   * Get bot factory by chain and exchange
   */
  async getFactory(chainId: string | number, exchangeId: string | number): Promise<paths['/api/v2/bot/signal/dex/factory/{chainId}/{exchangeId}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/dex/factory/{chainId}/{exchangeId}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/dex/factory/${chainId}/${exchangeId}`,
      
      
    });
  }
      

  /**
   * Update DEX signal bot status
   */
  async status(id: string | number, body: NonNullable<paths['/api/v2/bot/signal/dex/{id}/status']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/bot/signal/dex/{id}/status']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/dex/{id}/status']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/bot/signal/dex/${id}/status`,
      body,
      
    });
  }
      

  /**
   * Get all DEX signal bot folders
   */
  async listFolder(): Promise<paths['/api/v2/bot/signal/dex/folder']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/dex/folder']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/dex/folder`,
      
      
    });
  }
      

  /**
   * Create a new DEX signal bot folder
   */
  async postFolder(body: NonNullable<paths['/api/v2/bot/signal/dex/folder']['post']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/bot/signal/dex/folder']['post']['responses']['201']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/dex/folder']['post']['responses']['201']['content']['application/json']>({
      method: 'POST',
      path: `/api/v2/bot/signal/dex/folder`,
      body,
      
    });
  }
      

  /**
   * Get DEX signal bots from root folder
   */
  async listFolderRoot(): Promise<paths['/api/v2/bot/signal/dex/folder/root']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/dex/folder/root']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/dex/folder/root`,
      
      
    });
  }
      

  /**
   * Get DEX signal bot folder by ID
   */
  async getFolder(id: string | number): Promise<paths['/api/v2/bot/signal/dex/folder/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/dex/folder/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/bot/signal/dex/folder/${id}`,
      
      
    });
  }
      

  /**
   * Update DEX signal bot folder
   */
  async updateFolder(id: string | number, body: NonNullable<paths['/api/v2/bot/signal/dex/folder/{id}']['put']['requestBody']>['content']['application/json']): Promise<paths['/api/v2/bot/signal/dex/folder/{id}']['put']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/dex/folder/{id}']['put']['responses']['200']['content']['application/json']>({
      method: 'PUT',
      path: `/api/v2/bot/signal/dex/folder/${id}`,
      body,
      
    });
  }
      

  /**
   * Delete DEX signal bot folder
   */
  async deleteFolder(id: string | number): Promise<paths['/api/v2/bot/signal/dex/folder/{id}']['delete']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/bot/signal/dex/folder/{id}']['delete']['responses']['200']['content']['application/json']>({
      method: 'DELETE',
      path: `/api/v2/bot/signal/dex/folder/${id}`,
      
      
    });
  }
      
}
