// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHuszbpJC6pBKlBn_NPIZodEpbgl29kpQ",
  authDomain: "fir-demo-project-34a5e.firebaseapp.com",
  projectId: "fir-demo-project-34a5e",
  storageBucket: "fir-demo-project-34a5e.appspot.com",
  messagingSenderId: "423944745989",
  appId: "1:423944745989:web:b841f90fda4f7bab2bd86c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;