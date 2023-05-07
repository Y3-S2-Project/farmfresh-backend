import { createOrderRepository, getDeliveredOrdersCountRepository } from '../repositories/order.js'

export const createOrderService = async (data) => {
    return await createOrderRepository(data)
}

export const getDeliveredOrdersCountService = async () => {
  return await getDeliveredOrdersCountRepository()
}