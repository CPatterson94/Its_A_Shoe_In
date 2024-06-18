import React from "react";
import axios from "axios";

const Account = () => {
  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout");
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out user:", error.response.data);
    }
  };

  return (
    <div>
      <h2>Account</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Account;
