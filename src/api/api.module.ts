import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { ProvidersModule } from 'src/providers/providers.module';
import { HttpCustomService } from 'src/providers/http/http.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [ApiController],
  imports: [ProvidersModule, ConfigModule],
  providers: [ApiService, HttpCustomService],
})
export class ApiModule {}
