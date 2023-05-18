// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX8Zis8I0B_1ZHn9Tcacz-h_-QKZsz_VU",
  authDomain: "journey-gnosis.firebaseapp.com",
  projectId: "journey-gnosis",
  storageBucket: "journey-gnosis.appspot.com",
  messagingSenderId: "207596332951",
  appId: "1:207596332951:web:0847da0ac4106d34c886d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
