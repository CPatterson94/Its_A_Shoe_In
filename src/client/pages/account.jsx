import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "../redux/api/auth";

function Account() {
  const [logout, { isLoading, isError }] = useLogoutMutation();
  const [logoutSuccess, setLogoutSuccess] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      setLogoutSuccess(true);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (logoutSuccess) {
    return <Link to="/logout" />;
  }

  return (
    <div>
      <h2>Account</h2>
      <button onClick={handleLogout} disabled={isLoading}>
        {isLoading ? "Logging out..." : "Logout"}
      </button>
      {isError && <p style={{ color: "red" }}>Error logging out</p>}
    </div>
  );
}

export default Account;


