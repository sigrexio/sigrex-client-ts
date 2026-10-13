import { SigrexBaseClient } from '../client.js';
import { paths } from '../types.js';

export class DataLogsService {
  constructor(private client: SigrexBaseClient) {}

  /**
   * Get paginated data logs
   */
  async list(queryParams: paths['/api/v2/log/data/paginated']['get']['parameters']['query']): Promise<paths['/api/v2/log/data/paginated']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/log/data/paginated']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/log/data/paginated`,
      
      queryParams,
    });
  }
      

  /**
   * Get paginated data logs of a data hook
   */
  async listHook(hookId: string | number, queryParams: paths['/api/v2/log/data/hook/{hookId}/paginated']['get']['parameters']['query']): Promise<paths['/api/v2/log/data/hook/{hookId}/paginated']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/log/data/hook/{hookId}/paginated']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/log/data/hook/${hookId}/paginated`,
      
      queryParams,
    });
  }
      
}
