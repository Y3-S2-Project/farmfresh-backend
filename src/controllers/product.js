import { async } from '@firebase/util'
import asyncHandler from '../middleware/asyncHandler'

import {
  addProduct,
  fetchAllProducts,
  removeProduct,
  updateProduct,
  allOnSaleProduct,
  fetchProductById,
} from '../services/product'
import { makeResponse } from '../utils/response'

export const getAllProducts = asyncHandler(async (req, res) => {
  const result = await fetchAllProducts(req?.user?._id)

  makeResponse({
    res,
    status: result.status,
    data: result.data,
    success: result.success,
    error: result.error,
  })
})
// Function to add a new product
export const postAddProduct = asyncHandler(async (req, res) => {
  const result = await addProduct(req.body, req.user._id)

  console.log(result)
  makeResponse({
    res,
    status: result.status,
    data: result.data,
    success: result.success,
    error: result.error,
  })
})

// Function to edit an existing product
export const editProduct = asyncHandler(async (req, res) => {
  const result = await updateProduct(req.params.productId, req.body)
  makeResponse({
    res,
    status: result.status,
    data: result.data,
    success: result.success,
    error: result.error,
  })
})

// Function to delete a product
export const deleteProduct = asyncHandler(async (req, res) => {
  const result = await removeProduct(req.params.productId)
  makeResponse({
    res,
    status: result.status,
    data: result.data,
    success: result.success,
    error: result.error,
  })
})

// Function to get all products on sale
export const getAllProductsOnSale = asyncHandler(async (req, res) => {
  const result = await allOnSaleProduct()

  return makeResponse({
    res,
    status: result.status,
    data: result.data,
    success: result.success,
    error: result.error,
  })
})

// Function to get a single product by ID
export const getSingleProduct = asyncHandler(async (req, res) => {
  const result = await fetchProductById(req.params.productId)

  return makeResponse({
    res,
    status: result.status,
    data: result.data,
    success: result.success,
    error: result.error,
  })
})

// Function to update product visibility
export const updateProductVisibility = asyncHandler(async (req, res) => {
  // mekeProductVisible to all the users
  const result = await makeProductVisible(req.params.productId)

  makeResponse({
    res,
    status: result.status,
    data: result.data,
    success: result.success,
    error: result.error,
  })
})
