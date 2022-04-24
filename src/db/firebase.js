// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8ku02TI1O1IfiLvcscauTLXY_jt1rnPc",
  authDomain: "e-commerce-2022-240de.firebaseapp.com",
  projectId: "e-commerce-2022-240de",
  storageBucket: "e-commerce-2022-240de.appspot.com",
  messagingSenderId: "913128420472",
  appId: "1:913128420472:web:b0ce39921d32d73182698d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 