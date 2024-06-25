import { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';

const SkyComponent = () => {
  const { gl, scene } = useThree();
  const sky = useRef();

  useEffect(() => {
    const skyInstance = new Sky();
    skyInstance.scale.setScalar(1000);
    scene.add(skyInstance);

    const skyUniforms = skyInstance.material.uniforms;
    skyUniforms['turbidity'].value = 10;
    skyUniforms['rayleigh'].value = 2;
    skyUniforms['mieCoefficient'].value = 0.005;
    skyUniforms['mieDirectionalG'].value = 0.8;

    const parameters = {
      elevation: 2,
      azimuth: 180,
    };

    const pmremGenerator = new THREE.PMREMGenerator(gl);
    const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
    const theta = THREE.MathUtils.degToRad(parameters.azimuth);
    const sun = new THREE.Vector3();
    sun.setFromSphericalCoords(1, phi, theta);
    skyUniforms['sunPosition'].value.copy(sun);

    const renderTarget = pmremGenerator.fromScene(scene);
    scene.environment = renderTarget.texture;

    skyInstance.position.set(200, 0, 0)
    sky.current = skyInstance;

    return () => {
      scene.remove(skyInstance);
      renderTarget.dispose();
    };
  }, [gl, scene]);

  return null;
};

export default SkyComponent;
