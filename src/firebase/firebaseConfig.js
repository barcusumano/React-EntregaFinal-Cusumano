import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGW-YN10Hw2CJTHaoxseHMKEiE7M_D3WU",
  authDomain: "funkocoder.firebaseapp.com",
  projectId: "funkocoder",
  storageBucket: "funkocoder.appspot.com",
  messagingSenderId: "25150960716",
  appId: "1:25150960716:web:d5ebcee398759d2e2570e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 