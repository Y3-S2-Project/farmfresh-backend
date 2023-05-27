const { expect } = require('chai')
const { connectTestDB, closeTestDB, clearTestDB } = require('../database/mongo.test.js')
import {
  productArray,
  product,
  updatedProduct,
  invalidProduct,
  farmerId,
} from '../utils/mockData.js'
import logger from '../utils/logger.js'
import {
  addProduct,
  fetchAllProducts,
  removeProduct,
  updateProduct,
  allOnSaleProduct,
  fetchProductById,
  makeProductVisible,
} from '../services/product'

let productId = null
// description of the test
describe('product Service CRUD Operations', () => {
  //just after describe block, before all tests, connect to test db
  before(async () => {
    try {
      await connectTestDB()
    } catch (error) {
      logger.error(error)
    }
  })
  // before each test, add the products to the db
  beforeEach(async () => {
    let result = null
    try {
      for (const product of productArray) {
        result = await addProduct(product, farmerId)
      }
      productId = result.data.product_id
    } catch (error) {
      logger.error(error)
    }
  })

  // after each test drop all the data from the db
  afterEach(async () => {
    try {
      await clearTestDB()
    } catch (error) {
      logger.error(error)
    }
  })
  //after all tests, drop the db and close the connection
  after(async () => {
    try {
      await closeTestDB()
    } catch (error) {
      console.error(error)
    }
  })
  // Positive test cases for product service
  describe('Positive Tests', () => {
    //expect to have data property, status 200, success true and message Product fetched successfully
    it('should get all  products', async () => {
      const result = await fetchAllProducts()

      expect(result).to.have.property('data')
      expect(result.status).to.equal(200)
      expect(result.success).to.be.true
      expect(result.message).to.equal('All products')
    })
    //expect to have data property, status 200, success true and message Product fetched successfully
    it('should get all  products of farmer', async () => {
      const result = await fetchAllProducts(farmerId)

      expect(result).to.have.property('data')
      expect(result.status).to.equal(200)
      expect(result.success).to.be.true
      expect(result.message).to.equal('All products')
    })


    //expect to have data property, status 201, success true and message product created successfully
    it('should create a new product', async () => {
      const result = await addProduct(product, farmerId)

      expect(result).to.have.property('data')
      expect(result.status).to.equal(201)
      expect(result.success).to.be.true
      expect(result.message).to.equal('Product created successfully')
    })
    //expect to have data property, status 200, success true and message product fetched successfully
    it('should get a product by ID', async () => {
      const result = await fetchProductById(productId)
      expect(result).to.have.property('data')
      expect(result.status).to.equal(200)
      expect(result.success).to.be.true
      expect(result.message).to.equal('Product fetched successfully')
    })

    //expect to have data property, status 200, success true and message product fetched successfully
    it('should get a product visibility true', async () => {
      const result = await makeProductVisible(productId, true)
      expect(result).to.have.property('data')
      expect(result.status).to.equal(200)
      expect(result.success).to.be.true
      expect(result.data.product_visible).to.be.true
      expect(result.message).to.equal('Product visibility updated successfully')
    })
    //expect to have data property, status 200, success true and message product updated successfully
    it('should update a product', async () => {
      const result = await updateProduct(productId, updatedProduct)
      expect(result).to.have.property('data')
      expect(result.status).to.equal(200)
      expect(result.success).to.be.true
      expect(result.message).to.equal('Product updated successfully')
    })
    //expect to have data property, status 200, success true and message product deleted successfully
    it('should delete a product', async () => {
      const result = await removeProduct(productId)
      expect(result.status).to.equal(200)
      expect(result.success).to.be.true

      expect(result.message).to.equal('Product deleted successfully')
    })
  })

  // Negative test cases for product service
  describe('Negative Tests', () => {
    //expect to have error property, status 500, error true and message Error creating product
    it('should return an error when creating a product with an invalid property', async () => {
      const result = await addProduct(invalidProduct, farmerId)
      expect(result).to.have.property('error')
      expect(result.status).to.equal(500)
      expect(result.error).to.be.true
      expect(result.message).to.equal('Internal Server Error creating product')
    })

    //expect to have error property, status 404, error true and message product not found
    it('should return an error when getting a product with an invalid ID', async () => {
      const result = await fetchProductById('PID09')
      expect(result).to.have.property('error')
      expect(result.status).to.equal(404)
      expect(result.error).to.be.true
      expect(result.message).to.equal('No producs found for given id')
    })
    //expect to have error property, status 404, error true and message product not found
    it('should return an error when updating a product with an invalid ID ', async () => {
      const result = await updateProduct('PID099', updatedProduct)
      expect(result).to.have.property('error')
      expect(result.status).to.equal(404)
      expect(result.error).to.be.true
      expect(result.message).to.equal('No producs found for given id')
    })

    //expect to have error property, status 404, error true and message product not found
    it('should return an error when deleting a product with an invalid ID', async () => {
      const result = await removeProduct('PID009')
      expect(result).to.have.property('error')
      expect(result.status).to.equal(404)
      expect(result.error).to.be.true
      expect(result.message).to.equal('No producs found for given id')
    })
  })
})
