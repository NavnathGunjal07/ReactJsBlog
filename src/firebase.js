import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2CM06CpLnKFbFtn_hM_T2duLhZo53h-A",
  authDomain: "blog-3afa4.firebaseapp.com",
  projectId: "blog-3afa4",
  storageBucket: "blog-3afa4.appspot.com",
  messagingSenderId: "51346567524",
  appId: "1:51346567524:web:686ee1c538305a4de18a71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = firebase.firestore();