import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import './LoginPage.css'; // Assuming you have corresponding CSS
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUser();
  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(username, password);
      history.push('/'); // Redirect to homepage on successful login
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure (e.g., show an error message)
    }
  };
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginPage;












