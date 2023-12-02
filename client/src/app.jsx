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
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Header />
          <Navigation />
          <Routes>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/dream-journal" component={DreamJournalPage} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
};
export default App;


















