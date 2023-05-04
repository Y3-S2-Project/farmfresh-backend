import { createUser } from '../database/firebase'
import { createUserRepository, loginRepository, logoutRepository } from '../repositories/auth'

export const buyerSignUpService = async (data) => {
  return await createUserRepository(data)
}

export const sellerSignUpService = async (data) => {
  const { email, password } = data
  const { uid } = await createUser(email, password)
  return await createUserRepository({ ...data, uid })
}

export const adminSignUpService = async (data) => {
  return await createUserRepository(data)
}

export const loginService = async (data) => {
  const { email, password } = data
  return await loginRepository(email, password)
}

export const logoutService = async () => {
  return await logoutRepository()
}
