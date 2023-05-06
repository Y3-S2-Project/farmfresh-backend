import asyncHandler from "../middleware/asyncHandler";
import { makeResponse } from "../utils/response";
import {createOrderService} from '../services/order.js'

export const createOrder = asyncHandler(async (req, res) => {
    const result = await createOrderService(req.body)
    if (!result) return makeResponse({ res, status: 500, message: 'Error creating order' })
    return makeResponse({ res, data: result, message: 'Order created successfully' })
});
