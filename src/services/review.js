import {
  createReviewRepository,
  updateReviewRepository,
  deleteReviewRepository,
  getFarmerOrProductReviewsRepository,
  getAllReviewsRepository,
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

export const getFarmerOrProductReviewsService = async (id) => {
  return await getFarmerOrProductReviewsRepository(id)
}

export const getAllReviewsService = async () => {
  return await getAllReviewsRepository()
}
