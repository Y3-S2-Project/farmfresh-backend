import { Router } from 'express'
import authRouter from './auth'
import orderRouter from './order'
import cartRouter from './cart'

const router = Router()

router.use('/auth', authRouter);
router.use('/order', orderRouter);
router.use('/cart', cartRouter);

export default router
