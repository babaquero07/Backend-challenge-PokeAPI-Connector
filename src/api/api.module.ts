import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { ProvidersModule } from 'src/providers/providers.module';
import { HttpCustomService } from 'src/providers/http/http.service';

@Module({
  controllers: [ApiController],
  imports: [ProvidersModule],
  providers: [ApiService, HttpCustomService],
})
export class ApiModule {}
