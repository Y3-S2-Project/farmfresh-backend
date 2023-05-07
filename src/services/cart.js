import { createCartRepository } from '../repositories/cart.js'

export const createCartService = async (data) => {
  return await createCartRepository(data)
}
