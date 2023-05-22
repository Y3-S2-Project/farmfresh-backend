// import { createPaymentRepository } from '../repositories/payment.js';

// export const createPaymentService = async (data) => {
//     return await createPaymentRepository(data)
// }

// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')(
  'sk_test_51N3x7aSBDY9rlLLcBz3lX5R58adyJjO53gQX79mCvVOWUS6vh9lpXPNEX3Pl5I8n1nM9OTka8cpHPRJOVb7z4bVb0005Wh959K',
)

export const getPaymentIntentService = async (data) => {
  return await stripe.paymentIntents.create({
    amount: data.amount,
    currency: 'lkr',
    automatic_payment_methods: {
      enabled: true,
    },
  })
}
