import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Water } from 'three/addons/objects/Water.js';
import { useTexture } from '@react-three/drei';

const WaterComponent = () => {
  const waterRef = useRef();
  const { scene } = useThree();

  const waterNormals = useTexture('textures/waternormals.jpg');
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

  useEffect(() => {
    const waterGeometry = new THREE.PlaneGeometry(1400, 1400);
    const water = new Water(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
    });

    water.rotation.x = -Math.PI / 2;
    waterRef.current = water;
    waterRef.current.position.set(180, 0, 0)
    scene.add(water);

    return () => {
      scene.remove(water);
    };
  }, [scene, waterNormals]);

  useFrame(() => {
    if (waterRef.current) {
      waterRef.current.material.uniforms['time'].value += 1.0 / 60.0;
    }
  });

  return null;
};

export default WaterComponent
