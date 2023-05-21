import { Router } from 'express'
import { protect } from '../middleware/auth'
import { ROLES } from '../utils/constants'
import {
  createReviewController,
  updateReviewController,
  deleteReviewController,
  getFarmerOrProductReviewsController,
  getAllReviewsController,
} from '../controllers/review'

const router = Router()

//route for creating a farmer or a product review
router.post('/', protect(ROLES.BUYER), createReviewController)

//route for updating a farmer or a product review
router.put('/:review_id', protect(ROLES.BUYER), updateReviewController)

//route for deleting a farmer or a product review
router.delete('/:review_id', protect(ROLES.BUYER), deleteReviewController)

//route for retrieving reviews - specific farmer or specific product (buyer, seller and admin can access this route)
router.get('/farmer-or-product', getFarmerOrProductReviewsController)

//route to retrieve all reviews
router.get('/', protect(ROLES.ADMIN), getAllReviewsController)
export default router
