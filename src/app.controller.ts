import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { AppService } from './app.service';
import {ApiUri} from "./const/config.constants";
import {Graduated} from "./model/graduated";
import {Message} from "./model/message";
import {Response} from "./model/response";

@Controller(ApiUri.graduated)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): Response<Graduated[]> {
    return new Response(this.appService.getAll());
  }

  @Get(':dni')
  getOne(@Param('dni') dni: number): Response<Graduated | Message> {
    return new Response(this.appService.getOne(dni));
  }

  @Put(':dni')
  update(@Param('dni') dni: number, @Body() graduated: Graduated): Response<Message> {
    return new Response(this.appService.update(dni, graduated));
  }

  @Delete(':dni')
  delete(@Param('dni') dni: number): Response<Message> {
    return new Response(this.appService.delete(dni));
  }

  @Post()
  create(@Body() graduated: Graduated): Response<Message> {
    return new Response(this.appService.create(graduated));
  }
}
