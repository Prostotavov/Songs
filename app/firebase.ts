// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth' 
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATyiFMzcC3P8rwjVE6QfpmvS0ANqS_U5A",
  authDomain: "songs-d106f.firebaseapp.com",
  projectId: "songs-d106f",
  storageBucket: "songs-d106f.appspot.com",
  messagingSenderId: "1014284496194",
  appId: "1:1014284496194:web:c09e0fb6015a2587b12cdb",
  measurementId: "G-HHPEKR1TK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()

export const register = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password)

export const login = (email: string, password: string) => 
    signInWithEmailAndPassword(auth, email, password)

export const logout = () => signOut(auth)

export const db = getFirestore()