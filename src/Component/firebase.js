// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxxxxxx-xxxxxxxxxxxxxx", // Replace with your API key
  authDomain: "rs-construction.firebaseapp.com",
  projectId: "rs-construction",
  storageBucket: "rs-construction.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
