// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDIgRrIlzmG41BdHOECC59xumovY7xcVkg",
  authDomain: "chat-web-app-542a0.firebaseapp.com",
  projectId: "chat-web-app-542a0",
  storageBucket: "chat-web-app-542a0.appspot.com",
  messagingSenderId: "421757433216",
  appId: "1:421757433216:web:b9f28feb79cc28137dfd65",
  measurementId: "G-EC64HQH5YW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

//detect state change
onAuthStateChanged(auth, user => {
  if (user !== null) {
    console.log('logged in');
  } else {
    console.log('logged out');
  }
});