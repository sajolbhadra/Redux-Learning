// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs--Zt7KY8DNtNEhOwoUexKsEbPCJMmOE",
  authDomain: "reduxlearning13.firebaseapp.com",
  projectId: "reduxlearning13",
  storageBucket: "reduxlearning13.appspot.com",
  messagingSenderId: "1033402208477",
  appId: "1:1033402208477:web:344301dc9629dab5be0b34",
  measurementId: "G-RW579DG7GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);