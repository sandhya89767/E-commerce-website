// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBCf90R1r8U_OXjvaplX7FueaoYgGSuqwI",
  authDomain: "clone-bdc10.firebaseapp.com",
  projectId: "clone-bdc10",
  storageBucket: "clone-bdc10.appspot.com",
  messagingSenderId: "955705617625",
  appId: "1:955705617625:web:47c5abdf1f968b06f662c8",
  measurementId: "G-FM77FNGKN7",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
