// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3K-bb0k3lrwayopLUdt4ApnlcOQFICd0",
    authDomain: "vita-fem.firebaseapp.com",
    projectId: "vita-fem",
    storageBucket: "vita-fem.firebasestorage.app",
    messagingSenderId: "260746875702",
    appId: "1:260746875702:web:6244004fb9041e0b261997",
    measurementId: "G-H3HM1130NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);