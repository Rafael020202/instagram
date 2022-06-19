import { Router } from 'express';
import { SessionController } from '../controllers'
import { createSessionValitdator } from '../validators'

const sessionController = new SessionController();
const router = Router();

router.post('/', createSessionValitdator, sessionController.create);


export default router;