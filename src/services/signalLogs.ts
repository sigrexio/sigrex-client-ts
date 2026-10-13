import { SigrexBaseClient } from '../client.js';
import { paths } from '../types.js';

export class SignalLogsService {
  constructor(private client: SigrexBaseClient) {}

  /**
   * Get paginated signal logs
   */
  async list(queryParams: paths['/api/v2/log/signal/paginated']['get']['parameters']['query']): Promise<paths['/api/v2/log/signal/paginated']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/log/signal/paginated']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/log/signal/paginated`,
      
      queryParams,
    });
  }
      

  /**
   * Get paginated signal logs of a bot hook
   */
  async listHook(hookId: string | number, queryParams: paths['/api/v2/log/signal/hook/{hookId}/paginated']['get']['parameters']['query']): Promise<paths['/api/v2/log/signal/hook/{hookId}/paginated']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/log/signal/hook/{hookId}/paginated']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/log/signal/hook/${hookId}/paginated`,
      
      queryParams,
    });
  }
      

  /**
   * Get paginated signal logs by source
   */
  async listBySource(source: paths['/api/v2/log/signal/{source}/paginated']['get']['parameters']['path']['source'], queryParams: paths['/api/v2/log/signal/{source}/paginated']['get']['parameters']['query']): Promise<paths['/api/v2/log/signal/{source}/paginated']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/log/signal/{source}/paginated']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/log/signal/${source}/paginated`,
      
      queryParams,
    });
  }
      

  /**
   * Get paginated signal logs by source and source id
   */
  async listBySourceAndId(source: paths['/api/v2/log/signal/{source}/{id}/paginated']['get']['parameters']['path']['source'], id: string | number, queryParams: paths['/api/v2/log/signal/{source}/{id}/paginated']['get']['parameters']['query']): Promise<paths['/api/v2/log/signal/{source}/{id}/paginated']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/log/signal/{source}/{id}/paginated']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/log/signal/${source}/${id}/paginated`,
      
      queryParams,
    });
  }
      
}
