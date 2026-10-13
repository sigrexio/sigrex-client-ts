import { SigrexBaseClient } from '../client.js';
import { paths } from '../types.js';

export class TransactionLogsService {
  constructor(private client: SigrexBaseClient) {}

  /**
   * Get paginated transaction logs
   */
  async list(queryParams: paths['/api/v2/log/transaction']['get']['parameters']['query']): Promise<paths['/api/v2/log/transaction']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/log/transaction']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/log/transaction`,
      
      queryParams,
    });
  }
      

  /**
   * Get paginated transaction logs of a signal bot
   */
  async listSignalBot(type: paths['/api/v2/log/transaction/bot/signal/{type}/{service}/{id}']['get']['parameters']['path']['type'], service: paths['/api/v2/log/transaction/bot/signal/{type}/{service}/{id}']['get']['parameters']['path']['service'], id: string | number, queryParams: paths['/api/v2/log/transaction/bot/signal/{type}/{service}/{id}']['get']['parameters']['query']): Promise<paths['/api/v2/log/transaction/bot/signal/{type}/{service}/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/log/transaction/bot/signal/{type}/{service}/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/log/transaction/bot/signal/${type}/${service}/${id}`,
      
      queryParams,
    });
  }
      

  /**
   * Get a transaction log by id
   */
  async get(id: string | number): Promise<paths['/api/v2/log/transaction/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/log/transaction/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/log/transaction/${id}`,
      
      
    });
  }
      
}
