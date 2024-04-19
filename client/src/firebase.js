// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-77ef4.firebaseapp.com",
  projectId: "mern-blog-77ef4",
  storageBucket: "mern-blog-77ef4.appspot.com",
  messagingSenderId: "318148839362",
  appId: "1:318148839362:web:45e7dea19cb211796db85b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
