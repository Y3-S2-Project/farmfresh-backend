import { v4 as uuidv4 } from 'uuid'
import {
  retriveOnSaleProduct,
  createProduct,
  findProducts,
  getProductByProductId,
  updateVisiblity,
  getRemovedProduct,
  getUpdatedProduct,
} from '../repositories/product.repository'

export const allOnSaleProduct = async () => {
  try {
    //get all on sale products
    const result = await retriveOnSaleProduct()

    return {
      status: 200,
      data: result.data,
      success: 'All on sale products',
    }
  } catch (error) {
    if (error.status === 404) {
      return {
        status: 404,
        error: 'No on sale products found',
      }
    } else {
      return {
        status: 500,
        error: 'Internal Server Error fetching  all on products',
      }
    }
  }
}
export const fetchAllProducts = async (farmerId) => {
  try {
    //get the products
    const reuslt = await findProducts(farmerId)
    //check if the products exist if exist return the products else return error

    return {
      status: 200,
      data: reuslt,
      success: 'All products',
    }
  } catch (error) {
    if (error.status === 404) {
      return {
        status: 404,
        error: 'No products found',
      }
    } else {
      return {
        status: 500,
        error: 'Internal Server Error fetching products',
      }
    }
  }
}
//get product by id
export const fetchProductById = async (productId) => {
  //get the product and return if it exist else return error
  try {
    const result = await getProductByProductId(productId)

    return {
      status: 200,
      data: result,
      success: 'Product found',
    }
  } catch (error) {
    if (error.status === 404) {
      return {
        status: 404,
        error: 'No producs found',
      }
    } else {
      return {
        status: 500,
        error: 'Internal Server Error get product by id',
      }
    }
  }
}
//update product visibility
export const makeProductVisible = async (productId) => {
  //get the product and update the visibility and return the updated product
  const result = await fetchProductById(productId)
  //check if the product exist if exist update the visibility else return error
  if (result.status === 200) {
    const updatedResult = updateVisiblity(result.data)
    if (updatedResult) {
      return {
        status: 200,
        data: updatedResult,
        success: true,
      }
    } else {
      return {
        status: 500,
        error: 'Internal Server Error updating product visibility',
      }
    }
  } else if (result.status === 404) {
    return {
      status: 404,
      error: 'Product not found',
    }
  } else {
    return {
      status: 500,
      error: 'Internal Server Error getting product by id ',
    }
  }
}
//add product
export const addProduct = async (product, farmerId) => {
  // define an prodyct object
  const newProduct = {
    product_id: `PID${uuidv4()}`,
    product_name: product.product_name,
    product_status: product.product_status,
    // pCategory: product.pCategory,
    product_quantity: product.product_quantity,
    product_price: product.product_price,
    product_offer: product.product_offer,
    product_weight: product.product_weight,
    product_images: product.product_images,
    farmer: farmerId,
  }
  //create the product and return the product
  const createdProduct = await createProduct(newProduct)
  //check if the product is created if created add the product to the farmer collection else return error
  if (createdProduct) {
    return {
      status: 201,
      data: createdProduct,
      success: 'Product created successfully',
    }
  } else {
    return {
      status: 500,
      error: 'Internal Server Error creating product',
    }
  }
}
// remove product
export const removeProduct = async (product_id) => {
  //check if the product exist if exist remove the product else return error
  const result = await fetchProductById(product_id)
  if (!(result.status == 200)) {
    return result
  }

  const deleteProduct = await getRemovedProduct(product_id)
  if (deleteProduct) {
    return {
      status: 200,
      data: deleteProduct,
      success: 'Product deleted successfully',
    }
  } else {
    return {
      status: 500,
      error: 'Internal Server Error deleting product',
    }
  }
}

//update product
export const updateProduct = async (product_id, productData) => {
  const result = await fetchProductById(product_id)
  if (!(result.status == 200)) {
    return result
  }

  result.data.product_name = productData.product_name
  result.data.product_description = productData.product_description
  result.data.product_status = productData.product_status
  // result.data.pCategory = productData.pCategory
  result.data.product_quantity = productData.product_quantity
  result.data.product_price = productData.product_price
  result.data.product_offer = productData.product_offer
  result.data.product_weight = productData.product_weight
  result.data.product_images = productData.product_images
  const updatedProduct = await getUpdatedProduct(result.data)
  if (updatedProduct) {
    return {
      status: 200,
      data: updatedProduct,
      success: 'Product updated successfully',
    }
  } else {
    return {
      status: 500,
      error: 'Internal Server Error updating product',
    }
  }
}
