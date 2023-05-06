import { Router } from 'express'
import authRouter from './auth'
import productRouter from './product.routes'
const router = Router()

router.use('/auth', authRouter)
router.use('/products', productRouter)
export default router
