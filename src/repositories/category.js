import logger from '../utils/logger'
import Category from '../models/category'
//create category
export const createCategory = async (data) => {
  try {
    //create category object
    const newCategory = new Category(data)
    //save category and return created category
    return await newCategory.save()
  } catch (error) {
    //log error
    logger.error(error)
    return null
  }
}

export const getCategory = async (id) => {
  try {
    //find category by id
    const category = await Category.findById(id)
    //if category not found throw error
    if (!category) {
      const error = new Error('Category not found')
      error.status = 404
      throw error
    }
    return category
  } catch (error) {
    //log error
    logger.error(error)
    console.log(error.status)
    throw error
  }
}

export const getCategories = async () => {
  try {
    //find all categories
    const categories = await Category.find()
    if (categories?.length === 0) {
      return null
    }
    return categories
  } catch (error) {
    //log error
    logger.error(error)
    throw error
  }
}

export const updateCategory = async ( data) => {
  try {
    //save updated category and return updated category
    const updatedCategory = await data.save()
    return updatedCategory
  } catch (error) {
    logger.error(error)
    throw error
  }
}

export const deleteCategory = async (id) => { 
  try {
    //find category by id and delete
    const removedCategory = await Category.findByIdAndDelete(id)
    return removedCategory
  } catch (error) { 
  //  logger.error(error)
    throw error
  }
}