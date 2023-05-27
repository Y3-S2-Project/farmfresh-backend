import { createOrderRepository, getAllOrdersRepository, getDeliveredOrdersCountRepository, getOrderByIdRepository, getPendingOrdersCountRepository, updateOrderStatusRepository, updatePaymentStatusRepository } from '../repositories/order.js'


// Creates a new order using the createOrderRepository function and returns a Promise.
export const createOrderService = async (data) => {
    return await createOrderRepository(data)
}

// Gets all orders using the getAllOrdersRepository function and returns a Promise.
export const getAllOrdersService = async (order_id) => {
    return await getAllOrdersRepository(order_id)
}

// Gets an order by id using the getOrderByIdRepository function and returns a Promise.
export const getOrderByIdService = async (order_id) => {
    return await getOrderByIdRepository(order_id)
}

// Updates an order status using the updateOrderStatusRepository function and returns a Promise.
export const updateOrderStatusService = async (order_id, order_status) => {
    return await updateOrderStatusRepository(order_id, order_status)
}

// Updates a payment status using the updatePaymentStatusRepository function and returns a Promise.
export const updatePaymentStatusService = async (order_id, payment_status) => {
    return await updatePaymentStatusRepository(order_id, payment_status)
}

// Gets the total count of pending orders using the getPendingOrdersCountRepository function and returns a Promise.
export const getPendingOrdersCountService = async () => {
  return await getPendingOrdersCountRepository()
}

// Gets the total count of delivered orders using the getDeliveredOrdersCountRepository function and returns a Promise.
export const getDeliveredOrdersCountService = async () => {
  return await getDeliveredOrdersCountRepository()
}

