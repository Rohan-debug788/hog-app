// src/components/HogTile.js
import React, { useState } from 'react';

function HogTile({ hog, hideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  const handleHide = (e) => {
    e.stopPropagation(); // Prevent triggering toggleDetails
    hideHog(hog.name);
  };

  return (
    <div className="ui eight wide column">
      <div className="ui card" onClick={toggleDetails} style={{ cursor: 'pointer' }}>
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <div className="header">{hog.name}</div>
        </div>
        <div className="extra content">
          <button
            className="ui red button"
            onClick={handleHide}
          >
            Hide
          </button>
        </div>
        {showDetails && (
          <div className="ui segment">
            <p><strong>Specialty:</strong> {hog.specialty}</p>
            <p><strong>Weight:</strong> {hog.weight} lbs</p>
            <p><strong>Greased:</strong> {hog.greased ? 'Yes' : 'No'}</p>
            <p><strong>Highest Medal:</strong> {hog['highestMedal']}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HogTile;
