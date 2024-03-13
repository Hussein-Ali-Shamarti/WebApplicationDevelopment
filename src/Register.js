import React, { useState } from "react";
import { auth, database } from "../services/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database"; // Import ref and set from Firebase database

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");

  const writeUserData = (userId, email, firstName, lastName, country) => {
    set(ref(database, "users/" + userId), {
      email: email,
      firstName: firstName,
      lastName: lastName,
      country: country
    });
  };

  const registerUser = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Registered user:", userCredential.user);

      // Save additional user data in the Firebase Realtime Database
      writeUserData(
        userCredential.user.uid,
        email,
        firstName,
        lastName,
        country
      );

      // Redirect or handle the new user post-registration
      // For example, redirect to a login page or a dashboard
    } catch (error) {
      console.error("Error registering new user:", error.message);
      // Handle errors here, such as showing an error message to the user
    }
  };

  return (
    <form onSubmit={registerUser}>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        required
      >
        <option value="">Select a Country</option>
        <option value="NY"> Norway</option>
        <option value="GY">Germany</option>
        <option value="SE">Sweden</option>
        // Add other countries as needed
      </select>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
