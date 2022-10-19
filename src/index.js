import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App  from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ6z8fxl1oNwMXPExXS11Zmw5TV9WDCSs",
  authDomain: "planeta3d-8794b.firebaseapp.com",
  projectId: "planeta3d-8794b",
  storageBucket: "planeta3d-8794b.appspot.com",
  messagingSenderId: "358871832700",
  appId: "1:358871832700:web:e6a224aebde47df23b51f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
