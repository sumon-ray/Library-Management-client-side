// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7Gp4nVTDtsH_70eZR8_GvQYf0ray1NJE",
  authDomain: "library-management-1d9c1.firebaseapp.com",
  projectId: "library-management-1d9c1",
  storageBucket: "library-management-1d9c1.appspot.com",
  messagingSenderId: "953428835289",
  appId: "1:953428835289:web:582ca433d1cad80b29f7c8"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth




