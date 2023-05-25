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

/* order mock data */
export const orderArray = [
  {
    order_id: 'OID001',
    user_id: '64562c282fb20f06a113bde4',
    products: [
      {
        product_id: '643e85d9f231b52fe5162523',
        quantity: 3,
      },
    ],
    delivery_id: '645760ea1879fd0016ad3015',
    totalPrice: 2000,
    order_status: 'Pending',
    payment_status: 'Pending',
  },
  {
    order_id: 'OID002',
    user_id: '64562c282fb20f06a113bde4',
    products: [
      {
        product_id: '643e85d9f231b52fe5162523',
        quantity: 3,
      },
    ],
    delivery_id: '645760ea1879fd0016ad3015',
    totalPrice: 2000,
    order_status: 'Pending',
    payment_status: 'Pending',
  },
  {
    order_id: 'OID003',
    user_id: '64562c282fb20f06a113bde4',
    products: [
      {
        product_id: '643e85d9f231b52fe5162523',
        quantity: 3,
      },
    ],
    delivery_id: '645760ea1879fd0016ad3015',
    totalPrice: 3000,
    order_status: 'Pending',
    payment_status: 'Pending',
  },
]

export const order = {
  order_id: 'OID004',
  user_id: '64562c282fb20f06a113bde4',
  products: [
    {
      product_id: '643e85d9f231b52fe5162523',
      quantity: 3,
    },
  ],
  delivery_id: '645760ea1879fd0016ad3015',
  totalPrice: 3000,
  order_status: 'Pending',
  payment_status: 'Pending',
}

export const updatedOrderStatus = {
  order_id: 'OID003',
  user_id: '64562c282fb20f06a113bde4',
  products: [
    {
      product_id: '643e85d9f231b52fe5162523',
      quantity: 3,
    },
  ],
  delivery_id: '645760ea1879fd0016ad3015',
  totalPrice: 3000,
  order_status: 'Confirmed',
  payment_status: 'Pending',
}

export const updatedPaymentStatus = {
  order_id: 'OID003',
  user_id: '64562c282fb20f06a113bde4',
  products: [
    {
      product_id: '643e85d9f231b52fe5162523',
      quantity: 3,
    },
  ],
  delivery_id: '645760ea1879fd0016ad3015',
  totalPrice: 3000,
  order_status: 'Confirmed',
  payment_status: 'Paid',
}

export const invalidOrder = {
  order_id: 'OID004',
  user_id: '64562c282fb20f06a113bde4',
  products: [
    {
      product_id: '643e85d9f231b52fe5162523',
      quantity: 3,
    },
  ],
  delivery_id: '645760ea1879fd0016ad3015',
  totalPrice: 3000,
  order_sts: 'Pending',
  payment_sts: 'Pending',
}
