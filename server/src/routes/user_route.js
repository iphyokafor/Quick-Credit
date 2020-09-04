import { Router } from 'express';
import userController from '../controllers/user_controller';
const { registerUsers } = userController;

const router = new Router();

router.post('/register', registerUsers);

export default router;