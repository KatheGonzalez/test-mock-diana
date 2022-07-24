import { States } from '../const/types/states';
import { Brands } from '../const/types/brands';

export class Order {
  id: string;
  dni?: number;
  cellphone?: number;
  full_name?: string;
  place?: string;
  date_requested?: string;
  count?: number;
  state: States;
  brand?: Brands;
  date_collected?: string;
}
