import { NestFactory } from '@nestjs/core';

import Config from '../src/config/environment'

import { AppModule } from './app.module';

async function bootstrap() {
  console.log('======= Dirname =====: ', __dirname)
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  await app.listen(Config.port);
}

try {
  bootstrap();
} catch (error) {
  console.log('Error loading application: ', error)
  throw error
}
