import { model, Schema } from 'mongoose'

const CartSchema = new Schema(
  {
    cart_id: {
      type: String,
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    products: [
      {
        product_id: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

const Cart = model('Cart', CartSchema)
export default Cart