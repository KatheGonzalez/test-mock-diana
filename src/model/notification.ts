import { HttpStatus } from '@nestjs/common';

export class Notification {
  description: HttpStatus;
  responseTime: Date;
  source: string;

  constructor() {
    this.description = HttpStatus.OK;
    this.responseTime = new Date();
    this.source = 'Mock Test';
  }
}
