import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';



const firebaseConfig = {
  apiKey: "AIzaSyDtX3JKy0rozFrZl_BPJ4O3ALzKtZweQeE",
  authDomain: "toktof---jornada.firebaseapp.com",
  projectId: "toktof---jornada",
  storageBucket: "toktof---jornada.appspot.com",
  messagingSenderId: "531239906465",
  appId: "1:531239906465:web:19ecc1126e3813cefd94e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db