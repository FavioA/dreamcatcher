import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Assuming you have corresponding CSS for styling
const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to DreamCatcher</h1>
      <p>Your personal dream journaling app.</p>
      <div>
        <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};
export default HomePage;