import { ProductDocument } from "src/entities/product.model";
import { Model } from "mongoose";
export declare class ProductsMongoRepositoryService {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    allProducts(): unknown;
    createProduct(data: any): unknown;
}
