import { Request, Response } from "express";
import { ListProductService } from "../services/ListProductService";

class ListProductController{
    async handle(request: Request, response: Response){
        
        const listProductService = new ListProductService();

        const allProducts = await listProductService.execute();

        return response.json(allProducts);
    }
}

export { ListProductController }