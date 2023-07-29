import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyDkvN7KoYqxmIWnXG4Yol0uAVn9Edbh034",
    authDomain: "mathvisualiser.firebaseapp.com",
    projectId: "mathvisualiser",
    storageBucket: "mathvisualiser.appspot.com",
    messagingSenderId: "635686841755",
    appId: "1:635686841755:web:502afa6ce1f8488d54053e",
    measurementId: "G-FPC61SBWTG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;