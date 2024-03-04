// https://www.youtube.com/watch?v=2hR-uWjBAgw

// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app'
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
// don't need if going to deploy a full on application
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFrYENgCzk89XMm3FqaULCvPkcBCAvnQE",
  authDomain: "bprc-resource-directory.firebaseapp.com",
  projectId: "bprc-resource-directory",
  storageBucket: "bprc-resource-directory.appspot.com",
  messagingSenderId: "1021943640664",
  appId: "1:1021943640664:web:3c4b23fad1a3d2a838d02d",
  measurementId: "G-KPYY4NRYNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const directory = getFirestore(app);

// https://www.youtube.com/watch?v=2yNyiW_41H8 
// Getting all docs from Firestore
const colRef = collection(directory, 'Resources');
getDocs(colRef)
  .then((snapshot) => {
      console.log(snapshot.docs);
      let resources = []; 
      snapshot.docs.forEach((doc) => {
        resources.push({...doc.data(), id: doc.id })
      })
      console.log(resources); 
  })
  .catch(err => {
    console.log(err.message);
  })