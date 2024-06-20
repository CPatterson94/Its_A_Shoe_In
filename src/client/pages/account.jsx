import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../redux/api/auth";

function Account({ setToken }) {
  const [logout, { isLoading, isError }] = useLogoutMutation();
  const [logoutSuccess, setLogoutSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      window.sessionStorage.removeItem("token");
      setToken(null);
      setLogoutSuccess(true);
      navigate("/logout")
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="logout-container">
      <h2>Account</h2>
      <button onClick={handleLogout} disabled={isLoading} className="logout-btn">
        {isLoading ? "Logging out..." : "Logout"}
      </button>
      {isError && <p style={{ color: "red" }}>Error logging out</p>}
    </div>
  );
}

export default Account;
