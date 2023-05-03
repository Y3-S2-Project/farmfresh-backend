// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgpwdPjLHAurkMkfRLQZkqbctwuujVw9Y",
  authDomain: "helpify-f1846.firebaseapp.com",
  projectId: "helpify-f1846",
  storageBucket: "helpify-f1846.appspot.com",
  messagingSenderId: "638315807055",
  appId: "1:638315807055:web:67e69979d047dd17fac53a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const signIn = async (email, password) => {
  try {
    const auth = getAuth();
    return (await signInWithEmailAndPassword(auth, email, password)).user;
  } catch (error) {
    console.error(error.code, error.message);
  }
};

export const createUser = async (email, password) => {
  try {
    const auth = getAuth();
    return (await createUserWithEmailAndPassword(auth, email, password)).user;
  } catch (error) {
    console.error(error.code, error.message);
  }
};

export const signOutUser = async () => {
  try {
    const auth = getAuth();
    return await signOut(auth);
  } catch (error) {
    console.error(error.code, error.message);
  }
};
