/* eslint-disable prettier/prettier */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://luaszlyh:AYtEwrXg1kTpTpctt2Ln1O2yCE_1AIQZ@moose.rmq.cloudamqp.com/luaszlyh'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      }
    }
  })

  app.listen().then(()=>{
    Logger.debug('Microservice Listening')
  })
}
bootstrap();
