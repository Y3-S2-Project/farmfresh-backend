import Order from '../models/order.js'

//add new order to the database
export const createOrderRepository = async (data) => {
    const newOrder = new Order(data)
    const orderCount = await Order.count()
    newOrder.order_id = 'OID00' + (parseInt(orderCount) + 1)
    return await newOrder.save();
}

//get all orders from the database
// export default getAllOrdersRepository = async (order_id) => {
//     let orders
//     if (order_id) {
//       orders = await Order.find({ order_id }).populate.populate('products.product_id')
//     } else {
//       orders = await Order.find().populate('products.product_id').populate('user_id')
//     }
//     return orders
// }

//get order by order id from the database
export const getOrderByIdRepository = async (order_id) => {
    return await Order.findOne({ order_id }).populate('products.product_id').populate('user_id')
}

//update order status by order id from the database
export const updateOrderStatusRepository = async (order_id, order_status) => {
    return await Order.findOneAndUpdate({ order_id }, { order_status }, { new: true })
}

//update payment status by order id from the database
export const updatePaymentStatusRepository = async (order_id, payment_status) => {
    return await Order.findByIdAndUpdate({ order_id }, { payment_status }, { new: true })
}

//get total count of pending orders from the database
export const getPendingOrdersCountRepository = async () => {
    return await Order.count({ order_status: 'Pending' })
}

//get total count of delivered orders from the database
export const getDeliveredOrdersCountRepository = async () => {
    const orders = await Order.find().populate('delivery_id')
    const deliveryOrdersCount = orders.filter(
      (order) => order.delivery_id.delivery_type === 'Delivery',
    ).length
    return deliveryOrdersCount;

}