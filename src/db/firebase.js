import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  
  apiKey: "AIzaSyA8ku02TI1O1IfiLvcscauTLXY_jt1rnPc",
  authDomain: "e-commerce-2022-240de.firebaseapp.com",
  projectId: "e-commerce-2022-240de",
  storageBucket: "e-commerce-2022-240de.appspot.com",
  messagingSenderId: "913128420472",
  appId: "1:913128420472:web:b0ce39921d32d73182698d"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export {db,app}