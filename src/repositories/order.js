import Order from '../models/order.js'

export const createOrderRepository = async (data) => {
    const newOrder = new Order(data)
    const orderCount = await Order.count()
    newOrder.order_id = 'OID00' + (parseInt(orderCount) + 1)
    return await newOrder.save();
}
