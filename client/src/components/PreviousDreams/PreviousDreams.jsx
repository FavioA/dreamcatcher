import React from 'react';
import PropTypes from 'prop-types';
import './PreviousDreams.css';

const PreviousDreams = ({ dreams }) => {
  return (
    <section className="previous-dreams">
      <h2>Previous Dreams</h2>
      <ul className="dreams-list">
        {dreams.map((dream, index) => (
          <li key={index} className="dream-entry">
            {dream}
          </li>
        ))}
      </ul>
    </section>
  );
};

PreviousDreams.propTypes = {
  dreams: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PreviousDreams;