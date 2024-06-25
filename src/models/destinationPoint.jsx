import { useRef } from 'react';
import { shaderMaterial } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';

// Define the shader material
const RainbowMaterial = shaderMaterial(
  { time: 0, resolution: [1, 1], alpha: 0.5 },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    uniform float time;
    uniform float alpha;
    varying vec2 vUv;

    void main() {
      vec2 st = vUv;
      vec3 color1 = vec3(0.94, 0.87, 0.55); // Sandy yellow
      vec3 color2 = vec3(0.3, 0.8, 0.6); // Sea green
      vec3 color3 = vec3(0.0, 0.4, 0.7); // Ocean blue
      float pct = abs(sin(time + st.x * 3.14159));
      vec3 color = mix(color1, color2, smoothstep(0.0, 1.0, pct * 1.2));
      color = mix(color, color3, smoothstep(0.0, 1.0, pct - 0.3));
      gl_FragColor = vec4(color, alpha);
    }
  `
);

// Extend the material so it can be used as a JSX element
extend({ RainbowMaterial });

//const cylinderHeigt = 150;

export default function Destination({ position, scale }) {
  
  const ref = useRef()

  useFrame((state) => {
    ref.current.material.uniforms.time.value = state.clock.getElapsedTime();
  });

  return (
    <group>
    {/*<mesh ref={ref} position={position ? [position[0], position[1]+cylinderHeigt/2, position[2]] : [0, 0, 0]} scale={scale ?? 1}>
        <cylinderGeometry args={[3, 3, cylinderHeigt, 20, 10, true]} />
        <rainbowMaterial transparent={true} />
      </mesh>*/}
      <mesh ref={ref} position={position ? [position[0], position[1]+17, position[2]] : [0, 0, 0]} scale={scale ?? 1} rotation={[0, 0, 0]}>
        <coneGeometry args={[5, 10, 10, 1, true, 0, 6.283]} />
        <rainbowMaterial transparent={true} />
      </mesh>
      <mesh ref={ref} position={position ? [position[0], position[1]+7, position[2]] : [0, 0, 0]} scale={scale ?? 1} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[5, 10, 10, 1, true, 0, 6.283]} />
        <rainbowMaterial transparent={true} />
      </mesh>
      
      <mesh ref={ref} position={position ?? [0, 0, 0]} scale={scale ?? 1} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3, .5, 16, 100]} />
        <rainbowMaterial transparent={true} />
      </mesh>
    </group>
  );

}
