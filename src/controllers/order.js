import asyncHandler from "../middleware/asyncHandler";
import { makeResponse } from "../utils/response";
import { createOrderService, getDeliveredOrdersCountService } from '../services/order.js'

export const createOrder = asyncHandler(async (req, res) => {
    const result = await createOrderService(req.body)
    if (!result) return makeResponse({ res, status: 500, message: 'Error creating order' })
    return makeResponse({ res, data: result, message: 'Order created successfully' })
});

export const getDeliveredOrdersCount = asyncHandler(async (req, res) => {
  const result = await getDeliveredOrdersCountService()
  if (!result)
    return makeResponse({ res, status: 500, message: 'Error getting delivered orders count' })
  return makeResponse({
    res,
    data: result,
    message: 'Delivered orders count retrieved successfully',
  })
})
