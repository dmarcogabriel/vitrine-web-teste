import {Router} from 'express';
import productRoutes from './product.routes';

const router = Router();

router.use('/produtos', productRoutes);

export default router;
