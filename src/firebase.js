import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCIzCjVO4FAtvW_GlB32gafYQRfEeNzEMc",
  authDomain: "tinder-clone-8f9ca.firebaseapp.com",
  projectId: "tinder-clone-8f9ca",
  storageBucket: "tinder-clone-8f9ca.appspot.com",
  messagingSenderId: "727742303005",
  appId: "1:727742303005:web:e62e8b8dd12b4120bd2ff4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
