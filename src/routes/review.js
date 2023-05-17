import { Router } from 'express'
import { protect } from '../middleware/auth'
import { ROLES } from '../utils/constants'
import {
  createReviewController,
  updateReviewController,
  deleteReviewController,
} from '../controllers/review'

const router = Router()

//route for creating a farmer or a product review
router.post('/', protect(ROLES.BUYER), createReviewController)

//route for updating a farmer or a product review
router.put('/:review_id', protect(ROLES.BUYER), updateReviewController)

//route for deleting a farmer or a product review
router.delete('/:review_id', protect(ROLES.BUYER), deleteReviewController)

export default router
