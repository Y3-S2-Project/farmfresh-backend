import {createOrderRepository} from '../repositories/order.js'

export const createOrderService = async (data) => {
    return await createOrderRepository(data)
}