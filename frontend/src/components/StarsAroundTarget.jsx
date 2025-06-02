// import React from 'react';
// import { geoToCartesian } from '../utils/sphericalMath';

// const offsetStars = [
//   [12, 12],
//   [8, 14],
//   [10, 6],
//   [13, 9],
//   [7, 11],
// ];

// const StarsAroundTarget = () => {
//   return (
//     <>
//       {offsetStars.map(([lat, lon], i) => {
//         const [x, y, z] = geoToCartesian(lat, lon);
//         return (
//           <mesh key={i} position={[x, y, z]}>
//             <sphereGeometry args={[0.8, 16, 16]} />
//             <meshStandardMaterial color="white" emissive="cyan" />
//           </mesh>
//         );
//       })}
//     </>
//   );
// };

// export default StarsAroundTarget;
// ❌ این نسخه کاملاً پاکسازی‌شده‌ست، دیگه هیچ ستاره قرمزی رندر نمی‌کنه
import React from 'react';

const StarsOnSphere = () => {
  return null; // 🔥 هیچ ستاره‌ای رندر نمی‌شه
};

export default StarsOnSphere;
