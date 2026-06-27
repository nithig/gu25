import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Diya({ position }: { position: [number, number, number] }) {
  const flameRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (flameRef.current) {
      const t = clock.getElapsedTime();
      flameRef.current.scale.y = 1 + Math.sin(t * 8 + position[0]) * 0.08;
      flameRef.current.scale.x = 1 + Math.cos(t * 6 + position[2]) * 0.05;
    }
  });
  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.6}>
      <group position={position}>
        <mesh>
          <cylinderGeometry args={[0.25, 0.18, 0.12, 24]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.25} />
        </mesh>
        <mesh ref={flameRef} position={[0, 0.18, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#FFD27A" toneMapped={false} />
        </mesh>
        <pointLight position={[0, 0.25, 0]} intensity={1.2} distance={2.4} color="#F5C56B" />
      </group>
    </Float>
  );
}

function Petals() {
  const groupRef = useRef<THREE.Group>(null);
  const petals = useMemo(
    () =>
      Array.from({ length: 24 }, () => ({
        position: [
          (Math.random() - 0.5) * 12,
          Math.random() * 8 + 2,
          (Math.random() - 0.5) * 6,
        ] as [number, number, number],
        speed: Math.random() * 0.4 + 0.2,
        rot: Math.random() * Math.PI,
      })),
    [],
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.children.forEach((c, i) => {
      c.position.y -= petals[i].speed * 0.01;
      c.position.x += Math.sin(t + i) * 0.005;
      c.rotation.z += 0.005;
      if (c.position.y < -3) c.position.y = 6;
    });
  });

  return (
    <group ref={groupRef}>
      {petals.map((p, i) => (
        <mesh key={i} position={p.position} rotation={[0, 0, p.rot]}>
          <circleGeometry args={[0.08, 8]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? "#F5E6C8" : i % 3 === 1 ? "#D4AF37" : "#FFF9F0"}
            transparent
            opacity={0.7}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

export function Scene3D({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <Canvas
        camera={{ position: [0, 1, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <fog attach="fog" args={["#050505", 6, 16]} />
        <ambientLight intensity={0.15} />
        <directionalLight position={[3, 5, 4]} intensity={0.4} color="#F5E6C8" />
        <Diya position={[-3, 0, 0]} />
        <Diya position={[3, -0.2, -1]} />
        <Diya position={[0, 1, -2]} />
        <Diya position={[-1.6, -1, 1]} />
        <Diya position={[2, 1.2, 0.5]} />
        <Petals />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
