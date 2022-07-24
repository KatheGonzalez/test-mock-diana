import { Graduated } from '../../model/graduated';
import { Message } from '../../model/message';

export interface GraduatesService {
  getAll: () => Graduated[];

  getOne: (dni: number) => Graduated;

  update: (dni: number, graduated: Graduated) => Message;

  delete: (dni: number) => Message;

  create: (graduated: Graduated) => Message;
}
