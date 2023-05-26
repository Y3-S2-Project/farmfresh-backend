import asyncHandler from "../middleware/asyncHandler";
import { makeResponse } from "../utils/response";
import { createOrderService, getAllOrdersService, getDeliveredOrdersCountService, getOrderByIdService, getPendingOrdersCountService, updateOrderStatusService, updatePaymentStatusService } from '../services/order.js'

export const createOrder = asyncHandler(async (req, res) => {
    const result = await createOrderService(req.body)
    if (!result) return makeResponse({ res, status: 500, message: 'Error creating order' })
    return makeResponse({ res, data: result, message: 'Order created successfully' })
});

export const getAllOrders = asyncHandler(async (req, res) => {
    const result = await getAllOrdersService(req.params.id)
    if (!result) return makeResponse({ res, status: 500, message: 'Error getting orders' })
    return makeResponse({ res, data: result, message: 'Orders retrieved successfully' })
});

export const getOrderById = asyncHandler(async (req, res) => {
    const result = await getOrderByIdService(req.params.id)
    if (!result) return makeResponse({ res, status: 500, message: 'Error getting order' })
    return makeResponse({ res, data: result, message: 'Order retrieved successfully' })
});

export const updateOrderStatus = asyncHandler(async (req, res) => {
    const result = await updateOrderStatusService(req.params.id, req.body.order_status)
    if (!result) return makeResponse({ res, status: 500, message: 'Error updating order status' })
    return makeResponse({ res, data: result, message: 'Order status updated successfully' })
});

export const updatePaymentStatus = asyncHandler(async (req, res) => {
    const result = await updatePaymentStatusService(req.params.id, req.body.payment_status)
    if (!result) return makeResponse({ res, status: 500, message: 'Error updating payment status' })
    return makeResponse({ res, data: result, message: 'Payment status updated successfully' })
});

export const getPendingOrdersCount = asyncHandler(async (req, res) => {
  const result = await getPendingOrdersCountService()
  if (!result)
    return makeResponse({ res, status: 500, message: 'Error getting pending orders count' })
  return makeResponse({
    res,
    data: result,
    message: 'Pending orders count retrieved successfully',
  })
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
});
