import { SigrexBaseClient } from '../client.js';
import { paths } from '../types.js';

export class AccountService {
  constructor(private client: SigrexBaseClient) {}

  /**
   * Get the authenticated user's account
   */
  async getMe(): Promise<paths['/api/v2/account/me']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/account/me']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/account/me`,
      
      
    });
  }
      

  /**
   * Get all friendships by status
   */
  async listAllFriend(status: paths['/api/v2/account/friend/all/{status}']['get']['parameters']['path']['status']): Promise<paths['/api/v2/account/friend/all/{status}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/account/friend/all/{status}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/account/friend/all/${status}`,
      
      
    });
  }
      

  /**
   * Get paginated friendships by status and side
   */
  async listFriend(status: paths['/api/v2/account/friend/{status}/{side}']['get']['parameters']['path']['status'], side: paths['/api/v2/account/friend/{status}/{side}']['get']['parameters']['path']['side'], queryParams: paths['/api/v2/account/friend/{status}/{side}']['get']['parameters']['query']): Promise<paths['/api/v2/account/friend/{status}/{side}']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/account/friend/{status}/{side}']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/account/friend/${status}/${side}`,
      
      queryParams,
    });
  }
      

  /**
   * Get paginated rejected friend requests
   */
  async listFriendRejected(queryParams: paths['/api/v2/account/friend/rejected']['get']['parameters']['query']): Promise<paths['/api/v2/account/friend/rejected']['get']['responses']['200']['content']['application/json']> {
    return this.client.request<paths['/api/v2/account/friend/rejected']['get']['responses']['200']['content']['application/json']>({
      method: 'GET',
      path: `/api/v2/account/friend/rejected`,
      
      queryParams,
    });
  }
      
}
