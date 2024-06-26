import React, { useState } from 'react';
import { useRegisterMutation } from '../redux/api/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [register] = useRegisterMutation();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function attemptAuth(event) {
    event.preventDefault();
    setError(null);

    const authMethod = register;
    const credentials = { name, username, password };

    try {
      await authMethod(credentials).unwrap();
      navigate('/');
    } catch (error) {
      setError(error.data);
    }
  }

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={attemptAuth}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Create a username"
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
            placeholder="Create a password"
          />
        </div>
        <button type="submit" className="register-btn">
          Create Account
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Register;

