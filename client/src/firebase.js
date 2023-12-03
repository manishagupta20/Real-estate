// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-cba92.firebaseapp.com",
  projectId: "real-estate-cba92",
  storageBucket: "real-estate-cba92.appspot.com",
  messagingSenderId: "1073689614948",
  appId: "1:1073689614948:web:079e6b01366927c0051d71"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);