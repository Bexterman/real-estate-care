// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-BzKvXWx18ybcv2ORNAwo3edxxdwOmEc",
  authDomain: "rec-database-11bcd.firebaseapp.com",
  projectId: "rec-database-11bcd",
  storageBucket: "rec-database-11bcd.appspot.com",
  messagingSenderId: "409826557771",
  appId: "1:409826557771:web:ea35a7cd6354668fec32ce"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//  Initialize firestore
const db = getFirestore();
export default db;