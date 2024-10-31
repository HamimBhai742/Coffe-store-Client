// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP7t-jPk7OG9mr5dVXD1oRc7Dpsa5tri4",
  authDomain: "coffe-store-cee3a.firebaseapp.com",
  projectId: "coffe-store-cee3a",
  storageBucket: "coffe-store-cee3a.appspot.com",
  messagingSenderId: "1074978839870",
  appId: "1:1074978839870:web:6f37e7ea388f860001a06f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app