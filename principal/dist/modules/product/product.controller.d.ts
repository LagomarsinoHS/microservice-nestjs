import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAllProducts(): unknown;
    hello(data: string): any;
    createProduct(data: string): unknown;
}
