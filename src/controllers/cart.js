import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import {
  createCartService,
  updateQuantityService,
  getCartByUserIdService,
  deleteProductFromCartService,
} from '../services/cart.js'

export const createCartController = asyncHandler(async (req, res) => {
  const result = await createCartService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Error creating cart' })
  return makeResponse({ res, data: result, message: 'Cart created successfully' })
})

export const updateQuantityController = asyncHandler(async (req, res) => {
  const result = await updateQuantityService(req.params.user_id, req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Error updating the cart' })
  return makeResponse({ res, data: result, message: 'Quantity updated successfully' })
})

export const getCartByUserIdController = asyncHandler(async (req, res) => {
  const result = await getCartByUserIdService(req.params.user_id)
  if (!result) return makeResponse({ res, status: 500, message: 'Error getting cart' })
  return makeResponse({ res, data: result, message: 'Cart retrieved successfully' })
})

export const deleteProductFromCartController = asyncHandler(async (req, res) => {
  const result = await deleteProductFromCartService(req.params.user_id, req.params.product_id)
  if (!result)
    return makeResponse({ res, status: 500, message: 'Error deleting product from cart' })
  return makeResponse({ res, data: result, message: 'Product deleted successfully' })
})
