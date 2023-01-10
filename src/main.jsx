import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMy8W78rpBDnhnYYXmjXisNfEnaTWzdsc",
  authDomain: "blog-secretinha.firebaseapp.com",
  projectId: "blog-secretinha",
  storageBucket: "blog-secretinha.appspot.com",
  messagingSenderId: "1051076112091",
  appId: "1:1051076112091:web:51e778088866a161e6a6fe",
  measurementId: "G-8S6D6SGZDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
