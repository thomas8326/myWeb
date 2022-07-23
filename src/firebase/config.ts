import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC5iy3Yy-N-FkQsz0CGpX7ObEL7rLfEbuk",
    authDomain: "developer-thoams.firebaseapp.com",
    databaseURL: "https://developer-thoams-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "developer-thoams",
    storageBucket: "developer-thoams.appspot.com",
    messagingSenderId: "298894432266",
    appId: "1:298894432266:web:0197139a28c3ad375167f3",
    measurementId: "G-RQB3895PK2"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const realtimeDB = getDatabase(firebase);
