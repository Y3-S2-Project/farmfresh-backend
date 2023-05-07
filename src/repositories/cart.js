import Cart from '../models/cart.js'

export const createCartRepository = async (data) => {
    const newCart = new Cart(data)
    const cartCount = await Cart.count()
    newCart.cart_id = 'CID00' + (parseInt(cartCount) + 1)
    return await newCart.save();
}