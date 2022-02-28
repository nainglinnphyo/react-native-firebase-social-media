
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA_AlueRi_XKVkZ_OUxKZ3OFZ6Vtg6t1gU",
  authDomain: "social-media-f2da9.firebaseapp.com",
  projectId: "social-media-f2da9",
  storageBucket: "social-media-f2da9.appspot.com",
  messagingSenderId: "410731201474",
  appId: "1:410731201474:web:f4f40aeb5614052d378c5b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()