import mongoose from 'mongoose'
export const categoryArray = [
  {
    category_name: 'Fruits',
    category_image:
      'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FGraph-From%20google%20form%20responses%20(1).PNG86597993-7f2a-4014-ae76-0883bc0daef4?alt=media&token=3c6cac81-fa24-4e57-8629-383f19a63a2a',
    category_description:
      'This category can include a variety of fresh, frozen, or canned fruits, such as apples, bananas, oranges, and strawberries',
    category_status: 'Available',
    category_id: 'CAT001',
  },
  {
    category_name: 'Vegetables',
    category_image:
      'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FGraph-From%20google%20form%20responses%20(1).PNG86597993-7f2a-4014-ae76-0883bc0daef4?alt=media&token=3c6cac81-fa24-4e57-8629-383f19a63a2a',
    category_description:
      'This category can include a variety of fresh, frozen, or canned fruits, such as apples, bananas, oranges, and strawberries',
    category_status: 'Available',
    category_id: 'CAT002',
  },
  {
    category_name: 'Fruits',
    category_image:
      'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FGraph-From%20google%20form%20responses%20(1).PNG86597993-7f2a-4014-ae76-0883bc0daef4?alt=media&token=3c6cac81-fa24-4e57-8629-383f19a63a2a',
    category_description:
      'This category can include a variety of fresh, frozen, or canned fruits, such as apples, bananas, oranges, and strawberries',
    category_status: 'Available',
    category_id: 'CAT003',
  },
]

export const category = {
  category_name: 'Seafood',
  category_image:
    'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FGraph-From%20google%20form%20responses%20(1).PNG86597993-7f2a-4014-ae76-0883bc0daef4?alt=media&token=3c6cac81-fa24-4e57-8629-383f19a63a2a',
  category_description:
    'This category can include a variety of fresh, frozen, or canned fruits, such as apples, bananas, oranges, and strawberries',
  category_status: 'Available',
  category_id: 'CAT004',
}
export const updatedCategory = {
  category_name: 'Beverages',
  category_image:
    'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FGraph-From%20google%20form%20responses%20(1).PNG86597993-7f2a-4014-ae76-0883bc0daef4?alt=media&token=3c6cac81-fa24-4e57-8629-383f19a63a2a',
  category_description:
    'This category can include a variety of fresh, frozen, or canned fruits, such as apples, bananas, oranges, and strawberries',
  category_status: 'Not Available',
  category_id: 'CAT003',
}

export const invalidCategory = {
  category_name: 'Fruits',
  cate_image:
    'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FGraph-From%20google%20form%20responses%20(1).PNG86597993-7f2a-4014-ae76-0883bc0daef4?alt=media&token=3c6cac81-fa24-4e57-8629-383f19a63a2a',
  cate_description:
    'This category can include a variety of fresh, frozen, or canned fruits, such as apples, bananas, oranges, and strawberries',
  caty_status: 'Available',
  cat_id: 'CAT001',
}

export const productArray = [
  {
    product_name: 'Onion',
    product_price: 567,
    product_status: 'Available',
    product_category: '645728b106a304a6a8282be8',
    product_offer: 31,
    product_images: [
      'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FGraph-From%20google%20form%20responses%20(1).PNG86597993-7f2a-4014-ae76-0883bc0daef4?alt=media&token=3c6cac81-fa24-4e57-8629-383f19a63a2a',
      'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FWhatsApp%20Image%202023-04-26%20at%2019.41.54.jpeg6b239eda-efa8-4213-8a64-61bec1601ead?alt=media&token=60c51b2a-3b73-46d7-b5cf-7d780b0aa013',
    ],
    product_quantity: 67,

    product_weight: 45,
    product_sale_status: true,
    product_visible: true,
  },
  {
    product_name: 'Carrot',
    product_price: 567,
    product_status: 'Available',
    product_category: '645728b106a304a6a8282be8',
    product_offer: 31,
    product_images: [
      'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FGraph-From%20google%20form%20responses%20(1).PNG86597993-7f2a-4014-ae76-0883bc0daef4?alt=media&token=3c6cac81-fa24-4e57-8629-383f19a63a2a',
      'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FWhatsApp%20Image%202023-04-26%20at%2019.41.54.jpeg6b239eda-efa8-4213-8a64-61bec1601ead?alt=media&token=60c51b2a-3b73-46d7-b5cf-7d780b0aa013',
    ],
    product_quantity: 67,

    product_weight: 45,
    product_sale_status: true,
    product_visible: true,
  },
  {
    product_name: 'Corn',
    product_price: 567,
    product_status: 'Available',
    product_category: '645728b106a304a6a8282be8',
    product_offer: 31,
    product_images: [
      'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FGraph-From%20google%20form%20responses%20(1).PNG86597993-7f2a-4014-ae76-0883bc0daef4?alt=media&token=3c6cac81-fa24-4e57-8629-383f19a63a2a',
      'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FWhatsApp%20Image%202023-04-26%20at%2019.41.54.jpeg6b239eda-efa8-4213-8a64-61bec1601ead?alt=media&token=60c51b2a-3b73-46d7-b5cf-7d780b0aa013',
    ],
    product_quantity: 67,
    product_weight: 45,
    product_sale_status: true,
    product_visible: true,
  },
]

export const product = {
  product_name: 'Corn',
  product_price: 567,
  product_status: 'Available',
  product_category: '645728b106a304a6a8282be8',
  product_offer: 31,
  product_images: [
    'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FGraph-From%20google%20form%20responses%20(1).PNG86597993-7f2a-4014-ae76-0883bc0daef4?alt=media&token=3c6cac81-fa24-4e57-8629-383f19a63a2a',
    'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FWhatsApp%20Image%202023-04-26%20at%2019.41.54.jpeg6b239eda-efa8-4213-8a64-61bec1601ead?alt=media&token=60c51b2a-3b73-46d7-b5cf-7d780b0aa013',
  ],
  product_quantity: 67,
  product_visible: true,
  product_weight: 45,
  product_sale_status: false,
}
export const updatedProduct = {
  product_name: 'Corn',
  product_price: 567,
  product_status: 'Available',
  product_category: '645728b106a304a6a8282be8',
  product_offer: 31,
  product_images: [
    'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FGraph-From%20google%20form%20responses%20(1).PNG86597993-7f2a-4014-ae76-0883bc0daef4?alt=media&token=3c6cac81-fa24-4e57-8629-383f19a63a2a',
    'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FWhatsApp%20Image%202023-04-26%20at%2019.41.54.jpeg6b239eda-efa8-4213-8a64-61bec1601ead?alt=media&token=60c51b2a-3b73-46d7-b5cf-7d780b0aa013',
  ],
  product_quantity: 67,
  product_visible: true,
  product_weight: 45,
  product_sale_status: false,
}

export const invalidProduct = {
  product_name: 'Corn',
  product_price: 567,
  product_status: 'Available',
  pro_category: '645728b106a304a6a8282be8',
  product_offer: 31,
  product_images: [
    'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FGraph-From%20google%20form%20responses%20(1).PNG86597993-7f2a-4014-ae76-0883bc0daef4?alt=media&token=3c6cac81-fa24-4e57-8629-383f19a63a2a',
    'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FWhatsApp%20Image%202023-04-26%20at%2019.41.54.jpeg6b239eda-efa8-4213-8a64-61bec1601ead?alt=media&token=60c51b2a-3b73-46d7-b5cf-7d780b0aa013',
  ],
  product_quantity: 67,
  product_vible: true,
  prodt_weight: 45,
  product_sale_status: false,
}
const fmIdString = '6456880b47d94ecc03cb4529'
export const farmerId = new mongoose.Types.ObjectId(fmIdString)
export const invalidCategoryObjectId = new mongoose.Types.ObjectId('6456880b47d94ecc03cb4529')
