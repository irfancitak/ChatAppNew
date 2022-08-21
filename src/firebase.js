// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc7ekFezovCXtDB4BG8uGx0tNiIdxTRLQ",
  authDomain: "chat-app-yt-c7821.firebaseapp.com",
  projectId: "chat-app-yt-c7821",
  storageBucket: "chat-app-yt-c7821.appspot.com",
  messagingSenderId: "184949396617",
  appId: "1:184949396617:web:bc609d2940a91394c82258"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)