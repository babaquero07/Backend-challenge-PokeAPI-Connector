import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = process.env.PORT || 3000;

  const logger = new Logger('bootstrap');

  app.setGlobalPrefix('api');

  await app.listen(3000);

  logger.log(`Application listening on port ${PORT}`);
}
bootstrap();
