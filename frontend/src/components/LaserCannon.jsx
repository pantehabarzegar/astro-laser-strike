// import React, { useEffect } from 'react';
// import { geoToCartesian } from '../utils/sphericalMath';

// const meteorCoords = [
//   [10, 10],
//   [30, 60],
//   [-45, 90],
//   [0, 180],
// ];

// const LaserCannon = ({ targetCoords, setStatus }) => {
//   let x = 0, y = 0, z = 0;

//   if (targetCoords) {
//     [x, y, z] = geoToCartesian(targetCoords.lat, targetCoords.lon);
//   }

//   useEffect(() => {
//     if (!targetCoords) return;

//     const EPSILON = 5;
//     const [tx, ty, tz] = geoToCartesian(targetCoords.lat, targetCoords.lon);

//     const hit = meteorCoords.some(([lat, lon]) => {
//       const [mx, my, mz] = geoToCartesian(lat, lon);
//       const dist = Math.sqrt((tx - mx) ** 2 + (ty - my) ** 2 + (tz - mz) ** 2);
//       return dist < EPSILON;
//     });

//     setStatus(hit ? 'hit' : 'miss');
//   }, [targetCoords, setStatus]);

//   // 🔇 تا زمانی که coords نداری چیزی نشون نده
//   if (!targetCoords) return null;

//   return (
//     <>
//       <mesh position={[0, 0, 0]}>
//         <sphereGeometry args={[2, 32, 32]} />
//         <meshStandardMaterial color="green" emissive="lime" />
//       </mesh>

//       <line>
//         <bufferGeometry>
//           <bufferAttribute
//             attach="attributes-position"
//             count={2}
//             array={new Float32Array([0, 0, 0, x, y, z])}
//             itemSize={3}
//           />
//         </bufferGeometry>
//         <lineBasicMaterial color="lime" linewidth={2} />
//       </line>
//     </>
//   );
// };

// export default LaserCannon;
import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { geoToCartesian } from '../utils/sphericalMath';

const meteorTarget = [30, 60];

const LaserCannon = ({ targetCoords, setStatus }) => {
  const cannonPos = [0, 0, 0];
  const laserRef = useRef();
  const [progress, setProgress] = useState(0);
  const [targetVector, setTargetVector] = useState([0, 0, 0]);
  const positionRef = useRef(new Float32Array(6)); // 2 points * 3 values

  useEffect(() => {
    if (!targetCoords) return;

    const [tx, ty, tz] = geoToCartesian(targetCoords.lat, targetCoords.lon);
    setTargetVector([tx, ty, tz]);
    setProgress(0);

    const [mx, my, mz] = geoToCartesian(meteorTarget[0], meteorTarget[1]);
    const dist = Math.sqrt((tx - mx) ** 2 + (ty - my) ** 2 + (tz - mz) ** 2);
    setStatus(dist < 5 ? 'hit' : 'miss');
  }, [targetCoords, setStatus]);

  useFrame(() => {
    if (!laserRef.current || !targetVector) return;

    if (progress < 1) {
      setProgress((p) => Math.min(1, p + 0.02));
    }

    const [tx, ty, tz] = targetVector;

    const x = cannonPos[0] + (tx - cannonPos[0]) * progress;
    const y = cannonPos[1] + (ty - cannonPos[1]) * progress;
    const z = cannonPos[2] + (tz - cannonPos[2]) * progress;

    positionRef.current.set([...cannonPos, x, y, z]);
    laserRef.current.geometry.attributes.position.needsUpdate = true;
  });

  if (!targetCoords) return null;

  return (
    <>
      <mesh position={cannonPos}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="green" emissive="lime" />
      </mesh>

      <line ref={laserRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positionRef.current}
            count={2}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="lime" linewidth={2} />
      </line>
    </>
  );
};

export default LaserCannon;
