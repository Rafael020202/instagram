import { Router } from 'express';
import userRoutes from '../../../modules/user/infra/user.routes';
import sessionRoutes from '../../../modules/user/infra/session.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/session', sessionRoutes);

export default router;