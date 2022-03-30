/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModelEntity, ProductSchema } from 'src/entities/product.model';
import { ProductsMongoRepositoryService } from './models/products.repository.service';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductModelEntity.name, schema: ProductSchema }
    ])
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductsMongoRepositoryService]
})
export class ProductModule { }
