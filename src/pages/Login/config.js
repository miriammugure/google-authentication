// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBFb18sXtLk8xad_aSxuncCLeLZM-VLTow",
  authDomain: "signin-auth-5df15.firebaseapp.com",
  projectId: "signin-auth-5df15",
  storageBucket: "signin-auth-5df15.appspot.com",
  messagingSenderId: "260707611047",
  appId: "1:260707611047:web:1fb8565df81cf6b82d4682",
  measurementId: "G-N3MSJ75SEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth,provider};