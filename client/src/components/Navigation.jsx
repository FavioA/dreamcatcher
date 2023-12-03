import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
      {isAuthenticated ? (
        <>
          {/* Show links when the user is authenticated */}
          <NavLink to="/dream-journal" className={({ isActive }) => isActive ? 'active' : ''}>Dream Journal</NavLink>
          {/* Add other authenticated links here */}
        </>
      ) : (
        <>
          {/* Show links when the user is not authenticated */}
          <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
          <NavLink to="/signup" className={({ isActive }) => isActive ? 'active' : ''}>Sign Up</NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
