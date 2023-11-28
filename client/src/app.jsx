import React from 'react';
import { UserProvider, useUser } from './contexts/UserContext';
import Navigation from './components/Navigation';
import NewDreamEntry from './components/NewDreamEntry';
import PreviousDreams from './components/PreviousDreams';
import DreamMeanings from './components/DreamMeanings';
import Login from './components/Login';
import './App.css';
const MainContent = () => {
  const { user, logout } = useUser();
  const [dreams, setDreams] = useState([]); // State for storing dream entries
  const saveDreamEntry = (newDream) => {
    setDreams([...dreams, newDream]);
  };
  if (!user) {
    return <Login />;
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
        <MainContent />
      </div>
    </UserProvider>
  );
};
export default App;









