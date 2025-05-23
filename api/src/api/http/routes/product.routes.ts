import {Router} from 'express';
import {ProductController} from '@app/api/http/controllers/ProductController';
import {requireAuth} from '@app/api/http/middlewares/requireAuth.middleware';

const router = Router();

router.get('/', ProductController.getAll);
router.get('/:id', requireAuth, ProductController.getById);

export default router;
