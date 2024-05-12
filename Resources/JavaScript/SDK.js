// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXn8yxoWTBH7WQYz0-3_GoMINEiaExwy4",
  authDomain: "taste-haven7.firebaseapp.com",
  projectId: "taste-haven7",
  storageBucket: "taste-haven7.appspot.com",
  messagingSenderId: "249353155936",
  appId: "1:249353155936:web:158a1fd72869fa25d39a05",
  measurementId: "G-6GWEEVGC2J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
