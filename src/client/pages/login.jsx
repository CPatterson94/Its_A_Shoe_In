import React, { useState } from "react";
import { useLoginMutation } from "../redux/api/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [login] = useLoginMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function attemptAuth(e) {
    e.preventDefault();
    setError(null);

    const authMethod = login;
    const credentials = { username, password };

    try {
      const results = await authMethod(credentials).unwrap();
      window.sessionStorage.setItem("token", results.token);
      setToken(results.token);
      navigate("/");
    } catch (error) {
      setError(error.data);
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={attemptAuth}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="register-btn">
          Login</button>
      </form>
      {error && <p className={"error"}>{error}</p>}
    </div>
  );
};
export default Login;
