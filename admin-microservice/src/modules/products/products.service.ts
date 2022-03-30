/* eslint-disable prettier/prettier */

import { BadRequestException, Injectable } from '@nestjs/common';
import { ProductEntity } from 'src/entities/product.entity';
import { ProductsRepositoryService } from './models/products.repository.service';

@Injectable()
export class ProductsService {
    constructor(
        private readonly productsRepositoryService: ProductsRepositoryService,
    ) { }

    async getAllProducts(): Promise<ProductEntity[]> {
        const data = await this.productsRepositoryService.getAll();
        return data;
    }

    async getProductById(id: number) {
        return await this.productsRepositoryService.getById(id)
    }

    async createProduct(data): Promise<any> {
        await this.productsRepositoryService.createProduct(data);
        return { msg: 'Product Created' };
    }

    async updateProduct(id, data) {
        await this.productsRepositoryService.updateById(id, data)
        return {}
    }

    async deleteProduct(id) {
        await this.productsRepositoryService.deleteById(id)
    }
}
