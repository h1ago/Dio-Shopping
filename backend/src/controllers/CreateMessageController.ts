import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController{
    async handle(request: Request, response: Response){
        const { email, message } = request.body;

        console.log("meuovo");

        const createMessageService = new CreateMessageService();

        const newMessage = await createMessageService.execute({ email, message});

        return response.json(newMessage);
    }
}

export { CreateMessageController }