import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../repository/ProductRepository";

class ListProductService {
    async execute(){
        const productRepository = getCustomRepository(ProductRepository);

        const allProducts = productRepository.find({ relations: ["category"] });

        return allProducts;
    }
}

export  { ListProductService }