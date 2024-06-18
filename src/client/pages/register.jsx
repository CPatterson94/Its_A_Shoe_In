import React, { useState } from 'react';
import { useRegisterMutation } from '../redux/api/auth';

const Register = () => {
const [register] = useRegisterMutation();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function attemptAuth(event) {
    event.preventDefault();
    setError(null);

    const authMethod = register;
    const credentials = {name, username, password};

    try {
        await authMethod(credentials).unwrap();
        navigate("/")
    } catch (error) {
        setError(error.data);
        }
        }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={attemptAuth}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            placeholder="Write your name"
          />
        </div>
        <div>
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
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            placeholder="*********"
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Register;
