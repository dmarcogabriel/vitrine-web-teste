import {Router} from 'express';
import {HealthController} from '../controllers/HealthController';

const router = Router();

router.get('/', HealthController.checkHealth);

export default router;
