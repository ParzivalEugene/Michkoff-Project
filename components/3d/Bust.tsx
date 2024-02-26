"use client";
import { BustModel } from "@/components/models";
import { AsciiRenderer, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const Bust = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={10}
      />
      <directionalLight position={[100, 100, 100]} intensity={0.5} />
      <directionalLight position={[-100, -100, -100]} intensity={0.4} />
      <ambientLight intensity={0.2} />

      <AsciiRenderer
        invert={false}
        resolution={0.3}
        fgColor="#3BDEDE"
        bgColor=""
        color={false}
        characters=" @80GCLft1i;:,." // @80GCLft1i;:,.
      />
      <BustModel />
    </Canvas>
  );
};
