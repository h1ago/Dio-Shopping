import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Category } from "./Categorys";

@Entity("products")
class Product {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    name: string;

    @Column()
    regular_price: string;

    @Column()
    actual_price: string;
    
    @Column({nullable: true})
    discount_percentage: number;

    @Column()
    installments: string;

    @Column()
    image: string;

    @Column({nullable: true})
    size: string;

    @Column()
    size_pp: boolean;

    @Column()
    size_p: boolean;

    @Column()
    size_m: boolean;

    @Column()
    size_g: boolean;

    @Column()
    size_gg: boolean;

    @ManyToOne(() => Category, category => category.product)
    category: Category;

}

export { Product }
