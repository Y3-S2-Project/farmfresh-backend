import { Router } from 'express'
import authRouter from './auth'
import orderRouter from './order'
import paymentRouter from './payment'

const router = Router()

router.use('/auth', authRouter);
router.use('/order', orderRouter);
router.use('/payment', paymentRouter)

export default router
