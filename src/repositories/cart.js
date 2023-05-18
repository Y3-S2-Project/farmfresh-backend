import Cart from '../models/cart.js'

//create new cart
export const createCartRepository = async (data) => {
  try {
    //check if user already has a cart
    const existingCart = await Cart.findOne({ user_id: data.user_id })
    if (existingCart) {
      //if user already has a cart, update the cart
      //   existingCart.products.push(...data.products)
      const savedCart = updateQuantityRepository(data.user_id, data)
      return savedCart
    } else {
      //if user doesn't have a cart, create a new cart and add the item
      const newCart = new Cart(data)
      const cartCount = await Cart.count()
      newCart.cart_id = 'CID00' + (parseInt(cartCount) + 1)
      const savedCart = await newCart.save()
      return savedCart
    }
  } catch (err) {
    console.error('Error creating cart: ', err)
    return null
  }
}

export const updateQuantityRepository = async (user_id, data) => {
  console.log('coming here')
  try {
    // Get cart by user id
    const cart = await Cart.findOne({ user_id })
    console.log('cart', cart)
    // Check if cart exists - return null if cart does not exist
    if (!cart) return null

    // Iterate over the products in the data object
    for (const product of data.products) {
      const existingProduct = cart.products.find(
        (p) => p.product_id.toString() === product.product_id,
      )
      if (existingProduct) {
        // If the product already exists in the cart, update its quantity
        existingProduct.quantity = product.quantity
      } else {
        // If the product does not exist in the cart, add it to the cart
        cart.products.push(product)
      }
    }
    // Save the updated cart
    await cart.save()

    // Return the updated cart
    return cart
  } catch (err) {
    console.error('Error updating cart: ', err)
    return null
  }
}

//get cart by user id
export const getCartByUserIdRepository = async (user_id) => {
  try {
    const cart = await Cart.findOne({ user_id }).populate('products.product_id')
    return cart
  } catch (err) {
    console.error('Error getting cart: ', err)
    return null
  }
}

//delete product from cart
export const deleteProductFromCartRepository = async (user_id, product_id) => {
  try {
    // Get cart by user id
    const cart = await Cart.findOne({ user_id })
    // Check if cart exists - return null if cart does not exist
    if (!cart) return null
    // Filter out the product to be deleted
    cart.products = cart.products.filter((p) => p.product_id.toString() !== product_id)
    // Save the updated cart
    await cart.save()
    return cart
  } catch (err) {
    console.error('Error deleting product from cart: ', err)
    return null
  }
}
