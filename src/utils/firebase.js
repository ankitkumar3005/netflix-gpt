// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB_nBBfpxpgfLxx2uGx9GJt_OHb31Ri94",
  authDomain: "netflixgpt-6c396.firebaseapp.com",
  projectId: "netflixgpt-6c396",
  storageBucket: "netflixgpt-6c396.appspot.com",
  messagingSenderId: "850790548520",
  appId: "1:850790548520:web:513828f1c1e6338e12611d",
  measurementId: "G-QHVRXN0GNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);