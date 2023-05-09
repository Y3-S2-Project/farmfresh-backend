const { expect } = require('chai')
const { connectTestDB, closeTestDB, clearTestDB } = require('../database/mongo.test.js')
import { categoryArray } from '../utils/mockData.js'
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
      logger.error(error)
    }
  })
  // before each test, execute this
  beforeEach(async () => {
    try {
      await Promise.all([categoryArray.map(async (category) => await addCategory(category))])
    } catch (error) {
      logger.error(error)
    }
  })
  // after each test, execute this
  afterEach(async () => {
    try {
      await clearTestDB()
    } catch (error) {
      logger.error(error)
    }
  })

  describe('Positive Tests', () => {
    it('should create a new category', async () => {
      try {
        const createdCategory = await addCategory(categoryArray[3])
        expect(createdCategory?.data?.category_name).to.equal(categoryArray[3].category_name)
        expect(createdCategory?.data?.category_description).to.equal(
          categoryArray[3].category_description,
        )
      } catch (error) {
        logger.error(error)
      }
    })

    it('should get all users', async () => {
      try {
        const categories = await getAllCategories()
        expect(categories?.data).to.have.lengthOf(3)
      } catch (error) {
        logger.error(error)
      }
    })

    it('should get a category by ID', async () => {
      try {
        const category = await getCategoryById('CAT002')
        expect(category?.data?.category_name).to.equal('Fruits')
        expect(category?.data?.category_id).to.equal('CAT002')
      } catch (error) {
        logger.error(error)
      }
    })

    it('should update a category', async () => {
      // const updatedUser = { name: 'Updated User', email: 'usera@example.com' }
      // const user = await userService.updateUser(1, updatedUser)
      // expect(user.name).to.equal(updatedUser.name)
      // expect(user.email).to.equal(updatedUser.email)
    })

    it('should delete a category', async () => {
      await removeCategoryById('CAT001')
      const categories = await getAllCategories()
      expect(categories?.data).to.have.lengthOf(2)
      // await userService.deleteUser(1)
      // const users = await userService.getAllUsers()
      // expect(users).to.have.lengthOf(2)
    })
  })
  //after all test drop the db and close the connection
  after(async () => {
    try {
      await closeTestDB()
    } catch (error) {
      console.error(error)
    }
  })

  describe('Negative Tests', () => {
    it('should return an error when getting a category with an invalid ID', async () => {
      // ...
    })

    it('should return an error when updating a category with an invalid ID', async () => {
      // ...
    })

    it('should return an error when deleting a category with an invalid ID', async () => {
      // ...
    })
  })
})
