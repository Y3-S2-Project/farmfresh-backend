import { Router } from 'express'
import { adminSignUp, buyerSignUp, login, logout, sellerSignUp } from '../controllers/auth'
import { adminRegProtect, protect } from '../middleware/auth'
import { ROLES } from '../utils/constants'

const router = Router()

router.post('/signup/buyer', buyerSignUp)
router.post('/signup/seller', sellerSignUp)
router.post('/signup/admin', adminSignUp)
router.patch('/login', login)
router.patch('/logout', logout)

export default router
