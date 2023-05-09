import { createReviewRepository } from '../repositories/review.js'

export const createReviewService = async (data) => {
  return await createReviewRepository(data)
}
