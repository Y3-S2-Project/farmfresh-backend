import { getUserRepository } from '../repositories/user'
import { decodeJwtToken } from '../utils/jwt'
import { makeResponse } from '../utils/response'
import asyncHandler from './asyncHandler'

export const protect = (role) =>
  asyncHandler(async (req, res, next) => {
    const token = req.headers.authorization
      ? req.headers.authorization.startsWith('Bearer')
        ? req.headers.authorization.split(' ')[1]
        : null
      : null
    if (!token) return makeResponse({ res, status: 403, message: 'Unauthorized' })
    const decodedUser = decodeJwtToken(token).data

    const user = decodedUser ? await getUserRepository(uid) : null
    if (!user) return makeResponse({ res, status: 403, message: 'Unauthorized' })
    if (user.current_user_role !== role)
      return makeResponse({ res, status: 403, message: 'Unauthorized' })
    req.user = user
    next()
  })

export const adminRegProtect = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization
    ? req.headers.authorization.startsWith('Bearer')
      ? req.headers.authorization.split(' ')[1]
      : null
    : null

  const decodedUser = decodeJwtToken(token).data

  const user = decodedUser ? await getUserRepository(uid) : null
  if (user?.current_user_role === 'ADMIN') {
    req.user = user
  } else {
    req.user = null
  }

  next()
})
