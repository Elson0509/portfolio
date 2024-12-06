"use client";

import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Teste3d = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Canvas>
        <mesh>
          <Sphere args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
              color="#FFD700"
              attach="material"
              distort={0.5}
              speed={1.2}
            />
          </Sphere>
          <directionalLight position={[1, 2, 3]} />
          <ambientLight intensity={1} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Teste3d;
