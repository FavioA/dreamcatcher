import React, { createContext, useState, useContext } from 'react';
// Create a context for user data
const UserContext = createContext(null);
// Provider component that wraps your app and makes user object available to any child component that calls useUser().
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // Login function
  const login = (userData) => {
    setUser(userData);
  };
  // Logout function
  const logout = () => {
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext);
export default UserContext;