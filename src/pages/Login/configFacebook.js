import {getAuth, FacebookAuthProvider } from "firebase/auth";
const authf = getAuth();
const providerf = new FacebookAuthProvider();

export {authf,providerf};