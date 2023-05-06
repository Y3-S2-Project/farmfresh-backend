import { model, Schema } from 'mongoose'

const UserSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    province: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    postalcode: {
      type: String,
      required: false,
    },
    role: [
      {
        type: String,
        required: true,
      },
    ],
    current_user_role: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    versionKey: false,
  },
)

const User = model('User', UserSchema)

export default User
