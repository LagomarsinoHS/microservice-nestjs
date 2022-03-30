/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('products')
export class ProductEntity {

    @PrimaryColumn({ generated: true, primary: true, type: 'int' })
    product_id: number;

    @Column({ length: 50, type: "varchar", nullable: false })
    title: string;

    @Column({ type: 'varchar', length: 500, nullable: false })
    image: string;

    @Column({ type: 'int', default: 0 })
    likes: number;

}