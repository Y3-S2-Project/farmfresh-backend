import { createUser } from '../database/firebase'
import { createUserRepository, loginRepository, logoutRepository } from '../repositories/auth'
import { ROLES } from '../utils/constants'

export const signUpService = async (data) => {
  if (data.current_user_role === ROLES.FARMER) data.role.push(ROLES.BUYER)
  return await createUserRepository(data)
}

export const loginService = async (data) => {
  const { email, password } = data
  return await loginRepository(email, password)
}

export const logoutService = async () => {
  return await logoutRepository()
}
