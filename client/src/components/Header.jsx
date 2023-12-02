import React from 'react';
import { useUser } from '../contexts/UserContext';
import './Header.css'; // Assuming you have corresponding CSS for styling
const Header = () => {
  const { user } = useUser();
  return (
    <header className="app-header">
      <h1>DreamCatcher</h1>
      {user && <p>Welcome, {user.username}!</p>}
    </header>
  );
};
export default Header;