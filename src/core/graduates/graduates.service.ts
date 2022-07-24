import { Injectable } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Graduated } from '../../model/graduated';
import { GetAllGraduates } from '../../const/mock/graduated-response.mock';

@Injectable()
export class GraduatesService implements GraduatesService {
  constructor(private readonly graduatesService: InMemoryDBService<Graduated>) {
    graduatesService.createMany(GetAllGraduates);
  }

  getAll = () => this.graduatesService.getAll();

  getOne = (dni) => this.graduatesService.query((g) => g.dni == dni)[0];

  update = (dni, graduated) => {
    const previousGraduated = this.getOne(dni);

    if (previousGraduated) {
      graduated.id = previousGraduated.id;
      this.graduatesService.update(graduated);
      return { dni, message: 'Actualizado exitosamente' };
    }
    return { dni, message: 'No se encontraron registros con esta cédula' };
  };

  delete = (dni) => {
    const graduatedToDelete = this.getOne(dni);

    if (graduatedToDelete) {
      this.graduatesService.delete(graduatedToDelete.id);
      return { dni, message: 'Eliminado exitosamente' };
    }
    return { dni, message: 'No se encontró el usuario a eliminar' };
  };

  create = (graduated) => {
    const { dni } = graduated;
    const previousGraduated = this.getOne(dni);

    if (previousGraduated) {
      return { dni, message: 'Ya existe un registro con esta cédula' };
    }
    this.graduatesService.create(graduated);
    return { dni, message: 'Creado exitosamente' };
  };
}
