export type Permissions =
  | 'insulin_app:read_orders'
  | 'insulin_app:update_orders'
  | 'insulin_app:create_orders'
  | 'insulin_app:delete_orders';

export const PERMISSIONS_TYPES = {
  reader: 'insulin_app:read_orders',
  updater: 'insulin_app:update_orders',
  creator: 'insulin_app:create_orders',
  deleter: 'insulin_app:delete_orders',
};
