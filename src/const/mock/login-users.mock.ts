import { User } from '../../model/user';

export const ALL_USERS: User[] = [
  {
    id: '1',
    username: 'domiciliary',
    password: '$2b$10$joyrwfqpHwKnohUlzyH2eexrnSOp6gzlbgyPkGWs2fX9L2OpgZwU6',
    permissions: ['insulin_app:read_orders', 'insulin_app:update_orders'],
  },
  {
    id: '2',
    username: 'maria',
    password: '$2b$10$joyrwfqpHwKnohUlzyH2eexrnSOp6gzlbgyPkGWs2fX9L2OpgZwU6',
    permissions: ['insulin_app:create_orders'],
  },
  {
    id: '3',
    username: 'admin',
    password: '$2b$10$joyrwfqpHwKnohUlzyH2eexrnSOp6gzlbgyPkGWs2fX9L2OpgZwU6',
    permissions: ['insulin_app:read_orders', 'insulin_app:delete_orders'],
  },
];
