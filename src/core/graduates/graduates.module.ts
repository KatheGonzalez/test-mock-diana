import { Module } from '@nestjs/common';
import { GraduatesController } from './graduates.controller';
import { GraduatesService } from './graduates.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [InMemoryDBModule.forFeature('graduated', {}), AuthModule],
  controllers: [GraduatesController],
  providers: [GraduatesService],
})
export class GraduatesModule {}
