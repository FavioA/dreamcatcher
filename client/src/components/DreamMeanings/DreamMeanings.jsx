import React from 'react';
import './DreamMeanings.css'; 
const DreamMeanings = () => {
  const meanings = [
    "Flying - signifies freedom or a desire to be free.",
    "Falling - often represents fear of failure or loss of control.",
    "Teeth falling out - symbolizes anxiety about appearance or public perception.",
    // ... add more meanings or fetch from an API
  ];
  return (
    <section className="dream-meanings">
      <h2>Dream Meanings</h2>
      <ul className="meanings-list">
        {meanings.map((meaning, index) => (
          <li key={index} className="meaning-entry">
            {meaning}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default DreamMeanings;







