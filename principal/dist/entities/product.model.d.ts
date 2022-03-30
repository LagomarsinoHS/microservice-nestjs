import { Document } from "mongoose";
export declare type ProductDocument = ProductModelEntity & Document;
export declare class ProductModelEntity {
    product_id: number;
    title: string;
    image: string;
    likes: number;
}
export declare const ProductSchema: any;
