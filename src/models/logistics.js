import { model, Schema } from 'mongoose'

const LogisticsSchema = new Schema(
  {
    delivery_id: {
      type: String,
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    delivery_type: {
      type: String,
      default: 'Delivery',
    },
    delivery_address: {
      type: String,
    },
    delivery_date: {
      type: Date,
      default: () => new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
    pickup_ready_status: {
      type: String,
      default: 'Not ready',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

const Logistics = model('Logistics', LogisticsSchema)

export default Logistics
