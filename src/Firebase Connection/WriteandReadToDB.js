import { writeDataToFirebase, readDataFromFirebase } from "../database"; // Assuming database.js is where you define Firebase functions

// Make sure to load the Firebase SDK before this script runs

// Function to write data to Firebase
function writeDataToFirebase() {
  // Assuming firebase has been initialized elsewhere
  firebase
    .database()
    .ref("firebase-config.js")
    .set({
      key: "value",
      anotherKey: "anotherValue"
    })
    .then(() => {
      console.log("Data written successfully!");
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

// Function to read data from Firebase
function readDataFromFirebase() {
  // Assuming firebase has been initialized elsewhere
  firebase
    .database()
    .ref("firebase-config.js")
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}
