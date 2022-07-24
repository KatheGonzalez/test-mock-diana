import { States } from '../../const/types/states';
import { Brands } from '../../const/types/brands';
import { Order } from '../order';

export class OrderUpdateDto {
  id: string;
  count: number;
  state: States;
  brand: Brands;
  date_collected: string;

  constructor(
    id: string,
    count: number,
    state: States,
    brand: Brands,
    date_collected: string,
  ) {
    this.id = id;
    this.count = count;
    this.state = state;
    this.brand = brand;
    this.date_collected = date_collected;
  }

  static dtoToOrder(orderDto: OrderUpdateDto) {
    return {
      id: orderDto.id,
      count: orderDto.count,
      brand: orderDto.brand,
      state: orderDto.state,
      date_collected: orderDto.date_collected,
    } as Order;
  }
}
