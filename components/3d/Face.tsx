// "use client";
// import {
//   AsciiRenderer,
//   Lightformer,
//   OrbitControls,
//   useAnimations,
//   useGLTF,
// } from "@react-three/drei";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useRef, useState } from "react";

// export const Face = () => {
//   const [degraded, degrade] = useState(false);

//   return (
//     <Canvas
//       gl={{
//         antialias: false,
//         stencil: false,
//         depth: false,
//         alpha: true,
//         powerPreference: "high-performance",
//       }}
//       flat
//       linear
//       orthographic
//       camera={{
//         position: [0, 0, 500],
//         near: 0.1,
//         far: 10000,
//       }}
//     >
//       <AsciiRenderer
//         invert={false}
//         bgColor="#0D0D0C"
//         resolution={0.2}
//         characters=" *,    ./O#SF"
//       />
//       <OrbitControls autoRotate={true} enableZoom={false} enablePan={false} />

//       <Bust scale={100} rotation={[0, Math.PI / 5, 0]} />
//     </Canvas>
//   );
// };

// // @ts-ignore
// function Bust(props) {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF("/models/bust.glb");
//   const { actions } = useAnimations(animations, group);
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group name="Scene">
//         <mesh
//           name="Mesh_0"
//           castShadow
//           receiveShadow
//           // @ts-ignore
//           geometry={nodes.Mesh_0.geometry}
//           // @ts-ignore
//           material={nodes.Mesh_0.material}
//           position={[0, -0.261, 0]}
//           rotation={[-0.31, 1.425, 0.332]}
//           scale={8.235}
//         />
//         <mesh
//           name="Icosphere"
//           castShadow
//           receiveShadow
//           // @ts-ignore
//           geometry={nodes.Icosphere.geometry}
//           // @ts-ignore
//           material={nodes.Icosphere.material}
//         />
//         <mesh
//           name="Sphere002"
//           castShadow
//           receiveShadow
//           // @ts-ignore
//           geometry={nodes.Sphere002.geometry}
//           // @ts-ignore
//           material={nodes.Sphere002.material}
//         />
//         <mesh
//           name="Cone"
//           castShadow
//           receiveShadow
//           // @ts-ignore
//           geometry={nodes.Cone.geometry}
//           // @ts-ignore
//           material={nodes.Cone.material}
//           scale={0.156}
//         />
//         <mesh
//           name="Cone001"
//           castShadow
//           receiveShadow
//           // @ts-ignore
//           geometry={nodes.Cone001.geometry}
//           // @ts-ignore
//           material={nodes.Cone001.material}
//           scale={0.156}
//         />
//       </group>
//     </group>
//   );
// }

// function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
//   const group = useRef();
//   useFrame(
//     (state, delta) =>
//       // @ts-ignore
//       (group.current.position.z += delta * 10) > 20 &&
//       // @ts-ignore
//       (group.current.position.z = -60),
//   );
//   return (
//     <>
//       {/* Ceiling */}
//       <Lightformer
//         intensity={0.75}
//         rotation-x={Math.PI / 2}
//         position={[0, 5, -9]}
//         scale={[10, 10, 1]}
//       />
//       <group rotation={[0, 0.5, 0]}>
//         <group ref={group}>
//           {positions.map((x, i) => (
//             <Lightformer
//               key={i}
//               form="circle"
//               intensity={2}
//               rotation={[Math.PI / 2, 0, 0]}
//               position={[x, 4, i * 4]}
//               scale={[3, 1, 1]}
//             />
//           ))}
//         </group>
//       </group>
//       {/* Sides */}
//       <Lightformer
//         intensity={4}
//         rotation-y={Math.PI / 2}
//         position={[-5, 1, -1]}
//         scale={[20, 0.1, 1]}
//       />
//       <Lightformer
//         rotation-y={Math.PI / 2}
//         position={[-5, -1, -1]}
//         scale={[20, 0.5, 1]}
//       />
//       <Lightformer
//         rotation-y={-Math.PI / 2}
//         position={[10, 1, 0]}
//         scale={[20, 1, 1]}
//       />
//       {/* Background */}
//       <mesh scale={100}>
//         <sphereGeometry args={[1, 64, 64]} />
//         <boxGeometry args={[100, 100, 100]} />
//       </mesh>
//     </>
//   );
// }
