import { Router } from 'express'
import { adminSignUp, buyerSignUp, login, logout, sellerSignUp } from '../controllers/auth'
import { adminRegProtect, protect } from '../middleware/auth'
import { ROLES } from '../utils/constants'
import { Segments, celebrate } from 'celebrate'
import { buyerSignUpSchema } from '../validations/auth'

const router = Router()

router.post('/signup/buyer', celebrate({ [Segments.BODY]: buyerSignUpSchema }), buyerSignUp)
router.post('/signup/farmer', sellerSignUp)
router.post('/signup/admin', adminSignUp)
router.patch('/login', login)
router.patch('/logout', logout)

export default router
