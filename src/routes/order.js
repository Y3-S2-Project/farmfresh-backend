import { Router } from 'express'
import { protect } from '../middleware/auth'
import { ROLES } from '../utils/constants'
import { createOrder, getDeliveredOrdersCount } from '../controllers/order'

const router = Router()

router.route('/').post(protect(ROLES.BUYER), createOrder) //.get(protect(ROLES.BUYER), getAllOrders);
// router.route('/:id').get(protect(ROLES.BUYER), getOrderById).patch(protect(ROLES.BUYER), updateOrderStatus).delete(protect(ROLES.BUYER), deleteOrder);
router.route('/getDeliveryCount').get(protect(ROLES.BUYER), getDeliveredOrdersCount)

export default router
