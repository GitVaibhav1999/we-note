import firebase from "firebase/app";
import "firebase/auth";
const app = firebase.initializeApp({
  apiKey: "AIzaSyCaE5Lk8QVYKuGtk0L55oeAV5UtY6oWr7k",
  authDomain: "we-note-b0f75.firebaseapp.com",
  projectId: "we-note-b0f75",
  storageBucket: "we-note-b0f75.appspot.com",
  messagingSenderId: "695090198663",
  appId: "1:695090198663:web:3823e03abf17c67258e022",
  measurementId: "G-9Z2THTQD6N",
});

export const auth = app.auth();

export default app;
