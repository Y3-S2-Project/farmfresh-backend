import { Router } from 'express'
import authRouter from './auth'
import orderRouter from './order'

const router = Router()

router.use('/auth', authRouter);
router.use('/order', orderRouter);

export default router
