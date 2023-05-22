import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import { getPaymentIntentService } from '../services/payment.js'

// export const createPaymentController = asyncHandler(async (req, res) => {
//   const result = await createPaymentService(req.body)
//   if (!result) return makeResponse({ res, status: 500, message: 'Error creating payment' })
//   return makeResponse({ res, data: result, message: 'Payment created successfully' })
// })

export const getPaymentIntentController = asyncHandler(async (req, res) => {
  const intent = await getPaymentIntentService(req.query)
  res.json({ client_secret: intent.client_secret })
})
