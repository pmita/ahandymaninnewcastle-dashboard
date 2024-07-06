import firebase from "firebase/app";
// FIREBASE SERVICES
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGIN_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// FIRESTORE
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const fromMillis = (millis: number) => firebase.firestore.Timestamp.fromMillis(millis);
const toMillis = (timestamp: firebase.firestore.Timestamp) => timestamp.toMillis();
const timeStamp = firebase.firestore.Timestamp;

// AUTHENTICATION
const auth = firebase.auth();

export { firebase, firestore, timestamp, fromMillis, toMillis, auth, timeStamp };