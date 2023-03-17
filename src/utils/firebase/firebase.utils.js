import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
 } from "firebase/auth";
 import {
    getFirestore,
    doc,
    getDoc,
    setDoc
 } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtOJRHmuDlOuuI-s0keHK4NJyg7yy05Hw",
  authDomain: "crwn-638ee.firebaseapp.com",
  projectId: "crwn-638ee",
  storageBucket: "crwn-638ee.appspot.com",
  messagingSenderId: "552250402287",
  appId: "1:552250402287:web:b5f88e2dbbd4b83d21021a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export db = getFireStore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', )
}