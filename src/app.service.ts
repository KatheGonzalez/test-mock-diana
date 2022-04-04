import {Injectable} from '@nestjs/common';
import {Graduated} from "./model/graduated";
import {GetAllGraduates} from "./const/mock-responses";
import {Message} from "./model/message";

@Injectable()
export class AppService {
    getAll: () => Graduated[] = () => GetAllGraduates;
    getOne: (dni: number) => Graduated | Message = dni => GetAllGraduates.find(g => g.dni == dni);
    update: (dni: number, graduated: Graduated) => Message = dni => ({dni, message: "Actualizado exitosamente"})
    delete: (dni: number) => Message = dni => ({dni, message: "Eliminado exitosamente"})
    create: (graduated: Graduated) => Message = graduated => ({dni: graduated.dni, message: "Creado exitosamente"})
}
