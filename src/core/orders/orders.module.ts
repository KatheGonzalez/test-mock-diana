import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { AuthModule } from '../auth/auth.module';
import { OrdersController } from './orders.controller';

@Module({
  imports: [InMemoryDBModule.forFeature('orders', {}), AuthModule],
  providers: [OrdersService],
  exports: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
