// Import the functions you need from the SDKs you need
import firebase from "firebase";



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB1VUPLwy6_LYPlY9qYLUXO-a9aqED8W_c",
    authDomain: "clone-331b2.firebaseapp.com",
    projectId: "clone-331b2",
    storageBucket: "clone-331b2.appspot.com",
    messagingSenderId: "455329268963",
    appId: "1:455329268963:web:666c5c791c32ee599db1d6",
    measurementId: "G-2W5ZLJNPGV"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };