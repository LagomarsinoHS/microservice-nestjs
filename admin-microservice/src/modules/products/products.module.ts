/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/product.entity';
import { ProductsRepositoryService } from './models/products.repository.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['secret'],
          queue: 'main_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ])
  ],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepositoryService]
})
export class ProductsModule { }
