import {Router} from 'express';
import {AuthController} from '../controllers/AuthController';

const router = Router();

router.post('/entrar', AuthController.signIn);

export default router;
