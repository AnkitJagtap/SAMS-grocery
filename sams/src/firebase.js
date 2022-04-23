import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT6FbNlzZhmq1Rg_cO3HxtlO3D-26azXE",
  authDomain: "sams-grocery-3aa2f.firebaseapp.com",
  projectId: "sams-grocery-3aa2f",
  storageBucket: "sams-grocery-3aa2f.appspot.com",
  messagingSenderId: "725312851637",
  appId: "1:725312851637:web:398044d729addc1eee38fc",
  measurementId: "G-R788VXHJ77",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); //initial the DB -- firestore is realtime db in firebase

const auth = firebase.auth(); // for db authentication handling

export { db, auth };
