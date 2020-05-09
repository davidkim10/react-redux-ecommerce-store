// Base import
import firebase from "firebase/app";

// Database
import "firebase/firestore";

// Authentication
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC_fJMF5PlwE3xLk_Axzd2GAwp8nbvmu8s",
  authDomain: "crwn-db-55d04.firebaseapp.com",
  databaseURL: "https://crwn-db-55d04.firebaseio.com",
  projectId: "crwn-db-55d04",
  storageBucket: "crwn-db-55d04.appspot.com",
  messagingSenderId: "323544999343",
  appId: "1:323544999343:web:90044f1d3d9f2d740cbb5a",
};

firebase.initializeApp(config);

// Export Utils
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
