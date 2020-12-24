import firebase from 'firebase'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyAponwVUgKwHUYqeIijfYaE6iV0BE-dCeQ",
    authDomain: "pemrogramanmobile-31feb.firebaseapp.com",
    projectId: "pemrogramanmobile-31feb",
    storageBucket: "pemrogramanmobile-31feb.appspot.com",
    messagingSenderId: "720703207332",
    appId: "1:720703207332:web:0ee80ba43ea86da7db3331",
    measurementId: "G-49F39TKTCH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()

  export default {
      firebase,db
  }