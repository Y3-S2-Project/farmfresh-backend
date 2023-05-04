// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAWMG0bJgwgjL1Fhl-mDkwKac_WtZXUHRA',
  authDomain: 'farmfresh-8a72d.firebaseapp.com',
  projectId: 'farmfresh-8a72d',
  storageBucket: 'farmfresh-8a72d.appspot.com',
  messagingSenderId: '175028000454',
  appId: '1:175028000454:web:de2fccd71e0abebe68a9c7',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)

export const signIn = async (email, password) => {
  try {
    const auth = getAuth()
    return (await signInWithEmailAndPassword(auth, email, password)).user
  } catch (error) {
    console.error(error.code, error.message)
  }
}

export const createUser = async (email, password) => {
  try {
    const auth = getAuth()
    return (await createUserWithEmailAndPassword(auth, email, password)).user
  } catch (error) {
    console.error(error.code, error.message)
  }
}

export const signOutUser = async (auth) => {
  try {
    return await signOut(auth)
  } catch (error) {
    console.error(error.code, error.message)
  }
}
