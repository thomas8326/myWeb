// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
