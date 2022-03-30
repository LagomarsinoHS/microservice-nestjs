import { ProductsMongoRepositoryService } from './models/products.repository.service';
export declare class ProductService {
    private readonly productModelRepo;
    constructor(productModelRepo: ProductsMongoRepositoryService);
    getAllProducts(): unknown;
    createProductMongo(data: any): any;
}
