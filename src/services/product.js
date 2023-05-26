import { v4 as uuidv4 } from 'uuid'
import {
  retriveOnSaleProduct,
  createProduct,
  findProducts,
  getProductByProductId,
  updateVisiblity,
  getRemovedProduct,
  getUpdatedProduct,
} from '../repositories/product'

export const allOnSaleProduct = async () => {
  try {
    //get all on sale products
    const result = await retriveOnSaleProduct()

    return {
      status: 200,
      data: result,
      success: 'All on sale products',
    }
  } catch (error) {
    if (error.status === 404) {
      return {
        status: 404,
        error: true,
        message: 'No on sale products found',
      }
    } else {
      return {
        status: 500,
        error: true,
        message: 'Internal Server Error fetching  all on products',
      }
    }
  }
}
export const fetchAllProducts = async () => {
  try {
    //get the products
    const reuslt = await findProducts()
    //check if the products exist if exist return the products else return error

    return {
      status: 200,
      data: reuslt,
      success: true,
      message: 'All products',
    }
  } catch (error) {
    if (error.status === 404) {
      return {
        status: 404,
        error: true,
        message: 'No products found',
      }
    } else {
      return {
        status: 500,
        true: true,
        message: 'Internal Server Error fetching products',
      }
    }
  }
}
export const fetchFarmerProducts = async (farmerId) => {
  try {
    //get the products
    const reuslt = await findProducts(farmerId)
    //check if the products exist if exist return the products else return error

    return {
      status: 200,
      data: reuslt,
      success: true,
      message: 'All famer products',
    }
  } catch (error) {
    if (error.status === 404) {
      return {
        status: 404,
        error: true,
        message: 'No products found',
      }
    } else {
      return {
        status: 500,
        true: true,
        message: 'Internal Server Error fetching products',
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
      success: true,
      message: 'Product fetched successfully',
    }
  } catch (error) {
    if (error.status === 404) {
      return {
        status: 404,
        message: 'No producs found for given id',
        error: true,
      }
    } else {
      return {
        status: 500,
        message: 'Internal Server Error fetching product by id',
        error: true,
      }
    }
  }
}
//update product visibility
export const makeProductVisible = async (productId, visiblity) => {
  //get the product and update the visibility and return the updated product
  const result = await fetchProductById(productId)
  //check if the product exist if exist update the visibility else return error
  if (result.status === 200) {
    const updatedResult = await updateVisiblity(productId, visiblity)
    if (updatedResult) {
      return {
        status: 200,
        data: updatedResult,
        success: true,
        message: 'Product visibility updated successfully',
      }
    } else {
      return {
        status: 500,
        error: true,
        message: 'Internal Server Error updating product visibility',
      }
    }
  }
  return result
}
//add product
export const addProduct = async (product, farmerId) => {
  // define an prodyct object
  const newProduct = {
    product_id: `PID${uuidv4()}`,
    product_name: product.product_name,
    product_status: product.product_status,
    product_category: product.product_category,
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
      message: 'Product created successfully',
      success: true,
    }
  } else {
    return {
      status: 500,
      message: 'Internal Server Error creating product',
      error: true,
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
      message: 'Product deleted successfully',
      success: true,
    }
  } else {
    return {
      status: 500,
      error: true,
      message: 'Internal Server Error deleting product',
    }
  }
}

//update product
export const updateProduct = async (product_id, productData) => {
  const result = await fetchProductById(product_id)
  if (result.status !== 200) {
    return result
  }

  //update the product and return the updated product
  const newProductDetails = {
    product_id: product_id,
    product_name: productData?.product_name || result.data[0]?.product_name,
    product_status: productData?.product_status || result.data[0]?.product_status,
    product_category: productData?.product_category || result.data[0]?.product_category,
    product_quantity: productData?.product_quantity || result.data[0]?.product_quantity,
    product_price: productData?.product_price || result.data[0]?.product_price,
    product_offer: productData?.product_offer || result.data[0]?.product_offer,
    product_weight: productData?.product_weight || result.data[0]?.product_weight,
    product_images: productData?.product_images || result.data[0]?.product_images,
    product_visible: false,
    product_sale_status: productData?.product_sale_status || result.data[0]?.product_sale_status,
  }
  const updatedProduct = await getUpdatedProduct(newProductDetails)

  if (updatedProduct) {
    return {
      status: 200,
      data: updatedProduct,
      success: true,
      message: 'Product updated successfully',
    }
  } else {
    return {
      status: 500,
      error: true,
      message: 'Internal Server Error updating product',
    }
  }
}
