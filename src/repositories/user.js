import User from '../models/user'

export const getUserRepository = async (uid) => {
  return await User.findOne({ uid })
}
