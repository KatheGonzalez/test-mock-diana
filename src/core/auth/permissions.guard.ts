import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from '../../model/user';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const permissions = this.reflector.get<string[]>(
      'permissions',
      context.getHandler(),
    );

    if (!permissions) {
      return true;
    }
    const request = context.switchToHttp().getRequest<{ user: User }>();
    const hasPermissions = request.user.permissions.some((item) =>
      permissions.includes(item),
    );
    Logger.debug(
      `User permissions: [ ${permissions} ], allowed permissions: [ ${request.user.permissions} ]`,
    );
    if (!hasPermissions) {
      Logger.error(`User not Allowed`);
      throw new UnauthorizedException();
    }
    Logger.log(`User Allowed`);
    return hasPermissions;
  }
}
