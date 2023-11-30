import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import './SignUpPage.css'; // Assuming you have corresponding CSS
const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useUser();
  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signUp(username, email, password);
      history.push('/login'); // Redirect to login page on successful sign-up
    } catch (error) {
      console.error('Sign-up failed:', error);
      // Handle sign-up failure (e.g., show an error message)
    }
  };
  return (
    <div className="sign-up-page">
      <h1>Sign Up</h1>
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUpPage;
