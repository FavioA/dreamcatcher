import React from 'react';
import './Navigation.css';
import PropTypes from 'prop-types';

const Navigation = ({ isAuthenticated, onLogout }) => {
  return (
    <nav>
      <span className="app-title">DreamCatcher</span>
      {isAuthenticated && (
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      )}
    </nav>
  );
};
Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired
};
export default Navigation;