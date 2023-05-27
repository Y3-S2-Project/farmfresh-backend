import { createUser, signIn, signOutUser } from '../database/firebase'
import User from '../models/user'

export const createUserRepository = async (data) => {
  const { email, password } = data
  const { uid } = await createUser(email, password)
  const user = new User({ ...data, uid })
  return await user.save()
}

export const loginRepository = async (email, password) => {
  return await signIn(email, password)
}

export const logoutRepository = async () => {
  return await signOutUser()
}
