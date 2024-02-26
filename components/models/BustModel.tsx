"use client";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0: THREE.Mesh;
    Icosphere: THREE.Mesh;
    Sphere002: THREE.Mesh;
    Cone: THREE.Mesh;
    Cone001: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
  };
  animations: {
    ["ArmatureAction.001"]: THREE.AnimationAction;
  };
};

export function BustModel(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group | null>(null);
  const { nodes, materials, animations } = useGLTF(
    "/models/bust.glb",
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Mesh_0"
          geometry={nodes.Mesh_0.geometry}
          material={new THREE.MeshStandardMaterial({ color: 0xff69b4 })}
          position={[0, 0, 0]}
          rotation={[-0.31, 1.425, 0.332]}
          scale={10}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/bust.glb");
