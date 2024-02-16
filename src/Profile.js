import React from "react";
import { auth } from "../services/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";

function Profile() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Profile</h1>
      {user && (
        <div>
          <p>Email: {user.email}</p>
          {/* Display other user info or actions here */}
        </div>
      )}
    </div>
  );
}

export default Profile;
