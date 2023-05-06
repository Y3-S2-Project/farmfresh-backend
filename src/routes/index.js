import { Router } from 'express'
import authRouter from './auth'
import orderRouter from './order'
import reviewRouter from './review'

const router = Router()

router.use('/auth', authRouter);
router.use('/order', orderRouter);
router.use('/review', reviewRouter)

export default router
