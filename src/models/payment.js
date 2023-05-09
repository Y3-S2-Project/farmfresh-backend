import { model, Schema } from 'mongoose'

const PaymentSchema = new Schema(
    {
        payment_id: {
            type: String,
            required: true,
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        order_id: {
            type: Schema.Types.ObjectId,
            ref: 'Order',
            required: true,
        },
        delivery_id: {
            type: Schema.Types.ObjectId,
            ref: 'Logistics',
        },
        payment_status: {
            type: String,
            default: 'Pending',
        },
        payment_method: {
            type: String,
            required: true,
        },
        payment_amount: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
)

const Payment = model('Payment', PaymentSchema)
export default Payment