import { Router } from 'express'
import authRouter from './auth'
import orderRouter from './order'
import categoryRouter from './category'
const router = Router()

router.use('/auth', authRouter)
router.use('/order', orderRouter)
router.use('/categories', categoryRouter)

export default router
