// Import the database service
import { database } from './firebase-config';
import { ref, set, get } from 'firebase/database';

// Function to write data to Firebase
export function writeDataToFirebase(userId, data) {
  set(ref(database, 'users/' + userId), data)
    .then(() => {
      console.log("Data written successfully!");
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

// Function to read data from Firebase
export function readDataFromFirebase(userId) {
  get(ref(database, 'users/' + userId)).then((snapshot) => {
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
