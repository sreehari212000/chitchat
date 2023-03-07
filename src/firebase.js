import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBss-fNHIe0FvC0Oq5UDcs6X-XK6IIWO9I",
  authDomain: "message-c77e0.firebaseapp.com",
  projectId: "message-c77e0",
  storageBucket: "message-c77e0.appspot.com",
  messagingSenderId: "591878968984",
  appId: "1:591878968984:web:4f13597601f665ec1da2ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}