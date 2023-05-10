const { expect } = require('chai')
const { connectTestDB, closeTestDB, clearTestDB } = require('../database/mongo.test.js')
import { categoryArray, category, updatedCategory, invalidCategory } from '../utils/mockData.js'
import logger from '../utils/logger.js'
import {
  addCategory,
  getCategoryById,
  getAllCategories,
  editCategoryById,
  removeCategoryById,
} from '../services/category'

// description of the test
describe('Category Service CRUD Operations', () => {
  //just after describe block, before all tests, execute this
  before(async () => {
    try {
      await connectTestDB()
    } catch (error) {
     // logger.error(error)
    }
  })
  // before each test, execute this
  beforeEach(async () => {
    try {
      for (const category of categoryArray) {
        await addCategory(category)
      }
    } catch (error) {
    //  logger.error(error)
    }
  })

  // after each test, execute this
  afterEach(async () => {
    try {
      await clearTestDB()
    } catch (error) {
    //  logger.error(error)
    }
  })
  //after all test drop the db and close the connection
  after(async () => {
    try {
      await closeTestDB()
    } catch (error) {
     // logger.error(error)
    }
  })
  // Positive test cases for category service
  describe('Positive Tests', () => {
    //expect to have data property, status 201, success true and message Category created successfully
    it('should create a new category', async () => {
        const result = await addCategory(category)

        expect(result).to.have.property('data')
        expect(result.status).to.equal(201)
        expect(result.success).to.be.true
        expect(result.message).to.equal('Category created successfully')

    })
    //expect to have data property, status 200, success true and message Categories fetched successfully
    it('should get all users', async () => {

        const result = await getAllCategories()

        expect(result).to.have.property('data')
        expect(result.status).to.equal(200)
        expect(result.success).to.be.true
        expect(result.message).to.equal('Categories fetched successfully')

    })
    //expect to have data property, status 200, success true and message Category fetched successfully
    it('should get a category by ID', async () => {

        const result = await getCategoryById('CAT001')
        expect(result).to.have.property('data')
        expect(result.status).to.equal(200)
        expect(result.success).to.be.true
        expect(result.message).to.equal('Category fetched successfully')
   
    })
    //expect to have data property, status 200, success true and message Category updated successfully
    it('should update a category', async () => {
      const result = await editCategoryById('CAT001', updatedCategory)
      expect(result).to.have.property('data')
      expect(result.status).to.equal(200)
      expect(result.success).to.be.true
      expect(result.message).to.equal('Category updated successfully')
    })
    //expect to have data property, status 200, success true and message Category deleted successfully
    it('should delete a category', async () => {

        const result = await removeCategoryById('CAT001')
        expect(result.status).to.equal(200)
        expect(result.success).to.be.true
        expect(result.message).to.equal('Category deleted successfully')
 
    })
  })
  // Negative test cases for category service
  describe('Negative Tests', () => {
    //expect to have error property, status 500, error true and message Error creating category
    it('should return an error when creating a category with an property', async () => {
   
        const result = await addCategory(invalidCategory)
        expect(result).to.have.property('error')
        expect(result.status).to.equal(500)
        expect(result.error).to.be.true
        expect(result.message).to.equal('Error creating category')
 
    })
    //expect to have error property, status 404, error true and message Category not found
    it('should return an error when getting a category with an invalid ID', async () => {
  
        const result = await getCategoryById('CAT004')
        expect(result).to.have.property('error')
        expect(result.status).to.equal(404)
        expect(result.error).to.be.true
        expect(result.message).to.equal('Category not found')
  
    })
    //expect to have error property, status 404, error true and message Category not found
    it('should return an error when updating a category with an invalid ID ', async () => {

        const result = await editCategoryById('CAT004', updatedCategory)
        expect(result).to.have.property('error')
        expect(result.status).to.equal(404)
        expect(result.error).to.be.true
        expect(result.message).to.equal('Category not found')

    })
    it('should not  update existing data when updating a category with an invalid property', async () => {

        const result = await editCategoryById('CAT001', invalidCategory)
        expect(result).to.have.property('data')
        expect(result.status).to.equal(200)
        expect(result.success).to.be.true
        expect(result.message).to.equal('Category updated successfully')

        //check if the data is updated
        const updatedResult = await getCategoryById('CAT001')

        expect(updatedResult.data.category_name).to.equal(result.data.category_name)
        expect(updatedResult.data.category_description).to.equal(result.data.category_description)
        expect(updatedResult.data.category_image).to.equal(result.data.category_image)
        expect(updatedResult.data.category_status).to.equal(result.data.category_status)

    })

    //expect to have error property, status 404, error true and message Category not found
    it('should return an error when deleting a category with an invalid ID', async () => {
    
        const result = await removeCategoryById('CAT004')
        expect(result).to.have.property('error')
        expect(result.status).to.equal(404)
        expect(result.error).to.be.true
        expect(result.message).to.equal('Category not found')
   
    })
  })
})
