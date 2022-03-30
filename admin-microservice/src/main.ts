/* eslint-disable prettier/prettier */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'http://localhost:4200',
  });
  app.useGlobalFilters(new HttpExceptionFilter()); //Permite Agarrar lo que defini en esa clase por cada error que entre

  await app.listen(8000);
  Logger.log(`Admin is running!!z`);
}
bootstrap();
