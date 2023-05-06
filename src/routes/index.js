import { Router } from 'express'
import authRouter from './auth'

import productRouter from './product'
import orderRouter from './order'

const router = Router()

router.use('/auth', authRouter);
router.use('/order', orderRouter);
router.use('/products', productRouter)

export default router
