import asyncHandler from '../middleware/asyncHandler'
import {
  addProduct,
  fetchAllProducts,
  removeProduct,
  updateProduct,
  allOnSaleProduct,
  fetchProductById,
  makeProductVisible,
} from '../services/product'
import { makeResponse } from '../utils/response'

//get all products for a specific farmer or all products in db
export const getAllProducts = asyncHandler(async (req, res) => {
  const result = await fetchAllProducts(req?.user?._id)

  return makeResponse({
    res,
    status: result?.status,
    data: result?.data,
    success: result?.success,
    error: result?.error,
    message: result?.message,
  })
})
// Function to add a new product
export const postAddProduct = asyncHandler(async (req, res) => {
  const result = await addProduct(req.body, req.user._id)

  return makeResponse({
    res,
    status: result?.status,
    data: result?.data,
    success: result?.success,
    error: result?.error,
    message: result?.message,
  })
})

// Function to edit an existing product
export const editProduct = asyncHandler(async (req, res) => {
  const result = await updateProduct(req.params.productId, req.body)
  return makeResponse({
    res,
    status: result?.status,
    data: result?.data,
    success: result?.success,
    error: result?.error,
    message: result?.message,
  })
})

// Function to delete a product
export const deleteProduct = asyncHandler(async (req, res) => {
  const result = await removeProduct(req.params.productId)
  return makeResponse({
    res,
    status: result?.status,
    data: result?.data,
    success: result?.success,
    error: result?.error,
    message: result?.message,
  })
})

// Function to get all products on sale
export const getAllProductsOnSale = asyncHandler(async (req, res) => {
  const result = await allOnSaleProduct()

  return makeResponse({
    res,
    status: result?.status,
    data: result?.data,
    success: result?.success,
    error: result?.error,
    message: result?.message,
  })
})

// Function to get a single product by ID
export const getSingleProduct = asyncHandler(async (req, res) => {
  const result = await fetchProductById(req.params.productId)

  return makeResponse({
    res,
    status: result?.status,
    data: result?.data,
    success: result?.success,
    error: result?.error,
    message: result?.message,
  })
})

// Function to update product visibility
export const updateProductVisibility = asyncHandler(async (req, res) => {
  // meke a  product visible to all the users
  const result = await makeProductVisible(req.params.productId)

  return makeResponse({
    res,
    status: result.status,
    data: result.data,
    success: result.success,
    error: result.error,
  })
})
