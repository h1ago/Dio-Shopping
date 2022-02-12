import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import {Product} from "./Products";

@Entity("Categorys")
class Category {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    name: string;

    @OneToMany(() => Product, product => product.category)
    product: Product[];

}

export { Category }
