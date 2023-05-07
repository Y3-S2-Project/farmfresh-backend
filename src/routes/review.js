import { Router } from 'express';
import { protect } from '../middleware/auth';
import { createReviewController } from '../controllers/review';

const router = Router();

//route for creating a farmer or a product review
router.post('/create', createReviewController);

export default router;
