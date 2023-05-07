import Product from '../models/product.js'


// method to get all products
export const findProducts = async (farmerId) => {
  //chec whether products are available or not
  //if available return the products else return error
  try {
    let products = null

    if (farmerId) {
      products = await Product.find({
        farmer: farmerId,
      }).sort({
        _id: -1,
      })
    } else {
      products = await Product.find().sort({ _id: -1 })
    }
    if (products?.length == 0) {
      const error = new Error('Products not found')
      error.status = 404
      throw error
    }

    return products
  } catch (err) {

    throw err
  }
}
// add new product to the database
export const createProduct = async (product) => {
  const newProduct = new Product(product)
  if (!newProduct) return null

  try {
    const savedProduct = await newProduct.save()
    return savedProduct
  } catch (err) {

    return null
  }
}

export const getProductByProductId = async (product_id) => {
  try {
    //get the product with the specified pPid
    //if available return the product else return error
    let product = await Product.find({ product_id: product_id })
    if (product) {
      return product
    } else {
      const error = new Error('Product not found')
      error.status = 404
      throw error
    }
  } catch (err) {

    throw err
  }
}
export const retriveOnSaleProduct = async () => {
  try {
    // get all products where sale state is true
    const products = await Product.find({
      product_sale_status: true,
      product_visible: true,
    }).sort({ _id: -1 })
    // if products are found, return them
    if (products?.length == 0) {
      const error = new Error('On sale Products not found')
      error.status = 404
      throw error
    }
    return products
  } catch (err) {

    throw err
  }
}
export const updateVisiblity = async (product) => {
  product.product_visible = !product.product_visible
  try {
    // Update the product's pVisible field
    const updatedProduct = await Product.findOneAndUpdate(
      { product_id: product.product_id },
      { product_visible: product.product_visible },
      {
        new: true,
      },
    )

    // Return the updated product
    return updatedProduct
  } catch (err) {

    return null
  }
}

export const getRemovedProduct = async (product_id) => {
  try {
    // Delete the product with the specified pId
    const product = await Product.findOneAndDelete({ product_id: product_id })
    // Return the deleted product
    return product
  } catch (err) {
    return null
  }
}

export const getUpdatedProduct = async (productData) => {
  try {
    // Update the product with the specified pId
    const updatedProduct = await Product.findOneAndUpdate(
      { product_id: productData.product_id },
      productData,
      {
        new: true,
      },
    )

    // Return the updated product
    return updatedProduct
  } catch (err) {

    return null
  }
}
