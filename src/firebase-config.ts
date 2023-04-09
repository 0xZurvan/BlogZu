// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzn0N-Izdyg2JhiRTfHyGV3Bsgb_15VM4",
  authDomain: "blogzu.firebaseapp.com",
  projectId: "blogzu",
  storageBucket: "blogzu.appspot.com",
  messagingSenderId: "1033594225448",
  appId: "1:1033594225448:web:74016c0d3bb8232345861d",
  measurementId: "G-PWNB195MMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);