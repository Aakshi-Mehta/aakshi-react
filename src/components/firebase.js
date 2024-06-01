// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //help to reister the user
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI5rAvTH3bbPq3ao6eBRFFz6U9cQAN0Ao",
  authDomain: "react-efec7.firebaseapp.com",
  projectId: "react-efec7",
  storageBucket: "react-efec7.appspot.com",
  messagingSenderId: "657715903067",
  appId: "1:657715903067:web:7b67aad16e7b3436d2dd7e",
  measurementId: "G-KVLCX0FR15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
