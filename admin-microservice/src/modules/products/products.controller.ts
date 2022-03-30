/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Inject, Logger, Param, Post, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
   constructor(
      private readonly productsService: ProductsService,
      @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy
   ) { }

   @Get()
   async allProducts() {
      try {
         this.client.emit('hello', 'Enviando mensaje desde AdminApp')
         return this.productsService.getAllProducts();
      } catch (error) {
         Logger.error(error);
      }
   }

   @Get(':id')
   async getProductById(
      @Param('id') id: number
   ) {
      try {
         return this.productsService.getProductById(id);
      } catch (error) {
         Logger.error(error);
      }
   }

   @Post()
   async createProduct(@Body() data) {
      try {
         this.client.emit('create', data)
         return this.productsService.createProduct(data);
      } catch (error) {
         Logger.error(error);
      }
   }

   @Put(':id')
   async updateProduct(
      @Param('id') id: number,
      @Body() data
   ) {
      try {
         return this.productsService.updateProduct(id, data);
      } catch (error) {
         Logger.error(error);
      }
   }

   @Delete(':id')
   async deleteProduct(
      @Param('id') id: number
   ) {
      try {
         return this.productsService.deleteProduct(id);
      } catch (error) {
         Logger.error(error);
      }
   }
}
