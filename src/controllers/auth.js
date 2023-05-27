import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import { signUpService, loginService, logoutService } from '../services/auth'
import { sendTokenResponse } from '../utils/jwt'
import { ROLES } from '../utils/constants'

const getMessageByRole = (role) => {
  switch (role) {
    case ROLES.BUYER:
      return {
        no_results_status: 'Error signing up buyer',
        status_409: 'Buyer already exists',
        success: 'Buyer signed up successfully',
      }
    case ROLES.FARMER:
      return {
        no_results_status: 'Error signing up farmer',
        status_409: 'Farmer already exists',
        success: 'Farmer signed up successfully',
      }
    case ROLES.ADMIN:
      return {
        no_results_status: 'Error signing up admin',
        status_409: 'Admin already exists',
        success: 'Admin signed up successfully',
      }
  }
}

export const signUp = asyncHandler(async (req, res) => {
  const result = await signUpService(req.body)
  const { no_results_status, status_409, success } = getMessageByRole(req.body.current_user_role)
  if (!result) return makeResponse({ res, status: 500, message: no_results_status })
  if (result.status === 409) return makeResponse({ res, status: 409, message: status_409 })
  return sendTokenResponse({ res, data: result, message: success })
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
