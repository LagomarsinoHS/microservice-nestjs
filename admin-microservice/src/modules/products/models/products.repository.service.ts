/* eslint-disable prettier/prettier */

import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsRepositoryService {
  constructor(
    @InjectRepository(ProductEntity)
    private productsRepository: Repository<ProductEntity>,
  ) { }

  async getAll() {
    return this.productsRepository.find();
  }

  async getById(id: number) {
    return this.productsRepository.findOne(id)
  }

  async updateById(id, data) {
    try {
      /* const result = await this.productsRepository.update(id, data)
      console.log(result);
      return result */

      const a = await this.productsRepository.createQueryBuilder('p')
        .update()
        .set(data)
        .where('product_id = :id', { id })
        //.returning('*') no valido en mysql
        .execute();
      return a

    } catch (error) {
      Logger.error((error as Error).name)
    }
  }

  async createProduct(data) {
    try {
      await this.productsRepository.save(data);
    } catch (e) {
      Logger.error((e as Error).message);
      throw new BadRequestException('No se pudo crear el producto');
    }
  }

  async deleteById(id) {
    try {
      await this.productsRepository.delete(id);
    } catch (e) {
      Logger.error((e as Error).message);
      throw new BadRequestException('No se pudo crear el producto');
    }

  }
}