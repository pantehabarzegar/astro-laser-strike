// frontend/components/CoordinateInput.js
import React, { useState } from 'react';

const CoordinateInput = ({ setCoords, setResult }) => {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const handleShoot = () => {
    const latNum = parseFloat(lat);
    const lonNum = parseFloat(lon);
    if (isNaN(latNum) || isNaN(lonNum)) return;

    setCoords({ lat: latNum, lon: lonNum });

    // فرض می‌کنیم خود بازی محاسبه می‌کنه hit یا miss، پس این رو خالی می‌گذاریم
    setResult(null); 
  };

  return (
    <div className="row justify-content-center mb-3">
      <div className="col-md-3">
        <input
          type="number"
          className="form-control neon-input"
          placeholder="Latitude"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
      </div>
      <div className="col-md-3">
        <input
          type="number"
          className="form-control neon-input"
          placeholder="Longitude"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
        />
      </div>
      <div className="col-md-2">
        <button className="btn btn-neon w-100" onClick={handleShoot}>
          🔫 Fire
        </button>
      </div>
    </div>
  );
};

export default CoordinateInput;
