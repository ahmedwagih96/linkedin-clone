// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore,  } from "firebase/firestore";
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCv0tAu2OPLwxBnquciwvgatTOUFpsKX8s",
  authDomain: "linkedin-clone-ed904.firebaseapp.com",
  projectId: "linkedin-clone-ed904",
  storageBucket: "linkedin-clone-ed904.appspot.com",
  messagingSenderId: "959623582146",
  appId: "1:959623582146:web:09462c16092952a7ce065b",
  measurementId: "G-H9WVVGWX85",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
