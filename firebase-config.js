// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO0HBV1NNkQuIAWr7tfIgus3vU5wT5hhw",
  authDomain: "app200-52cb7.firebaseapp.com",
  databaseURL: "https://app200-52cb7-default-rtdb.firebaseio.com",
  projectId: "app200-52cb7",
  storageBucket: "app200-52cb7.appspot.com",
  messagingSenderId: "43187543032",
  appId: "1:43187543032:web:f1d7600f75a298ca51940d",
  measurementId: "G-6FHHXH0C9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firebase Realtime Database and get a reference to the service
const database = getDatabase(app);

// Export the Firebase services you want to use
export { auth, database };
