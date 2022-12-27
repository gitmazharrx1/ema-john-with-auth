// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY4-N-9CZZ3817Gt0p_S98eSJOoD-TzSI",
  authDomain: "ema-john-simple-a562c.firebaseapp.com",
  projectId: "ema-john-simple-a562c",
  storageBucket: "ema-john-simple-a562c.appspot.com",
  messagingSenderId: "1091849210091",
  appId: "1:1091849210091:web:b2b0588355e2280ad5d6ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
