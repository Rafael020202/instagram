import { Router } from 'express';
import { UserController } from '../../controllers'
import { createUserValitdator } from '../../validators'

const userController = new UserController();
const router = Router();

router.post('/', createUserValitdator, userController.create);


export default router;