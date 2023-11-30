import React, { useState, useEffect } from 'react';
import NewDreamEntry from '../components/NewDreamEntry';
import PreviousDreams from '../components/PreviousDreams';
import { useUser } from '../contexts/UserContext';
import { fetchDreamEntries, saveDreamEntry } from '../utils/api';
import './DreamJournalPage.css';

const DreamJournalPage = () => {
  const [dreams, setDreams] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    // Function to fetch dream entries
    const loadDreamEntries = async () => {
      try {
        const fetchedDreams = await fetchDreamEntries(user.token);
        setDreams(fetchedDreams);
      } catch (error) {
        console.error('Error fetching dreams:', error);
      }
    };

    if (user) {
      loadDreamEntries();
    }
  }, [user]);

  const handleSaveDream = async (newDream) => {
    try {
      await saveDreamEntry(newDream, user.token);
      setDreams([...dreams, newDream]);
    } catch (error) {
      console.error('Error saving dream:', error);
    }
  };

  return (
    <div className="dream-journal-page">
      <h1>Your Dream Journal</h1>
      <NewDreamEntry onSaveDream={handleSaveDream} />
      <PreviousDreams dreams={dreams} />
    </div>
  );
};

export default DreamJournalPage;
