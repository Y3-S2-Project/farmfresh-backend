import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import {
  adminSignUpService,
  buyerSignUpService,
  loginService,
  logoutService,
  sellerSignUpService,
} from '../services/auth'
import { sendTokenResponse } from '../utils/jwt'

export const buyerSignUp = asyncHandler(async (req, res) => {
  const result = await buyerSignUpService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Error signing up buyer' })
  if (result.status === 409)
    return makeResponse({ res, status: 409, message: 'Buyer already exists' })
  return sendTokenResponse({ res, data: result, message: 'Buyer signed up successfully' })
})

export const sellerSignUp = asyncHandler(async (req, res) => {
  const result = await sellerSignUpService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Error signing up seller' })
  if (result.status === 409)
    return makeResponse({ res, status: 409, message: 'Seller already exists' })
  return sendTokenResponse({ res, data: result, message: 'Seller signed up successfully' })
})

export const adminSignUp = asyncHandler(async (req, res) => {
  const result = await adminSignUpService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Error signing up admin' })
  if (result.status === 409)
    return makeResponse({ res, status: 409, message: 'Admin already exists' })
  return sendTokenResponse({ res, data: result, message: 'Admin signed up successfully' })
})

export const login = asyncHandler(async (req, res) => {
  const result = await loginService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Error logging in' })
  if (result.status === 404) return makeResponse({ res, status: 404, message: 'User not found' })
  if (result.status === 401)
    return makeResponse({ res, status: 401, message: 'Incorrect password' })
  return sendTokenResponse({ res, data: result, message: 'Logged in successfully' })
})

export const logout = asyncHandler(async (req, res) => {
  const result = await logoutService()
  if (!result) return makeResponse({ res, status: 500, message: 'Error logging out' })
  return makeResponse({ res, data: result, message: 'Logged out successfully' })
})
