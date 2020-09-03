import { Router } from 'express';
import userRoute from './user_route';

const router = new Router();

router.use('/v1', userRoute);

export default router;