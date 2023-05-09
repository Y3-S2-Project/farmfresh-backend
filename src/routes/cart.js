import { Router } from 'express';
import { protect } from '../middleware/auth';
import { ROLES } from '../utils/constants';
import { createCartController } from '../controllers/cart';

const router = Router();

router.post('/create', createCartController);

export default router