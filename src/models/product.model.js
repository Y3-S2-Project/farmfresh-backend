import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: true,
    unique: true,
  },
  product_name: {
    type: String,
    required: true,
  },

  product_price: {
    type: Number,
    required: true,
  },
  product_status: {
    type: String,
    default: "Available",
  },
  product_offer: {
    type: Number,
    default: 0,
  },
  product_images: {
    type: [String],
    required: true,
  },
  product_quantity: {
    type: Number,
    default: 0,
    required: true,
  },
  product_category: {
    ref: "Category",
    type: mongoose.Schema.Types.ObjectId,
  },
  product_visible: {
    type: Boolean,
    default: false,
  },
  product_weight: {
    type: Number,
    required: true,
  },
  product_saleStatus: {
    type: Boolean,
    default: false,
  },
  //object ids of reviews for this product
  product_reviews: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Review",
    default: [],
  },
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
