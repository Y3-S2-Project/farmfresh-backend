import { Router } from 'express'
import authRouter from './auth'
import productRouter from './product'
import orderRouter from './order'
import cartRouter from './cart'
import categoryRouter from './category'
import reviewRouter from './review'
import logisticsRouter from './logistics'
import paymentRouter from './payment'

const router = Router()

router.use('/auth', authRouter)
router.use('/order', orderRouter)
router.use('/cart', cartRouter);
router.use('/categories', categoryRouter)
router.use('/products', productRouter)
router.use('/review', reviewRouter)
router.use('/logistics', logisticsRouter);
router.use('/payment', paymentRouter)

export default router
