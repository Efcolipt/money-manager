// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBj2W14VDLgZ807oX7ZvDS5iRyv9Yz5Exk",
    authDomain: "money-manager-674de.firebaseapp.com",
    projectId: "money-manager-674de",
    storageBucket: "money-manager-674de.appspot.com",
    messagingSenderId: "328986867891",
    appId: "1:328986867891:web:71e7cec46dba4897e118c6",
    measurementId: "G-ST46VEXKE3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, projectStorage, timestamp };
