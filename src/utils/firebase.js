// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNcjmenIB8JZZ_KbtRUgqnsAcsX_7Mr-g",
  authDomain: "gptflix-8a107.firebaseapp.com",
  projectId: "gptflix-8a107",
  storageBucket: "gptflix-8a107.appspot.com",
  messagingSenderId: "886192339794",
  appId: "1:886192339794:web:8e73f8cd3d436922e7588b",
  measurementId: "G-PH9ZKLDNX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);