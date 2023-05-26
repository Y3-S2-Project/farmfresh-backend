import {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} from '../repositories/category.js'
import { v4 as uuidv4 } from 'uuid'
// add new category and return the created category if it is created else return error
export const addCategory = async (data) => {
  data.category_id = `CID${uuidv4()}`
  const createdCategory = await createCategory(data)
  if (!createdCategory) return { status: 500, error: 'Error creating category' }

  return { status: 201, data: createdCategory, success: 'Category created successfully' }
}

//get a category by id and return the category if it is found else return error
export const getCategoryById = async (id) => {
  try {
    const category = await getCategory(id)

    return { status: 200, data: category, success: 'Category fetched successfully' }
  } catch (err) {
    if (err.status === 404) return { status: err.status, error: true, message: err.message }

    return { status: 500, error: true, message: err.message }
  }
}
//get all categories and return the categories if they exists else return error
export const getAllCategories = async () => {
  try {
    const categories = await getCategories()
    if (categories)
      return {
        status: 200,
        data: categories,
        success: true,
        message: 'Categories fetched successfully',
      }
    return { status: 200, success: true, message: 'No categories added yet' }
  } catch (err) {
    return { status: 500, error: true, message: err.message }
  }
}

//edit category and return the edited category if it is edited else return error
export const editCategoryById = async (id, data) => {
  console.log('New data', data)
  try {
    const result = await getCategoryById(id)

    //if category not found or sever error , return error
    if (result?.status !== 200) return result
    //update category data
    result.data.category_name = data.category_name || result.data.category_name
    result.data.category_description = data.description || result.data.category_description
    result.data.category_image = data.category_image || result.data.category_image
    result.data.category_status = data.category_status || result.data.category_status
    result.data.updatedAt = Date.now()

    //save category and return updated category
    const updatedCategory = await updateCategory(result.data)

    return {
      status: 200,
      data: updatedCategory,
      message: 'Category updated successfully',
      success: true,
    }
  } catch (err) {
    return { status: 500, error: true, message: err.message }
  }
}

export const removeCategoryById = async (id) => {
  try {
    const result = await getCategoryById(id)
    //if category not found or sever error , return error
    if (result?.status !== 200) return result
    //delete category
    const deletedCategory = await deleteCategory(id)
    return {
      status: 200,
      message: 'Category deleted successfully',
      data: deletedCategory,
      success: true,
    }
  } catch (err) {
    return { status: 500, error: true, message: err.message }
  }
}
