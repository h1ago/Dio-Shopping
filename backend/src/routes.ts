import { Router, Request, Response } from "express";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ListMessageController } from "./controllers/ListMessageController";
import { CreateProductController } from "./controllers/CreateProductController";
import { ListProductController } from "./controllers/ListProductController";
import { ListCategoryController } from "./controllers/ListCategoryController";

const router = Router();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();

const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();

const listCategoryController = new ListCategoryController();

router.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Bem vindo a API Dio Shopping'})
})

router.get('/product', listProductController.handle)
router.post('/product', createProductController.handle)

router.get('/message', listMessageController.handle)
router.post('/message', createMessageController.handle)

router.get('/category', listCategoryController.handle)

export { router }
