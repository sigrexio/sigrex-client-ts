import { SigrexBaseClient } from '../client.js';
import { paths } from '../types.js';

export class ExchangesService {
  constructor(private client: SigrexBaseClient) {}

  /**
   * Get all exchanges with optional filtering
   */
  async list(queryParams?: paths['/api/v2/exchange']['get']['parameters']['query']): Promise<paths['/api/v2/exchange']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/exchange']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/exchange`,
      
      queryParams,
    });
  }
      

  /**
   * Get all CEX exchanges
   */
  async listCex(): Promise<paths['/api/v2/exchange/cex']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/exchange/cex']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/exchange/cex`,
      
      
    });
  }
      

  /**
   * Get all DEX exchanges by chain ID
   */
  async getDex(chain: string | number): Promise<paths['/api/v2/exchange/dex/{chain}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/exchange/dex/{chain}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/exchange/dex/${chain}`,
      
      
    });
  }
      

  /**
   * Get all Prediction exchanges
   */
  async listPrediction(): Promise<paths['/api/v2/exchange/prediction']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/exchange/prediction']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/exchange/prediction`,
      
      
    });
  }
      

  /**
   * Get all exchanges with exchange rates
   */
  async listWithExchangeRate(): Promise<paths['/api/v2/exchange/with-exchange-rate']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/exchange/with-exchange-rate']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/exchange/with-exchange-rate`,
      
      
    });
  }
      
}
