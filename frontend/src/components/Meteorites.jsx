// import React from 'react';
// import { geoToCartesian } from '../utils/sphericalMath';

// const meteorCoords = [
//   [10, 10],
//   [30, 60],
//   [-45, 90],
//   [0, 180],
// ];

// const Meteorites = () => {
//   return (
//     <>
//       {meteorCoords.map(([lat, lon], i) => {
//         const [x, y, z] = geoToCartesian(lat, lon);
//         return (
//           <mesh key={i} position={[x, y, z]}>
//             <sphereGeometry args={[2, 32, 32]} />
//             <meshStandardMaterial color="red" emissive="darkred" />
//           </mesh>
//         );
//       })}
//     </>
//   );
// };

// export default Meteorites;
