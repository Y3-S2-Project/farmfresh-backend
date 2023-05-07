//create category and return created category
import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import {
  addCategory,
  getCategoryById,
  getAllCategories,
  editCategoryById,
  removeCategoryById,
} from '../services/category'

// add new category by calling category service add category method and return the created category
export const postCategory = asyncHandler(async (req, res) => {
  const result = await addCategory(req.body)

  return makeResponse({
    res,
    status: result?.status,
    data: result?.data,
    success: result?.success,
    error: result?.error,
    message: result?.message,
  })
})
//get a category by id
export const getCategory = asyncHandler(async (req, res) => {
  const result = await getCategoryById(req.params.id)
  return makeResponse({
    res,
    status: result?.status,
    data: result?.data,
    error: result?.error,
    success: result?.success,
    message: result?.message,
  })
})

//get all categories
export const getCategories = asyncHandler(async (req, res) => {
  const result = await getAllCategories()
  return makeResponse({
    res,
    status: result?.status,
    data: result?.data,
    error: result?.error,
    success: result?.success,
    message: result?.message,
  })
})
//edit category
export const editCategory = asyncHandler(async (req, res) => {
  const result = await editCategoryById(req.params.id, req.body)
  return makeResponse({
    res,
    status: result?.status,
    data: result?.data,
    error: result?.error,
    success: result?.success,
    message: result?.message,
  })
})
//delete category
export const removeCategory = asyncHandler(async (req, res) => {
  const result = await removeCategoryById(req.params.id)
  return makeResponse({
    res,
    status: result?.status,
    data: result?.data,
    error: result?.error,
    success: result?.success,
    message: result?.message,
  })
})
