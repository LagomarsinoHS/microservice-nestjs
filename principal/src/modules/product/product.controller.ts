/* eslint-disable prettier/prettier */
import { BadRequestException, Controller, Get, Logger } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ) { }
    @Get()
    async getAllProducts() {
        try {
            return this.productService.getAllProducts()
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    @EventPattern('hello')
    async hello(data: string) {
        Logger.debug('Entrando mensaje al microservicio!')
        console.log(data)
    }

    @EventPattern('create')
    async createProduct(data: string) {
        try {
            Logger.debug('Entrando mensaje para CREAR!')
            return this.productService.createProductMongo(data)
        } catch (error) {
            Logger.error(error)
        }

    }
}
