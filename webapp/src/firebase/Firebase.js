import firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
});

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    await auth.signInWithPopup(googleProvider);
  } catch {
    return false;
  }
  return true;
};

export const logOut = async () => {
  try {
    await auth.signOut();
  } catch {
    return false;
  }
  return true;
};
