import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../repository/ProductRepository";

interface IProduct {
    name: string;
    regular_price: string;
    actual_price: string;
    discount_percentage: number;
    size: string;
    name_category: string;
    installments: string;
    image: string;
}

class CreateProductService {
    async execute({name, regular_price, actual_price, discount_percentage, size, installments, image}: IProduct){
        const productRepository = getCustomRepository(ProductRepository);

        if(!name){
            throw new Error("Por favor informe um nome!")
        }

        if(!regular_price){
            throw new Error("Por favor informe um preço!")
        }

        if(!actual_price){
            throw new Error("Por favor informe um preço com desconto!")
        }

        if(!discount_percentage){
            throw new Error("Por favor informe uma porcentagem de desconto!")
        }

        if(!installments){
            throw new Error("Por favor informe as prestações!")
        }

        if(!image){
            throw new Error("Por favor informe uma imagem!")
        }

        const newProduct = productRepository.create({ name, regular_price, actual_price, discount_percentage, installments, size, image })

        await productRepository.save(newProduct);

        return newProduct;
    }
}

export  { CreateProductService }