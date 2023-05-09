import { Router } from 'express'
import { protect } from '../middleware/auth'
import { ROLES } from '../utils/constants'
import {
  postCategory,
  getCategory,
  getCategories,
  editCategory,
  removeCategory,
} from '../controllers/category'

const categoryRouter = Router()
//category routes
categoryRouter.post('/', protect(ROLES.ADMIN), postCategory)
categoryRouter.get('/:id', getCategory)
categoryRouter.get('/', getCategories)
categoryRouter.patch('/:id', protect(ROLES.ADMIN), editCategory)
categoryRouter.delete('/:id', protect(ROLES.ADMIN), removeCategory)

export default categoryRouter
