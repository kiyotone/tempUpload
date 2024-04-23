// // DraggableObject.js
// import React, { useRef, useState } from "react";
// import { useFrame, useThree } from "@react-three/fiber";

// const DraggableObject = ({ gltf }) => {
//   const { camera } = useThree();
//   const dragGroup = useRef();
//   const [dragged, setDragged] = useState(null);

//   useFrame(() => {
//     if (dragged) {
//       // Update the position of the dragged object based on the camera and user input
//       dragged.position.copy(dragged.position.lerp(camera.position, 0.1));
//       dragged.rotation.copy(dragged.rotation.lerp(camera.rotation, 0.1));
//     }
//   });

//   return (
//     <group ref={dragGroup}>
//       <primitive
//         object={gltf.scene}
//         onClick={(e) => {
//           // Handle click event to start dragging the object
//           setDragged(e.eventObject);
//         }}
//       />
//     </group>
//   );
// };

// export default DraggableObject;
