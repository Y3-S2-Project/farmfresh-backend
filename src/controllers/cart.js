import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import { createCartService } from '../services/cart.js'

export const createCartController = asyncHandler(async (req, res) => {
  const result = await createCartService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Error creating cart' })
  return makeResponse({ res, data: result, message: 'Cart created successfully' })
})
