import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD45qWzYPSfSz3tv-3DGS7arE6eWcOfAlQ",
    authDomain: "disney-clone-a732d.firebaseapp.com",
    projectId: "disney-clone-a732d",
    storageBucket: "disney-clone-a732d.appspot.com",
    messagingSenderId: "630191902641",
    appId: "1:630191902641:web:5c2ff9427de46b1a133790",
    measurementId: "G-1WQ3XPQ6YF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // initialize firebase app
const db = firebaseApp.firestore(); // connec the database
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); // for adding google social login
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
