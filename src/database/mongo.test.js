require('dotenv').config()

import mongoose from 'mongoose'
const connectTestDB = async () => {
  mongoose.connect(process.env.MONGO_TEST_URI, { connectTimeoutMS: 3000 }).catch((error) => {
    console.error(`Error connecting to  test MongoDB: ${error}`)
  })

  mongoose.connection.on('connected', () => {
    console.info('Connected to test database successfully')
  })

  mongoose.connection.on('error', (error) => {
    console.error(`Error connecting to  test database: ${error}`)
  })
}

const closeTestDB = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
}

const clearTestDB = async () => {
  const collections = mongoose.connection.collections

  for (const key in collections) {
    const collection = collections[key]
    await collection.deleteMany()
  }
}

module.exports = {
  connectTestDB,
  closeTestDB,
  clearTestDB,
}
