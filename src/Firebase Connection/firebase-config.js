// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the database service
import { database } from "./firebase-config";
import { ref, set, get } from "firebase/database";

// Function to write data to Firebase
export function writeDataToFirebase(userId, data) {
  set(ref(database, "users/" + userId), data)
    .then(() => {
      console.log("Data written successfully!");
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

// Function to read data from Firebase
export function readDataFromFirebase(userId) {
  get(ref(database, "users/" + userId))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available for user ID:", userId);
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}
