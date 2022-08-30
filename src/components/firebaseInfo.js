import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC8ChrSEy1sqcE2dHkGSl2upw9pZP9dC7E",
  authDomain: "mylinkedin-5ca0a.firebaseapp.com",
  projectId: "mylinkedin-5ca0a",
  storageBucket: "mylinkedin-5ca0a.appspot.com",
  messagingSenderId: "1016220981480",
  appId: "1:1016220981480:web:b88b7d39980ff59601d15d",
  measurementId: "G-56ZV9KTJZP"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };