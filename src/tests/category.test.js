const { expect } = require('chai')
const { connectTestDB, closeTestDB, clearTestDB } = require('../database/mongo.test.js')
import { categoryArray, category, updatedCategory, invalidCategoryObjectId } from '../utils/mockData.js'
import logger from '../utils/logger.js'
import {
  addCategory,
  getCategoryById,
  getAllCategories,
  editCategoryById,
  removeCategoryById,
} from '../services/category'

let category_id = undefined
// description of the test
describe('Category Service CRUD Operations', () => {
  //just after describe block, before all tests, execute this
  before(async () => {
    try {
      await connectTestDB()
    } catch (error) {
      logger.error(error)
    }
  })
  // before each test, add the category to the db
  beforeEach(async () => {
    try {
      let addedCategory = null
      for (const category of categoryArray) {
        addedCategory = await addCategory(category)
      }
      category_id = addedCategory.data._id
    } catch (error) {
      logger.error(error)
    }
  })

  // after each test, clear collection in db
  afterEach(async () => {
    try {
      await clearTestDB()
    } catch (error) {
      logger.error(error)
    }
  })
  //after all test drop the db and close the connection
  // after(async () => {
  //   try {
  //     await closeTestDB()
  //   } catch (error) {
  //     logger.error(error)
  //   }
  // })
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
    it('should get all categories', async () => {
      const result = await getAllCategories()

      expect(result).to.have.property('data')
      expect(result.status).to.equal(200)
      expect(result.success).to.be.true
      expect(result.message).to.equal('Categories fetched successfully')
    })
    //expect to have data property, status 200, success true and message Category fetched successfully
    it('should get a category by ID', async () => {
      const result = await getCategoryById(category_id)
      expect(result).to.have.property('data')
      expect(result.status).to.equal(200)
      expect(result.success).to.be.true
      expect(result.message).to.equal('Category fetched successfully')
    })
    //expect to have data property, status 200, success true and message Category updated successfully
    it('should update a category', async () => {
      const result = await editCategoryById(category_id, updatedCategory)
      expect(result).to.have.property('data')
      expect(result.status).to.equal(200)
      expect(result.success).to.be.true
      expect(result.message).to.equal('Category updated successfully')
    })
    //expect to have data property, status 200, success true and message Category deleted successfully
    it('should delete a category', async () => {
      const result = await removeCategoryById(category_id)
      expect(result.status).to.equal(200)
      expect(result.success).to.be.true
      expect(result.message).to.equal('Category deleted successfully')
    })
  })
  // Negative test cases for category service
  describe('Negative Tests', () => {
    //expect to have error property, status 404, error true and message Category not found
    it('should return an error when getting a category with an invalid ID', async () => {
      const result = await getCategoryById(invalidCategoryObjectId)
      expect(result).to.have.property('error')
      expect(result.status).to.equal(404)
      expect(result.error).to.be.true
      expect(result.message).to.equal('Category not found')
    })
    //expect to have error property, status 404, error true and message Category not found
    it('should return an error when updating a category with an invalid ID ', async () => {
      const result = await editCategoryById(invalidCategoryObjectId, updatedCategory)
      expect(result).to.have.property('error')
      expect(result.status).to.equal(404)
      expect(result.error).to.be.true
      expect(result.message).to.equal('Category not found')
    })

    //expect to have error property, status 404, error true and message Category not found
    it('should return an error when deleting a category with an invalid ID', async () => {
      const result = await removeCategoryById(invalidCategoryObjectId)
      expect(result).to.have.property('error')
      expect(result.status).to.equal(404)
      expect(result.error).to.be.true
      expect(result.message).to.equal('Category not found')
    })
  })
})
