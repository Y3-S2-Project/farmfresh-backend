import Review from '../models/review'

// Get the current highest review ID from the database
const getMaxReviewId = async () => {
  const result = await Review.findOne().sort({ review_id: -1 }).select('review_id').exec()
  if (result) {
    const currentId = result.review_id
    const numericPart = parseInt(currentId.slice(3))
    return numericPart
  } else {
    return 0
  }
}

//return the next review ID
const setReviewId = async () => {
  const maxReviewId = await getMaxReviewId()
  const padStart = 3 - maxReviewId.toString().length
  const nextId = `RID${(maxReviewId + 1).toString().padStart(padStart, '0')}`
  return nextId
}

//create review
export const createReviewRepository = async (data) => {
  try {
    const reviewId = await setReviewId()
    const review = new Review({
      ...data,
      review_id: reviewId,
    })
    return await review.save()
  } catch (error) {
    console.error(`An error occurred when creating a review - err: ${error.message}`)
    return null
  }
}

//update review
export const updateReviewRepository = async (review_id, data) => {
  try {
    //check if review exists
    const review = await Review.findOne({ review_id })
    if (!review) return null

    //update review
    const updatedReview = await review.updateOne(data, { new: true })
    return updatedReview
  } catch (error) {
    console.error(`An error occurred when updating a review - err: ${error.message}`)
    return null
  }
}

//delete review
export const deleteReviewRepository = async (review_id) => {
  try {
    //check if review exists
    const review = await Review.findOne({ review_id })
    if (!review) return null

    //delete review
    const deletedReview = await review.deleteOne()
    return deletedReview
  } catch (error) {
    console.error(`An error occurred when deleting a review - err: ${error.message}`)
    return null
  }
}
