import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../model/user';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const bcrypt = require('bcrypt');
    const user = await this.usersService.findOne(username);
    const match = user && (await bcrypt.compare(pass, user.password));
    if (match) {
      const { permissions, username, id } = user;
      return { permissions, username, id };
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.username, permissions: user.permissions };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
