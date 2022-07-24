import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { UsersController } from './users.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    InMemoryDBModule.forFeature('users', {}),
    forwardRef(() => AuthModule),
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
