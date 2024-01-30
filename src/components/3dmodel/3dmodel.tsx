/* eslint-disable import/no-extraneous-dependencies */
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';

import Model from './Me';

export default function ModelCanva() {
  return (
    <Canvas
      style={{
        position: 'absolute',
        background: '#fff',
        right: 0,
        width: '100%',
      }}
      camera={{
        position: [0, 2, 4],
        fov: 400,
        near: 0.1,
        far: 100,
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
