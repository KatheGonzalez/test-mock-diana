import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface Graduated extends InMemoryDBEntity {
  id: string;
  dni: number;
  cellphone: number;
  first_name: string;
  second_name: string;
  last_name: string;
  second_last_name: string;
  email: string;
  photo: string;
}
