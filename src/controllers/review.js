import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import { createReviewService } from '../services/review'

export const createReviewController = asyncHandler(async (req, res) => {
  const result = await createReviewService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Error creating review' })
  return makeResponse({ res, data: result, message: 'Review created successfully' })
})
