import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { AmbientParticleField } from './AmbientParticleField';

export function WebGLScene() {
  return (
    <div className="w-full h-full fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <AmbientParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
}
