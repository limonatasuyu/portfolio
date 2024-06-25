import { Canvas, useThree } from "@react-three/fiber";
import { Euler, Quaternion } from "three";
import ShipWrapper from "./models/shipWrapper";
import { Physics } from "@react-three/cannon";
import Destination from "./models/destinationPoint";
import WaterComponent from "./models/water";
import SkyComponent from "./models/sky";
import IslandGroup from "./models/islandGroup";
import { useEffect } from "react";
import { Pages } from "./pages/Pages";

const initialCameraRotation = new Euler(-0.38, -0.21, -0.1);

const CameraSetup = () => {
  const { camera } = useThree();

  useEffect(() => {
    const quaternion = new Quaternion();
    quaternion.setFromEuler(initialCameraRotation);
    camera.quaternion.copy(quaternion);
  }, [camera]);

  return null;
};

export default function Scene() {
  const camera = {
    position: [0, 80, 0],
    fov: 55,
    near: 1,
    far: 2000,
  };

  return (
    <Canvas className="w-full h-screen" style={{height: "100vh"}} camera={camera} gl={{ antialias: false }}>
      <Physics gravity={[0, 0, 0]}>
        <ambientLight intensity={1} />
        <WaterComponent />
        <SkyComponent />
        <IslandGroup />
        <ShipWrapper />
        <CameraSetup />
        {Pages.map((i, x) => (
          <Destination key={x} position={i.position} />
        ))}
      </Physics>
    </Canvas>
  );
}
