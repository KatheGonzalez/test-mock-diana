import { Message } from '../../model/message';
import { Order } from '../../model/order';

export interface OrdersServiceInterface {
  getAll: () => Order[];

  getOne: (id: string) => Order;

  update: (order: Order) => Message;

  create: (order: Order) => Message;
}
