import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { Response } from '../../model/response';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Message } from '../../model/message';
import { ApiUri } from '../../const/config.const';
import { OrdersService } from './orders.service';
import { Order } from '../../model/order';
import { OrderUpdateDto } from '../../model/dto/order-update.dto';
import { OrderDeleteDto } from '../../model/dto/order-delete.dto';
import { Permissions } from '../auth/permissions.decorator';
import { PERMISSIONS_TYPES } from '../../const/types/permissions';
import { PermissionsGuard } from '../auth/permissions.guard';

@Controller(ApiUri.orders)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @UseGuards(JwtAuthGuard, PermissionsGuard)
  @Permissions(PERMISSIONS_TYPES.reader)
  @Get()
  getAll(): Response<Order[]> {
    return new Response(this.ordersService.getAll());
  }

  @UseGuards(JwtAuthGuard, PermissionsGuard)
  @Permissions(PERMISSIONS_TYPES.updater)
  @Put('/update')
  update(@Body() orderDto: OrderUpdateDto): Response<Message> {
    return new Response(
      this.ordersService.update(OrderUpdateDto.dtoToOrder(orderDto)),
    );
  }

  @UseGuards(JwtAuthGuard, PermissionsGuard)
  @Permissions(PERMISSIONS_TYPES.deleter)
  @Put('/delete')
  delete(@Body() orderDto: OrderDeleteDto): Response<Message> {
    return new Response(
      this.ordersService.update(OrderDeleteDto.dtoToOrder(orderDto)),
    );
  }

  @UseGuards(JwtAuthGuard, PermissionsGuard)
  @Permissions(PERMISSIONS_TYPES.creator)
  @Post()
  create(@Body() order: Order): Response<Message> {
    return new Response(this.ordersService.create(order));
  }
}
