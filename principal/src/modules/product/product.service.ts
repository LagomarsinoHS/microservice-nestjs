/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProductsMongoRepositoryService } from './models/products.repository.service';

@Injectable()
export class ProductService {
    constructor(private readonly productModelRepo: ProductsMongoRepositoryService) { }

    async getAllProducts() {
        return this.productModelRepo.allProducts()
    }

    async createProductMongo(data) {
        const res = await this.productModelRepo.createProduct(data)
        console.log(res);
    }
}
