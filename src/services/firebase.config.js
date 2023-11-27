// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW3knEHkotABpDZo2cYnVlYcjtJJW7Nk8",
  authDomain: "e-busine.firebaseapp.com",
  projectId: "e-busine",
  storageBucket: "e-busine.appspot.com",
  messagingSenderId: "518831980935",
  appId: "1:518831980935:web:c286ff1050718cea63d322",
  measurementId: "G-JMSZP73CM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider};
export default db;
