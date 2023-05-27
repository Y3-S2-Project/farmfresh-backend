import { Router } from 'express'
import { protect } from '../middleware/auth'
import { ROLES } from '../utils/constants'
import {
  createLogistics,
  deleteLogistics,
  getLogisticsById,
  updateLogistics,
  updateLogisticsStatus,
} from '../controllers/logistics'

const router = Router()

router.route('/').post(protect(ROLES.BUYER), createLogistics)
router
  .route('/:id')
  .get(protect(ROLES.BUYER), getLogisticsById)
  .patch(protect(ROLES.BUYER), updateLogistics)
  .delete(protect(ROLES.BUYER), deleteLogistics)
router.route('/status/:id').patch(protect(ROLES.BUYER), updateLogisticsStatus)

export default router
