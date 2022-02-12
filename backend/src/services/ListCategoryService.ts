import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../repository/CategoryRepository";

class ListCategoryService{
    async execute(){
        const categoryRepository = getCustomRepository(CategoryRepository);

        const allCategories = await categoryRepository.find();

        return allCategories
    }
}

export { ListCategoryService }
