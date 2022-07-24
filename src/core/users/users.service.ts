import { Injectable } from '@nestjs/common';
import { User } from '../../model/user';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { ALL_USERS } from '../../const/mock/login-users.mock';

@Injectable()
export class UsersService {
  constructor(private readonly userService: InMemoryDBService<User>) {
    userService.createMany(ALL_USERS);
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userService.query((user) => user.username === username)[0];
  }
}
