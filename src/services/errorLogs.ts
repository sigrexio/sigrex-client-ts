import { SigrexBaseClient } from '../client.js';
import { paths } from '../types.js';

export class ErrorLogsService {
  constructor(private client: SigrexBaseClient) {}

  /**
   * Get paginated error logs
   */
  async list(queryParams: paths['/api/v2/log/error/paginated']['get']['parameters']['query']): Promise<paths['/api/v2/log/error/paginated']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/log/error/paginated']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/log/error/paginated`,
      
      queryParams,
    });
  }
      

  /**
   * Get paginated error logs by source and source id
   */
  async listBySourceAndId(source: paths['/api/v2/log/error/{source}/{id}']['get']['parameters']['path']['source'], id: string | number, queryParams: paths['/api/v2/log/error/{source}/{id}']['get']['parameters']['query']): Promise<paths['/api/v2/log/error/{source}/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/log/error/{source}/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/log/error/${source}/${id}`,
      
      queryParams,
    });
  }
      

  /**
   * Get an error log by id
   */
  async get(id: string | number): Promise<paths['/api/v2/log/error/{id}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/log/error/{id}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/log/error/${id}`,
      
      
    });
  }
      
}
