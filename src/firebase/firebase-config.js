// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVPmhkyOxkH9U9tcq_jqcA-t_ifTy2Oyk",
  authDomain: "food-recipe-auth-a2f90.firebaseapp.com",
  projectId: "food-recipe-auth-a2f90",
  storageBucket: "food-recipe-auth-a2f90.appspot.com",
  messagingSenderId: "334830197147",
  appId: "1:334830197147:web:616d6326c7b18bb089e93e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;