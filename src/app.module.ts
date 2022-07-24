import { Module } from '@nestjs/common';
import { UsersModule } from './core/users/users.module';
import { OrdersModule } from './core/orders/orders.module';
import { GraduatesModule } from './core/graduates/graduates.module';

@Module({
  imports: [GraduatesModule, OrdersModule, UsersModule],
})
export class AppModule {}
