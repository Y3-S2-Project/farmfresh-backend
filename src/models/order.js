import { model, Schema } from 'mongoose'
import mongoose from 'mongoose';

const OrderSchema = new Schema(
  {
    order_id: {
      type: String,
      required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    products: [
        {
            product_id: {
                type: mongoose.Schema.Types.ObjectId,
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
    delivery_option: {
        type: String,
    },
    delivery_address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Logistics',
    },
  },
  {
    timestamp: true,
    versionKey: false,
  },
)

const Order = model('Order', OrderSchema)

export default Order
