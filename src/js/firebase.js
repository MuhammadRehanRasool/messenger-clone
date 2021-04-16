import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBNQtp0XMLO4KN_CVdYbpExM96hnfuJd0U",
  authDomain: "messenger-clone-40620.firebaseapp.com",
  databaseURL: "https://messenger-clone-40620-default-rtdb.firebaseio.com",
  projectId: "messenger-clone-40620",
  storageBucket: "messenger-clone-40620.appspot.com",
  messagingSenderId: "500334699685",
  appId: "1:500334699685:web:7af1923d99658b56af594c",
  measurementId: "G-G0E173E787"
});

const db = firebaseApp.firestore();

export default db;