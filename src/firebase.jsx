// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQdQ16ZbWdzWnZ3wRcNsND6Wkx6IHTKHQ",
  authDomain: "custard-1ba57.firebaseapp.com",
  projectId: "custard-1ba57",
  storageBucket: "custard-1ba57.appspot.com",
  messagingSenderId: "1078585441640",
  appId: "1:1078585441640:web:8992ecda0d0512e3072add",
  measurementId: "G-JG6SC044VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {app,auth};