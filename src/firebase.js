// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4jwQxr3kMe-DN8SrDnHj6gRwIiqh2Ing",
  authDomain: "todo-app-react-e2fbe.firebaseapp.com",
  projectId: "todo-app-react-e2fbe",
  storageBucket: "todo-app-react-e2fbe.appspot.com",
  messagingSenderId: "389923406426",
  appId: "1:389923406426:web:1df793ad0665d325294e63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);




