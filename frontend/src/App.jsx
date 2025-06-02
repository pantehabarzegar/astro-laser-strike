// src/App.js
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import InfoCard from './components/InfoCard'; // ← Add this
import CelestialSphere from './components/CelestialSphere';
import Meteorite from './components/Meteorite';
import StarsAroundTarget from './components/StarsAroundTarget';
import LaserCannon from './components/LaserCannon';
import CoordinateInput from './components/CoordinateInput';
import Notification from './components/Notification';
import AdviceCard from './components/AdviceCard';

import './styles/neon.css';

const App = () => {
  const [coords, setCoords] = useState(null);
  const [status, setStatus] = useState(null);

  return (
    <div className="container-fluid text-center p-3">
      <h1 className="text-neon">🌌 Spherical Laser Strike 🔫</h1>
      <InfoCard   /> {/* ← Place it here */}
      <CoordinateInput setCoords={setCoords} setResult={setStatus} />
      
      <Notification status={status} />
      <AdviceCard coords={coords} status={status} />

      <Canvas style={{ height: '80vh', background: 'black' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <CelestialSphere />
        <Meteorite />
        <StarsAroundTarget />
        {coords && <LaserCannon targetCoords={coords} setStatus={setStatus} />}
        <OrbitControls />
      </Canvas>

      <footer className="mt-4 text-neon small">
        © 2025 – Developed by Pantea | Lead Developer of <strong>Spherical Laser Strike</strong>
      </footer>
    </div>
  );
};

export default App;
