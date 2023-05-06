import { createUserRepository, loginRepository, logoutRepository } from '../repositories/auth'

export const buyerSignUpService = async (data) => {
  return await createUserRepository(data)
}

export const sellerSignUpService = async (data) => {
  return await createUserRepository(data)
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
