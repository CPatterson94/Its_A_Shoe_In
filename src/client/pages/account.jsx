import React from "react";
import { useLogoutMutation } from "../redux/api/auth";

function Account() {
  const [logout, { isLoading, isError }] = useLogoutMutation();


  return (
    <div>
      <h2>Account</h2>
      <button onClick={logout} disabled={isLoading}>
        {isLoading ? "Logging out..." : "Logout"}
      </button>
      {isError && <p style={{ color: "red" }}>Error logging out</p>}
    </div>
  );
}

export default Account;

