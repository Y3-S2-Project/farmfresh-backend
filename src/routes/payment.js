import { Router } from 'express'
import { protect } from '../middleware/auth'
import { ROLES } from '../utils/constants'
import { getPaymentIntentController } from '../controllers/payment'

const router = Router()
const stripe = require('stripe')(
  'sk_test_51N3x7aSBDY9rlLLcBz3lX5R58adyJjO53gQX79mCvVOWUS6vh9lpXPNEX3Pl5I8n1nM9OTka8cpHPRJOVb7z4bVb0005Wh959K',
)
const express = require('express')
const endpointSecret = 'whsec_bab1e365253d77a59a8bc8c191051849984016af638f8440b165c4777722c84f'

router.post('/webhook', express.raw({ type: 'application/json' }), (request, response) => {
  const sig = request.headers['stripe-signature']

  let event

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret)
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`)
    return
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object
      // Then define and call a function to handle the event payment_intent.succeeded
      break
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send()
})
// // router.post('/create', protect(ROLES.BUYER), createPaymentController)
router.get('/secret', getPaymentIntentController)

export default router
