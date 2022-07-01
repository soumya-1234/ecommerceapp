// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdYOnaxCjJU1KFvIaJ2g44pO4w5Uo6i_k",
  authDomain: "shop-cb47f.firebaseapp.com",
  projectId: "shop-cb47f",
  storageBucket: "shop-cb47f.appspot.com",
  messagingSenderId: "654517290355",
  appId: "1:654517290355:web:518a78745729c63f93b106",
  measurementId: "G-556M7ZMKW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;