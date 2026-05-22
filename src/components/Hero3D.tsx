import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles, Tube } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Spring() {
  const ref = useRef<THREE.Mesh>(null!);
  const path = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < 300; i++) {
      const t = i * 0.28;
      points.push(new THREE.Vector3(Math.cos(t) * 1.5, (i - 150) * 0.03, Math.sin(t) * 1.5));
    }
    return new THREE.CatmullRomCurve3(points);
  }, []);

  useFrame((_, d) => {
    ref.current.rotation.y += d * 0.5;
    ref.current.rotation.x = Math.sin(performance.now() * 0.0005) * 0.2;
  });

  return (
    <Tube ref={ref} args={[path, 450, 0.11, 22, false]}>
      <meshPhysicalMaterial color="#cfd5df" metalness={1} roughness={0.2} clearcoat={1} emissive="#3f0707" emissiveIntensity={0.28} />
    </Tube>
  );
}

function FloatingParts() {
  const meshes = useMemo(() => new Array(8).fill(0).map((_, i) => i), []);
  return (
    <>
      {meshes.map((m) => (
        <Float key={m} speed={1.4 + m * 0.1} rotationIntensity={1.2} floatIntensity={1.6}>
          <mesh position={[Math.sin(m * 1.7) * 3.4, (m - 4) * 0.6, Math.cos(m * 1.1) * 1.2]}>
            <boxGeometry args={[0.2, 0.2, 0.2]} />
            <meshStandardMaterial color={m % 2 === 0 ? '#ff2d2d' : '#b3bccb'} metalness={0.9} roughness={0.25} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 42 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 2]} intensity={2.2} color="#ff4545" />
      <Spring />
      <FloatingParts />
      <Sparkles count={190} size={2.8} speed={0.24} scale={9} color="#d7deea" />
      <Environment preset="warehouse" />
    </Canvas>
  );
}

