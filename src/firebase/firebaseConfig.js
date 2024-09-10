// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS4leh0XG6g2oAtbRUN2jst3HmkKqIwG4",
  authDomain: "parkingnsite-6b561.firebaseapp.com",
  projectId: "parkingnsite-6b561",
  storageBucket: "parkingnsite-6b561.appspot.com",
  messagingSenderId: "503793018817",
  appId: "1:503793018817:web:e37ac6ebef3bd99f963140",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firedb = getFirestore(app);

export { auth, firedb };
