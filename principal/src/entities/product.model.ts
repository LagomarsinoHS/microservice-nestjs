/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose"

export type ProductDocument = ProductModelEntity & Document

@Schema({collection:'products'})
export class ProductModelEntity {

    @Prop({})
    product_id: number;
    @Prop()
    title: string;
    @Prop()
    image: string;
    @Prop()
    likes: number;
}

export const ProductSchema = SchemaFactory.createForClass(ProductModelEntity)