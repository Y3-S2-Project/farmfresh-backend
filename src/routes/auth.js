import { Router } from 'express'
import { signUp, login, logout } from '../controllers/auth'

const router = Router()

router.post('/signup/buyer', signUp)
router.post('/signup/farmer', signUp)
router.post('/signup/admin', signUp)
router.patch('/login', login)
router.patch('/logout', logout)

export default router
