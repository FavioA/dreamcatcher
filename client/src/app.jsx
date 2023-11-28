import React from 'react';
import { UserProvider } from './contexts/UserContext';
import Header from './components/Header';
import Navigation from './components/Navigation';
import NewDreamEntry from './components/NewDreamEntry';
import PreviousDreams from './components/PreviousDreams';
import DreamMeanings from './components/DreamMeanings';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useUser } from './contexts/UserContext';
import './App.css';
const MainContent = () => {
  const { user, logout } = useUser();
  const [dreams, setDreams] = useState([]); // State for storing dream entries
  const saveDreamEntry = (newDream) => {
    setDreams([...dreams, newDream]);
  };
  if (!user) {
    return <Login />; // Or <SignUp /> based on the desired user flow
  }
  return (
    <>
      <Navigation onLogout={logout} />
      <NewDreamEntry onSaveDream={saveDreamEntry} />
      <PreviousDreams dreams={dreams} />
      <DreamMeanings />
    </>
  );
};
const App = () => {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <MainContent />
      </div>
    </UserProvider>
  );
};
export default App;









