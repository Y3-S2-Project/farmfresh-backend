import { Router } from 'express'
import authRouter from './auth'
import productRouter from './product'
import orderRouter from './order'
import categoryRouter from './category'
import reviewRouter from './review'
import logisticsRouter from './logistics'

const router = Router()

router.use('/auth', authRouter)
router.use('/order', orderRouter)
router.use('/categories', categoryRouter)
router.use('/products', productRouter)
router.use('/review', reviewRouter)
router.use('/logistics', logisticsRouter);

export default router
