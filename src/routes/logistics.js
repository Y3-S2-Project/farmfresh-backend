import { Router } from 'express'
import { protect } from '../middleware/auth'
import { ROLES } from '../utils/constants'
import { createLogistics} from '../controllers/logistics'

const router = Router()

router.route('/').post(protect(ROLES.BUYER), createLogistics);
// router.route('/:id').get(protect(ROLES.BUYER), getLogisticsById).patch(protect(ROLES.BUYER), updateLogistics).delete(protect(ROLES.BUYER), deleteLogistics);

export default router
