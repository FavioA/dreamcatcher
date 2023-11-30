import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Assuming you have corresponding CSS
const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to DreamCatcher</h1>
      <p>Your personal space to capture and interpret your dreams.</p>
      <div className="navigation-links">
        <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};
export default HomePage;