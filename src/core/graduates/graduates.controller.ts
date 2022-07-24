import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Response } from '../../model/response';
import { Graduated } from '../../model/graduated';
import { Message } from '../../model/message';
import { GraduatesService } from './graduates.service';
import { ApiUri } from '../../const/config.const';

@Controller(ApiUri.graduated)
export class GraduatesController {
  constructor(private readonly graduatesService: GraduatesService) {}

  @Get()
  getAll(): Response<Graduated[]> {
    return new Response(this.graduatesService.getAll());
  }

  @Get(':dni')
  getOne(@Param('dni') dni: number): Response<Graduated | Message> {
    return new Response(this.graduatesService.getOne(dni));
  }

  @Put(':dni')
  update(
    @Param('dni') dni: number,
    @Body() graduated: Graduated,
  ): Response<Message> {
    return new Response(this.graduatesService.update(dni, graduated));
  }

  @Delete(':dni')
  delete(@Param('dni') dni: number): Response<Message> {
    return new Response(this.graduatesService.delete(dni));
  }

  @Post()
  create(@Body() graduated: Graduated): Response<Message> {
    return new Response(this.graduatesService.create(graduated));
  }
}
