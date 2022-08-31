
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

/*  I am change the code because  env file is not push git so when 
we pull the code then project give us firebase auth error  */

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    // measurementId: process.env.REACT_APP_measurementId,
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
const auth = getAuth(app);

export default auth;
