// src/components/Meteorite.jsx
import React, { useMemo } from 'react';
import { geoToCartesian } from '../utils/sphericalMath';

const Meteorite = () => {
  const randomCoords = useMemo(() => {
    const lat = Math.floor(Math.random() * 9) * 10;     // 0 to 80 (ده‌تایی)
    const lon = Math.floor(Math.random() * 36) * 10;    // 0 to 350 (ده‌تایی)

    const [x, y, z] = geoToCartesian(lat, lon);
    return [x, y, z]; // ❗ x, y, z می‌تونن اعشاری بمونن چون سه‌بعدی نیاز دقت داره
  }, []);

  const [x, y, z] = randomCoords;

  return (
    <mesh position={[x, y, z]}>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial color="#8B4513" roughness={1} metalness={0.1} />
    </mesh>
  );
};

export default Meteorite;

