// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as Firestore from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeyYMOzu7ltEz1kxcMDwWOfRNjNUqzJsQ",
  authDomain: "bloom-18137.firebaseapp.com",
  projectId: "bloom-18137",
  storageBucket: "bloom-18137.appspot.com",
  messagingSenderId: "187488707401",
  appId: "1:187488707401:web:3e7336483861b1afbb3098",
  measurementId: "G-8FX4KSNBDM"
};
/** @type {Firestore.FirestoreSettings} */
const mySettings = {
    cacheSizeBytes: 100
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
Firestore.initializeFirestore(app, mySettings)