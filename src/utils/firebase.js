// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtbMxbCtYDJJZGmEXQH4dyTNrO3CtzlIY",
  authDomain: "ecom-roc8.firebaseapp.com",
  projectId: "ecom-roc8",
  storageBucket: "ecom-roc8.appspot.com",
  messagingSenderId: "325215983574",
  appId: "1:325215983574:web:564945fc14fb4c9d707677",
  measurementId: "G-4KSCZC5RYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

