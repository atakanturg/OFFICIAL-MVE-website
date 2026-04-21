import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const COUNT = 450;

export function AmbientParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, velocities, sizes } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const velocities = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      // Scattered across a wide volume
      positions[i3]     = (Math.random() - 0.5) * 40;
      positions[i3 + 1] = (Math.random() - 0.5) * 40;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;

      // Very gentle drift velocities (Brownian motion)
      velocities[i3]     = (Math.random() - 0.5) * 0.003;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.002 + 0.001; // slight upward bias
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.001;

      // Varied sizes - slightly larger
      sizes[i] = Math.random() * 0.08 + 0.03;
    }

    return { positions, velocities, sizes };
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, [positions, sizes]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const t = state.clock.elapsedTime;

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;

      // Apply drift
      posArray[i3]     += velocities[i3] + Math.sin(t * 0.3 + i * 0.1) * 0.001;
      posArray[i3 + 1] += velocities[i3 + 1] + Math.cos(t * 0.2 + i * 0.15) * 0.001;
      posArray[i3 + 2] += velocities[i3 + 2];

      // Wrap around bounds
      if (posArray[i3] > 20) posArray[i3] = -20;
      if (posArray[i3] < -20) posArray[i3] = 20;
      if (posArray[i3 + 1] > 20) posArray[i3 + 1] = -20;
      if (posArray[i3 + 1] < -20) posArray[i3 + 1] = 20;
      if (posArray[i3 + 2] > 10) posArray[i3 + 2] = -10;
      if (posArray[i3 + 2] < -10) posArray[i3 + 2] = 10;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Gentle overall rotation
    pointsRef.current.rotation.y = t * 0.01;
    pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.02;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        color="#58C391"
        size={0.08}
        transparent
        opacity={0.4}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
