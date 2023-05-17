import {
  createReviewRepository,
  updateReviewRepository,
  deleteReviewRepository,
} from '../repositories/review.js'

export const createReviewService = async (data) => {
  return await createReviewRepository(data)
}

export const updateReviewService = async (review_id, data) => {
  return await updateReviewRepository(review_id, data)
}

export const deleteReviewService = async (review_id) => {
  return await deleteReviewRepository(review_id)
}
