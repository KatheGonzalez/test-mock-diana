import { Injectable } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Order } from '../../model/order';
import { GET_ALL_ORDERS } from '../../const/mock/insuline-response.mock';
import { OrdersServiceInterface } from './orders.service.interface';

@Injectable()
export class OrdersService implements OrdersServiceInterface {
  constructor(private readonly orderService: InMemoryDBService<Order>) {
    orderService.createMany(GET_ALL_ORDERS);
  }

  getAll = () => this.orderService.getAll();

  getOne = (id) => this.orderService.get(id);

  update = (order) => {
    const previousGraduated = this.getOne(order.id);

    if (previousGraduated) {
      const orderUpdate: Order = { ...previousGraduated, ...order };
      this.orderService.update(orderUpdate);
      return { message: 'Actualizado exitosamente' };
    }
    return { message: 'No se encontraron ordenes para actualizar' };
  };

  create = (order) => {
    this.orderService.create(order);
    return { message: 'Creado exitosamente' };
  };
}
