import React from 'react';
import './Footer.css'; // Assuming you have corresponding CSS for styling
const Footer = () => {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} DreamCatcher</p>
      <p>All rights reserved.</p>
    </footer>
  );
};
export default Footer;