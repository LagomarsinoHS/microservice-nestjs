/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ProductDocument, ProductModelEntity } from "src/entities/product.model";
import { Model } from "mongoose"

@Injectable()
export class ProductsMongoRepositoryService {
  constructor(
    @InjectModel(ProductModelEntity.name)
    private productModel: Model<ProductDocument>,
  ) { }


  async allProducts() {
    return this.productModel.find().exec()
  }

  async createProduct(data) {
    //this.productModel.insertMany(data)
    return new this.productModel(data).save()
  }
}