import express from 'express'
import {
  getAllProducts,
  postAddProduct,
  editProduct,
  deleteProduct,
  getAllProductsOnSale,
  getSingleProduct,
  updateProductVisibility,
} from '../controllers/product'
import { protect } from '../middleware/auth.js'
import { ROLES } from '../utils/constants.js'
const productRouter = express.Router()

// Get all products
productRouter.get('/', getAllProducts)

// Get all products for a specific farmer
productRouter.get(
  '/farmer-products',
  protect(ROLES.FARMER),

  getAllProducts,
)

// Get a single product by ID
productRouter.get('/:productId', getSingleProduct)

// Add a new product
productRouter.post('/', protect(ROLES.FARMER), postAddProduct)

// Update an existing product
productRouter.patch('/:productId', protect(ROLES.FARMER), editProduct)

// Delete a product by ID
productRouter.delete('/:productId', protect(ROLES.FARMER), deleteProduct)

// Get all products on sale
productRouter.get('/on-sale', getAllProductsOnSale)

// Update the visibility status of a product
productRouter.patch(
  '/:productId/visibility',
  protect(ROLES.ADMIN),
  updateProductVisibility,
)

export default productRouter
