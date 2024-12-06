"use client";

import { Canvas } from "@react-three/fiber";

const Teste3d = () => {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent:"center"}}>
      <Canvas>
        <mesh>
          <boxGeometry />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Teste3d;
