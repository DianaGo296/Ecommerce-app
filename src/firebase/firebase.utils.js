import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBLxFq0XQ4LsVfsmFKPTVMvT0lF5nU5UhM",
    authDomain: "react-app-dd114.firebaseapp.com",
    databaseURL: "https://react-app-dd114.firebaseio.com",
    projectId: "react-app-dd114",
    storageBucket: "react-app-dd114.appspot.com",
    messagingSenderId: "735584749371",
    appId: "1:735584749371:web:1a1a6405f9ade3ca49191e",
    measurementId: "G-J8KFLVXNL7"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('something went wrong', error.massege);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;