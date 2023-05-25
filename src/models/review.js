import { model, Schema } from 'mongoose'

const ReviewSchema = new Schema(
  {
    review_id: {
      type: String,
      required: true,
      unique: true,
    },
    review_rating: {
      type: Number,
      required: true,
    },
    review_description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
    farmer_id: {
      type: Schema.Types.ObjectId,
      ref: 'Farmer',
    },
    helpful: {
      type: Number,
      default: 0,
    },
    reported: {
      type: Number,
      default: 0,
    },
    flagged: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

const Review = model('Review', ReviewSchema)

export default Review
