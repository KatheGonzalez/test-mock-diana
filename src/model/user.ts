import { Permissions } from '../const/types/permissions';

export class User {
  id: string;
  username: string;
  password: string;
  permissions: Permissions[];
}
