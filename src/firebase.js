import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAIE8R1Qw0Y1nVmeQNZVfwzU9_RT88Gkf8",
    authDomain: "fir-9fb2b.firebaseapp.com",
    projectId: "fir-9fb2b",
    storageBucket: "fir-9fb2b.appspot.com",
    messagingSenderId: "385838623346",
    appId: "1:385838623346:web:18a5f52eb36c3406b230eb",
    measurementId: "G-P3JE09TSFW"
  };

const firebaseApp = firebase.initalizeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };