import { Router } from 'express'
import { protect } from '../middleware/auth'
import { ROLES } from '../utils/constants'
import {
  createCartController,
  updateQuantityController,
  getCartByUserIdController,
  deleteProductFromCartController,
  emptyCartController,
} from '../controllers/cart'

const router = Router()

//route to create a cart
router.post('/', protect(ROLES.BUYER), createCartController)

//route to increment quantity of a product in a cart
router.put('/:user_id', protect(ROLES.BUYER), updateQuantityController)

//route to get cart by user id
router.get('/:user_id', protect(ROLES.BUYER), getCartByUserIdController)

//route to delete a product from a cart
router.delete('/:user_id/:product_id', protect(ROLES.BUYER), deleteProductFromCartController)

//route to empty cart
router.delete('/:user_id', protect(ROLES.BUYER), emptyCartController)

export default router
