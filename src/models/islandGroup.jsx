import { useGLTF } from "@react-three/drei";
import island from "/assets/models/chicken_gun_pirateislands.glb";
import CityIsland from "./islandGroup/CityIsland";
import CastleIsland from "./islandGroup/CastleIsland";
import Clouds from "./islandGroup/Clouds";
import Shipwreck from "./islandGroup/Shipwreck";
import Borderlands from "./islandGroup/Borderlands";
import BigVillageIsland from "./islandGroup/BigVillageIsland";
import SmallVillageIsland from "./islandGroup/SmallVillageIsland";
import FarmIsland from "./islandGroup/FarmIsland";
import SmallIslands from "./islandGroup/SmallIslands";
import { MergedMeshes } from "../utils";

// TODO: deploy etmeden önce visible={false} olan group var mı diye kontrol et
export default function Model(props) {
  const { nodes, materials } = useGLTF(island);

  return (
    <group {...props} position={[0, 20, 0]} dispose={null}>
      <group scale={0.01}>
        <MergedMeshes>
          <CityIsland nodes={nodes} materials={materials} />
          <CastleIsland nodes={nodes} materials={materials} />
          <BigVillageIsland nodes={nodes} materials={materials} />
          <Shipwreck nodes={nodes} materials={materials} />
          <Borderlands nodes={nodes} materials={materials} />
          <Clouds nodes={nodes} materials={materials} />
          <SmallVillageIsland nodes={nodes} materials={materials} />
          <FarmIsland nodes={nodes} materials={materials} />
          <SmallIslands nodes={nodes} materials={materials} />
        </MergedMeshes>
      </group>
    </group>
  );
}
