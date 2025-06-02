// src/components/InfoCard.jsx
import React from 'react';

const InfoCard = () => {
  return (
    <div className=".neon-card-info mb-3 text-light small text-start" style={{ maxWidth: 600 }}>
      <h6 className="text-neon .neon-card-info">ℹ️ About the Game</h6>
      <p>
        This is a 3D spherical laser simulation game optimized for <strong>desktop screens only</strong>.
        Please use a large display for the best experience.
      </p>
      <p>
        This is the first and simplest level of the game. Your goal is to accurately fire at a meteorite.
        You can interact with the globe by <strong>dragging</strong> the mouse and <strong>scrolling</strong> to explore.
      </p>
      <p>
        <strong>Latitude lines</strong> (horizontal) are spaced every 10 degrees from the equator up to the north pole.
        <strong>Longitude lines</strong> (vertical) go from 0° to 350° with a 10° spacing.
        The blue reference line indicates the prime meridian (0°).
      </p>
    </div>
  );
};

export default InfoCard;
