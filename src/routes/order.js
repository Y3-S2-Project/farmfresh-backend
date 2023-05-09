import { Router } from 'express'
import { protect } from '../middleware/auth'
import { ROLES } from '../utils/constants'
import { createOrder, getAllOrders, getDeliveredOrdersCount, getOrderById, getPendingOrdersCount, updateOrderStatus, updatePaymentStatus } from '../controllers/order'

const router = Router()

router.route('/').post(protect(ROLES.BUYER), createOrder) .get(protect(ROLES.BUYER), getAllOrders);
router.route('/:id').get(protect(ROLES.BUYER), getOrderById).patch(protect(ROLES.BUYER), updateOrderStatus).put(protect(ROLES.BUYER), updatePaymentStatus);
router.route('/getPendingCount').get(protect(ROLES.BUYER), getPendingOrdersCount)
router.route('/getDeliveryCount').get(protect(ROLES.BUYER), getDeliveredOrdersCount)

export default router
