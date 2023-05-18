import {
  createCartRepository,
  updateQuantityRepository,
  getCartByUserIdRepository,
  deleteProductFromCartRepository,
} from '../repositories/cart.js'

export const createCartService = async (data) => {
  return await createCartRepository(data)
}

export const updateQuantityService = async (user_id, data) => {
  return await updateQuantityRepository(user_id, data)
}

export const getCartByUserIdService = async (user_id) => {
  return await getCartByUserIdRepository(user_id)
}

export const deleteProductFromCartService = async (user_id, product_id) => {
  return await deleteProductFromCartRepository(user_id, product_id)
}
