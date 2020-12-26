// Base import (required)
import firebase from 'firebase/app';

// Database (attached to "firebase" import)
import 'firebase/firestore';

// Authentication (attached to "firebase" import)
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBcUZrn-h-t8Zq4jNu51J2ZTOu2t7hyhjQ',
  authDomain: 'crown-clothing-cba8b.firebaseapp.com',
  projectId: 'crown-clothing-cba8b',
  storageBucket: 'crown-clothing-cba8b.appspot.com',
  messagingSenderId: '506584560729',
  appId: '1:506584560729:web:6289fe01efa18f37ed2d48',
};

// Add user to database from Google Auth login
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // Create User in database
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.error('Error creating user', err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

// Export Utils
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
