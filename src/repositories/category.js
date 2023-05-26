import Category from '../models/category'
//create category
export const createCategory = async (data) => {
  try {
    //create category object
    const newCategory = new Category(data)
    //save category and return created category
    return await newCategory.save()
  } catch (error) {
    return null
  }
}

export const getCategory = async (id) => {
  try {
    //find category by id
    const category = await Category.findOne({
      category_id: id,
    })
    //if category not found throw error
    if (!category) {
      const error = new Error('Category not found')
      error.status = 404
      throw error
    }
    return category
  } catch (error) {
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
    throw error
  }
}

export const updateCategory = async (data) => {
  try {
    //save updated category and return updated category
    const updatedCategory = await data.save()
    return updatedCategory
  } catch (error) {
    throw error
  }
}

export const deleteCategory = async (id) => {
  try {
    //find category by id and delete
    const removedCategory = await Category.findOneAndDelete({
      category_id: id,
    })
    return removedCategory
  } catch (error) {
    throw error
  }
}
