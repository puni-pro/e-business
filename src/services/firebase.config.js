// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk1uKui1IpZI9GHyM_YzSRv5z3WhWMaak",
  authDomain: "e-business-6330a.firebaseapp.com",
  projectId: "e-business-6330a",
  storageBucket: "e-business-6330a.appspot.com",
  messagingSenderId: "344832694445",
  appId: "1:344832694445:web:6d244ad34bc5914b2c8e24",
  measurementId: "G-D07WJCQP0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
