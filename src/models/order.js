import { model, Schema } from 'mongoose'

const OrderSchema = new Schema(
  {
    order_id: {
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
                default:1,
            },
        },
    ],
    order_status: {
      type: String,
      default: 'Pending',
    },
    payment_status: {
        type: String,
        default: 'Pending',
    },
    delivery_id: {
        type: Schema.Types.ObjectId,
        ref: 'Logistics',
    },
    total_price: {
        type: Number,
        default: 0,
    },
  },
  {
    timestamp: true,
    versionKey: false,
  },
)

const Order = model('Order', OrderSchema)

export default Order
