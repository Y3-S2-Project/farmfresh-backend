import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import {
  createReviewService,
  updateReviewService,
  deleteReviewService,
  getFarmerOrProductReviewsService,
  getAllReviewsService,
} from '../services/review'

export const createReviewController = asyncHandler(async (req, res) => {
  const result = await createReviewService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Error creating review' })
  return makeResponse({ res, data: result, message: 'Review created successfully' })
})

export const updateReviewController = asyncHandler(async (req, res) => {
  const result = await updateReviewService(req.params.review_id, req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Error updating review' })
  return makeResponse({ res, data: result, message: 'Review updated successfully' })
})

export const deleteReviewController = asyncHandler(async (req, res) => {
  const result = await deleteReviewService(req.params.review_id)
  if (!result) return makeResponse({ res, status: 500, message: 'Error deleting review' })
  return makeResponse({ res, data: result, message: 'Review deleted successfully' })
})

export const getFarmerOrProductReviewsController = asyncHandler(async (req, res) => {
  console.log('Coming here...')
  console.log('ID Object: ', req.query)
  // const { page, limit } = req.query
  const result = await getFarmerOrProductReviewsService(req.query)
  if (!result) return makeResponse({ res, status: 500, message: 'Error retrieving reviews' })
  return makeResponse({ res, data: result, message: 'Reviews retrieved successfully' })
})

export const getAllReviewsController = asyncHandler(async (req, res) => {
  const result = await getAllReviewsService()
  if (!result) return makeResponse({ res, status: 500, message: 'Error retrieving reviews' })
  return makeResponse({ res, data: result, message: 'Reviews retrieved successfully' })
})
