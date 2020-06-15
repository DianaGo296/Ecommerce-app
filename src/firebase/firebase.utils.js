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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;