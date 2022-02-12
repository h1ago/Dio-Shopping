import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";

class CreateProductController{
    async handle(request: Request, response: Response){
        const { name, regular_price, actual_price, discount_percentage, size, name_category, installments, image } = request.body;
        
        const createProductService = new CreateProductService();

        const newProduct = await createProductService.execute({ name, regular_price, actual_price, discount_percentage, size, name_category, installments, image });

        return response.json(newProduct);
    }
}

export { CreateProductController }