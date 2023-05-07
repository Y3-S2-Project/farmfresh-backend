import mongoose from 'mongoose'
// category schema
const categorySchema = new mongoose.Schema(
  {
    category_name: {
      type: String,
    },
    category_image: {
      type: String,
    },
    category_description: {
      type: String,
    },
    category_status: {
      type: String,
    },
    category_id: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)
//create category model
const Category = mongoose.model('Category', categorySchema)
//export model
export default Category
