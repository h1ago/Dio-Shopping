import { Request, Response } from "express";
import { ListCategoryService } from "../services/ListCategoryService";

class ListCategoryController {
    async handle(request: Request, response: Response){
        const listCategoryService = new ListCategoryService();

        const allCategorys = await listCategoryService.execute();

        return response.json(allCategorys)
    }
}

export { ListCategoryController }