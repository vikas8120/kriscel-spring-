import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Sparkles, Tube } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

type SpringProps = {
  radius?: number;
  yScale?: number;
  tubeRadius?: number;
  turns?: number;
  color?: string;
  emissive?: string;
  speed?: number;
  offsetX?: number;
  offsetY?: number;
  tilt?: number;
};

function SpringRibbon({
  radius = 1.1,
  yScale = 0.03,
  tubeRadius = 0.085,
  turns = 250,
  color = '#d6dce7',
  emissive = '#4a1111',
  speed = 0.4,
  offsetX = 0,
  offsetY = 0,
  tilt = 0,
}: SpringProps) {
  const ref = useRef<THREE.Mesh>(null!);
  const path = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < turns; i++) {
      const t = i * 0.29;
      points.push(
        new THREE.Vector3(
          Math.cos(t) * (radius + Math.sin(i * 0.09) * 0.02),
          (i - turns / 2) * yScale,
          Math.sin(t) * radius,
        ),
      );
    }
    return new THREE.CatmullRomCurve3(points);
  }, [radius, yScale, turns]);

  useFrame((_, d) => {
    ref.current.rotation.y += d * speed;
    const t = performance.now() * 0.001;
    ref.current.rotation.x = tilt + Math.sin(t * 1.1 + offsetX) * 0.12;
    ref.current.rotation.z = Math.cos(t * 0.8 + offsetY) * 0.08;
    ref.current.position.y = offsetY + Math.sin(t * 1.4 + offsetX) * 0.1;
    ref.current.position.x = offsetX;
  });

  return (
    <Tube ref={ref} args={[path, 420, tubeRadius, 20, false]}>
      <meshPhysicalMaterial
        color={color}
        metalness={1}
        roughness={0.14}
        clearcoat={1}
        clearcoatRoughness={0.07}
        emissive={emissive}
        emissiveIntensity={0.28}
      />
    </Tube>
  );
}

function OrbitRings() {
  const leftRef = useRef<THREE.Mesh>(null!);
  const rightRef = useRef<THREE.Mesh>(null!);

  useFrame((_, d) => {
    leftRef.current.rotation.z += d * 0.25;
    leftRef.current.rotation.y -= d * 0.15;
    rightRef.current.rotation.z -= d * 0.22;
    rightRef.current.rotation.y += d * 0.14;
  });

  return (
    <>
      <mesh ref={leftRef} position={[-3.8, -0.2, -0.8]} rotation={[0.9, 0.2, 0.5]}>
        <torusGeometry args={[0.95, 0.03, 20, 140]} />
        <meshStandardMaterial color="#77a8ff" emissive="#2b5da8" emissiveIntensity={0.35} metalness={0.8} roughness={0.25} />
      </mesh>
      <mesh ref={rightRef} position={[3.8, 0.35, -0.7]} rotation={[0.8, -0.2, -0.4]}>
        <torusGeometry args={[1.05, 0.03, 20, 140]} />
        <meshStandardMaterial color="#ff7a7a" emissive="#8f2424" emissiveIntensity={0.35} metalness={0.8} roughness={0.25} />
      </mesh>
    </>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 10.8], fov: 44 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 2]} intensity={2.1} color="#ff6565" />
      <pointLight position={[-5, 1, 2]} intensity={1.15} color="#79a9ff" />
      <pointLight position={[5, -1, 2]} intensity={1.05} color="#ff6a6a" />

      <SpringRibbon radius={1.02} yScale={0.033} tubeRadius={0.082} turns={255} color="#d6dce7" emissive="#4a1111" speed={0.42} offsetX={-2.4} offsetY={0.05} tilt={0.15} />
      <SpringRibbon radius={0.9} yScale={0.029} tubeRadius={0.072} turns={240} color="#eef3fb" emissive="#1e3f6f" speed={-0.36} offsetX={2.45} offsetY={-0.03} tilt={-0.1} />

      <OrbitRings />
      <Sparkles count={240} size={2.1} speed={0.23} scale={10.8} color="#d9e3f2" />
      <Environment preset="city" />
    </Canvas>
  );
}
