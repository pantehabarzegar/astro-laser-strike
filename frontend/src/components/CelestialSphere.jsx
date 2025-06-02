// import React from 'react';
// import * as THREE from 'three';

// const CelestialSphere = () => {
//   const radius = 100;

//   const latLongLines = [];

//   // خطوط عرض جغرافیایی (استوا = آبی)
//   for (let lat = -80; lat <= 80; lat += 10) {
//     const phi = (lat * Math.PI) / 180;
//     const rX = radius * Math.cos(phi);
//     const y = radius * Math.sin(phi);

//     const curve = new THREE.EllipseCurve(
//       0, 0,
//       rX, radius,
//       0, 2 * Math.PI,
//       false,
//       0
//     );

//     const points = curve.getPoints(100).map(p => [p.x, y, p.y]);
//     latLongLines.push({ points, color: lat === 0 ? 'blue' : '#444' });
//   }

//   // خطوط طول جغرافیایی (نصف‌النهار مبدأ = آبی)
//   for (let lon = 0; lon < 360; lon += 10) {
//     const points = [];
//     for (let i = -90; i <= 90; i += 5) {
//       const theta = (lon * Math.PI) / 180;
//       const phi = (i * Math.PI) / 180;

//       const x = radius * Math.cos(phi) * Math.cos(theta);
//       const y = radius * Math.sin(phi);
//       const z = radius * Math.cos(phi) * Math.sin(theta);
//       points.push([x, y, z]);
//     }
//     latLongLines.push({ points, color: lon === 0 ? 'blue' : '#444' });
//   }

//   return (
//     <>
//       {latLongLines.map((line, idx) => (
//         <line key={idx}>
//           <bufferGeometry attach="geometry">
//             <bufferAttribute
//               attach="attributes-position"
//               count={line.points.length}
//               array={new Float32Array(line.points.flat())}
//               itemSize={3}
//             />
//           </bufferGeometry>
//           <lineBasicMaterial
//             attach="material"
//             color={line.color}
//             linewidth={1}
//           />
//         </line>
//       ))}
//     </>
//   );
// };

// export default CelestialSphere;
// ... سایر کدهای خطوط طول و عرض بدون تغییر

  import React from 'react';
import * as THREE from 'three';

const CelestialSphere = () => {
  const radius = 100;
  const latLongLines = [];

  // 🌀 خطوط عرض جغرافیایی (نیم‌کره شمالی فقط)
  for (let lat = 0; lat <= 80; lat += 10) {
    const phi = (lat * Math.PI) / 180;
    const y = radius * Math.sin(phi);
    const r = radius * Math.cos(phi);

    const curve = new THREE.EllipseCurve(
      0, 0,
      r, r,
      0, 2 * Math.PI,
      false,
      0
    );

    const points = curve.getPoints(100).map(p => [p.x, y, p.y]);
    latLongLines.push({
      points,
      color: lat === 0 ? 'blue' : '#444',
    });
  }

  // 🧭 خطوط طول جغرافیایی
  for (let lon = 0; lon < 360; lon += 10) {
    const points = [];
    for (let i = 0; i <= 90; i += 5) {
      const theta = (lon * Math.PI) / 180;
      const phi = (i * Math.PI) / 180;

      const x = radius * Math.cos(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi);
      const z = radius * Math.cos(phi) * Math.sin(theta);
      points.push([x, y, z]);
    }
    latLongLines.push({
      points,
      color: lon === 0 ? 'blue' : '#444',
    });
  }

  // ✅ این return داخل بدنه تابع قرار گرفته
  return (
    <>
      {latLongLines.map((line, idx) => (
        <line key={idx}>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attach="attributes-position"
              count={line.points.length}
              array={new Float32Array(line.points.flat())}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial attach="material" color={line.color} linewidth={1} />
        </line>
      ))}

      {/* 🟢 کره نئونی در مرکز استوا */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="lime" emissive="lime" emissiveIntensity={2} />
      </mesh>
    </>
  );
};

export default CelestialSphere;
