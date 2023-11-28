import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SignUp.css';

const SignUp = ({ onSignUp }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSignUp(username, email, password);
  };

  return (
    <section className="sign-up-section">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="sign-up-button">Sign Up</button>
      </form>
    </section>
  );
};

SignUp.propTypes = {
  onSignUp: PropTypes.func.isRequired
};

export default SignUp;
