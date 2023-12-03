import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DreamJournalPage from './pages/DreamJournalPage';
import './App.css';

const App = () => {
  // You might want to manage your authentication state here
  // const isAuthenticated = ...;

  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Header />
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/dream-journal" element={<DreamJournalPage />} />
            {/* Add additional routes as needed */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;



















