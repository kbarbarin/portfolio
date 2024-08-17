// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw4VfEYo2TCjlCpvHyUrd5SAixSUzA6yo",
  authDomain: "portfolio-1a9ab.firebaseapp.com",
  projectId: "portfolio-1a9ab",
  storageBucket: "portfolio-1a9ab.appspot.com",
  messagingSenderId: "973610730770",
  appId: "1:973610730770:web:37e85ed86fbfbeaca6dfcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.firestore();

export {db};