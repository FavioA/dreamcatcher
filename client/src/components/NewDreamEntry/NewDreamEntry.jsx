import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewDreamEntry.css'; 
const NewDreamEntry = ({ onSaveDream }) => {
  const [dream, setDream] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (dream.trim()) {
      onSaveDream(dream);
      setDream(''); // Reset the text area after submission
    }
  };
  return (
    <section className="new-dream-entry">
      <h2>Record New Dream</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="dream-textarea"
          value={dream}
          onChange={(e) => setDream(e.target.value)}
          placeholder="Describe your dream here..."
          rows="4"
        ></textarea>
        <button className="save-dream-button" type="submit">
          Save Dream
        </button>
      </form>
    </section>
  );
};
NewDreamEntry.propTypes = {
  onSaveDream: PropTypes.func.isRequired
};
export default NewDreamEntry;