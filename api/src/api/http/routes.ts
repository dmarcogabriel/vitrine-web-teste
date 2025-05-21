import {Router} from 'express';
import {ProductController} from './controllers/ProductController';

const router = Router();

router.get('/produtos', ProductController.getAll);
router.get('/produtos/:id', ProductController.getById);
router.post('/produtos', ProductController.create);

export default router;
