// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-29641.firebaseapp.com",
  projectId: "real-estate-29641",
  storageBucket: "real-estate-29641.appspot.com",
  messagingSenderId: "101867236702",
  appId: "1:101867236702:web:c2740b2a02e1df2e8bf3cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);