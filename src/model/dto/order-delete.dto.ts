import { States } from '../../const/types/states';
import { Order } from '../order';

export class OrderDeleteDto {
  id: string;
  state: States;

  constructor(id: string, state: States) {
    this.id = id;
    this.state = state;
  }

  static dtoToOrder(orderDto: OrderDeleteDto) {
    return {
      id: orderDto.id,
      state: orderDto.state,
    } as Order;
  }
}
