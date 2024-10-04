// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-52f7e.firebaseapp.com",
  projectId: "mern-blog-52f7e",
  storageBucket: "mern-blog-52f7e.appspot.com",
  messagingSenderId: "28210231734",
  appId: "1:28210231734:web:cb549c827894fdcb626917"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


