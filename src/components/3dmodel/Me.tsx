/* eslint-disable import/no-extraneous-dependencies */
import { useGLTF } from '@react-three/drei';
import React from 'react';

export default function Model() {
  const gltf: any = useGLTF('/me.glb');
  return <primitive object={gltf.scene} />;
}

useGLTF.preload('/me.glb');
