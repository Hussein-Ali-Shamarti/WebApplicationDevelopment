// Import the database and ref, set, get functions from Firebase
import { database } from "./services/firebase-config";
import { ref, set, get } from "firebase/database";

// Function to write data to the database
function writeToDatabase(userId, data) {
  set(ref(database, "users/" + userId), data);
}

// Function to read data from the database
function readFromDatabase(userId) {
  return get(ref(database, "users/" + userId))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val();
      } else {
        console.log("No data available");
        return null;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
