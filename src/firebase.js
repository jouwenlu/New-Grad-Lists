import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUYgmX3rXvRDnsUl0pj8-T5wLLf_3Yczo",
  authDomain: "nowhyring.firebaseapp.com",
  projectId: "nowhyring",
  storageBucket: "nowhyring.appspot.com",
  messagingSenderId: "934466843109",
  appId: "1:934466843109:web:18a09a623463a9e5f7bf0c",
  measurementId: "G-C9VHBP5WY0",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
