// src/components/Meteorite.jsx
import React, { useMemo } from 'react';
import { geoToCartesian } from '../utils/sphericalMath';

const Meteorite = () => {
  const randomCoords = useMemo(() => {
    const lat = Math.floor(Math.random() * 90);    // 0° to 89°
    const lon = Math.floor(Math.random() * 360);   // 0° to 359°
    return geoToCartesian(lat, lon);
  }, []); // ← run once per component mount (on page load)

  const [x, y, z] = randomCoords;

  return (
    <mesh position={[x, y, z]}>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial color="#8B4513" roughness={1} metalness={0.1} />
    </mesh>
  );
};

export default Meteorite;
