import { EntityRepository, Repository } from "typeorm";
import { Category } from "../entities/Categorys";

@EntityRepository(Category)
class CategoryRepository extends Repository<Category> {}

export { CategoryRepository }