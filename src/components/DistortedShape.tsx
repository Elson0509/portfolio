import { MeshDistortMaterial, Sphere } from "@react-three/drei";
const DistortedShape = () => {
  return (
    <>
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
    </>
  );
};

export default DistortedShape;
