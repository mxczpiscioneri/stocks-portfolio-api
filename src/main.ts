import { NestFactory } from '@nestjs/core';

import Config from '../src/config/environment'

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  await app.listen(Config.port);
}
bootstrap();
