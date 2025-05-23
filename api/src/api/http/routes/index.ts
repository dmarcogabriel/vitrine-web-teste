import {Router} from 'express';
import productRoutes from './product.routes';
import authRoutes from './auth.routes';
import healthRoutes from './health.routes';

const router = Router();

router.use('/health', healthRoutes);
router.use('/produtos', productRoutes);
router.use('/auth', authRoutes);

export default router;
