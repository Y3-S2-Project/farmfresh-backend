import { Router } from 'express'
import authRouter from './auth'
import orderRouter from './order'
import logisticsRouter from './logistics'

const router = Router()

router.use('/auth', authRouter);
router.use('/order', orderRouter);
router.use('/logistics', logisticsRouter);

export default router
