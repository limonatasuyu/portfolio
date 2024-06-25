import { useCompoundBody } from "@react-three/cannon";

export default function BigVillageIsland({ nodes, materials }) {

  const shapes = [
    { rotation: [0, .4, 0], position: [-90, 0, -25], args: [40, 10, 22] },
    { rotation: [0, .1, 0], position: [-102, 0, -48], args: [10, 10, 27] },
    { rotation: [0, -.5, 0], position: [-108, 0, -70], args: [40, 10, 22] },
    { rotation: [0, .9, 0], position: [-88, 0, -82], args: [20, 10, 12] },
    { rotation: [0, -.3, 0], position: [-98, 0, -115], args: [35, 10, 36] },
    { rotation: [0, .8, 0], position: [-55, 0, -130], args: [30, 10, 22] },
    { rotation: [0, .4, 0], position: [5, 0, -108], args: [100, 10, 80] },
    { rotation: [0, 1.5, 0], position: [-4, 0, -150], args: [42, 10, 22] },
    { rotation: [0, 1.5, 0], position: [-4, 0, -150], args: [42, 10, 22] },
    { rotation: [0, .4, 0], position: [40, 0, -70], args: [42, 10, 20] },
    { rotation: [0, -.8, 0], position: [-10, 0, -55], args: [5, 10, 20] },
    { rotation: [0, .5, 0], position: [-10, 0, -50], args: [3.5, 10, 20] },
    { rotation: [0, .11, 0], position: [-12, 0, -40], args: [3.5, 10, 20] },
    { rotation: [0, -.8, 0], position: [-10, 0, -55], args: [5, 10, 20] },
    { rotation: [0, -.8, 0], position: [-20, 0, -25], args: [5, 10, 20] },
    { rotation: [0, .1, 0], position: [-35, 0, -17], args: [20, 10, 5] },
    { rotation: [0, -.4, 0], position: [-53, 0, -20], args: [25, 10, 5] },
    { rotation: [0, .5, 0], position: [-23.6, 0, -21.2], args: [3.6, 10, 20] },
    { rotation: [0, .5, 0], position: [-38, 0, -17], args: [3.6, 10, 25] },
    { rotation: [0, -.5, 0], position: [55, 0, -45], args: [15, 10, 35] },
    { rotation: [0, .3, 0], position: [-130, 0, -21], args: [22, 10, 22] },
    { rotation: [0, .3, 0], position: [-58, 0, -158], args: [22, 10, 22] },
  ];

  const [ref] = useCompoundBody(() => ({
    mass: 0,
    type: "Static",
    shapes: shapes.map(shape => ({
      type: "Box",
      position: shape.position,
      rotation: shape.rotation,
      args: shape.args
    }))
  }));


  return (
    <group position={[4794.702, -1657.335, -40436.598]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]} >
      <group ref={ref}/>
      
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_28_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24460, -210, -30060]}
        rotation={[Math.PI, 0.666, Math.PI]}
        scale={0.766}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_84_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26793, -160, -14453.999]}
        rotation={[-Math.PI, -1.292, Math.PI]}
        scale={0.878}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_85_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26642.002, -160, -14596.001]}
        rotation={[0, -0.807, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_26_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21470, -150, -26500]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_81_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25539, -115, -18744]}
        rotation={[-Math.PI, 1.353, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_78_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-18770, -420, -25190]}
        rotation={[0, 0.27, 0]}
        scale={0.735}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Arch_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28832.998, -400, -15294]}
        rotation={[0, -0.725, 0]}
        scale={[1.265, 1.314, 1.265]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23118, -95, -20873]}
        scale={2.694}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_79_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22010, -1030, -26000]}
        rotation={[0, 0.297, 0]}
        scale={[0.556, 0.556, 0.495]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_19_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26603, -95, -16322]}
        rotation={[0, 1.263, 0]}
        scale={1.744}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_82_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-16103, -126, -21416]}
        rotation={[0, -0.759, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_54_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-17970, -450, -24670]}
        rotation={[0, 0.856, 0]}
        scale={3.272}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_72_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-24152, -95, -26018]}
        rotation={[-Math.PI, 1.548, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_22_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26391, -103, -26542.002]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_76_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-24406, -95, -23280]}
        rotation={[Math.PI, -0.807, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_32_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-28168, -338, -23508]}
        scale={0.831}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_67_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-18614.971, -170, -22109.299]}
        rotation={[0, -1.062, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28250, -114, -24948]}
        rotation={[0.037, 0.012, 0.004]}
        scale={[2.11, 1.662, 2.11]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22397, -95, -19638]}
        rotation={[-Math.PI, -1.284, Math.PI]}
        scale={2.694}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_84_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22100, -540, -16077]}
        rotation={[Math.PI, -0.817, Math.PI]}
        scale={[0.48, 0.454, 0.48]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_79_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23136, -104, -24179]}
        rotation={[Math.PI, -0.077, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_20_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24090, -95, -20465]}
        rotation={[Math.PI, -0.247, Math.PI]}
        scale={2.694}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Campfire_01_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26632, -96, -16957]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Campfire_Pot_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26641.602, -96, -16970.801]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_77_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20860, -860, -25840]}
        rotation={[-Math.PI, 1.2, Math.PI]}
        scale={[0.58, 0.7, 0.58]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Campfire_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25037, -96, -15849.001]}
        rotation={[-Math.PI, -1.37, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Campfire_Pot_01_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25021.564, -96, -15855.662]}
        rotation={[-Math.PI, -1.37, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24421, -90, -28576.998]}
        rotation={[0, -0.721, 0]}
        scale={2.694}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_55_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-18280, 290, -25010]}
        rotation={[0, 0.15, 0]}
        scale={[2.827, 3.229, 2.827]}
      />
      <mesh
        geometry={nodes.SM_Bld_Tent_48_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-22850, -90, -27337]}
        rotation={[Math.PI, 0.23, Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_34_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-21684, -153, -19150]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_15_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25094, -95, -27139.002]}
        rotation={[-Math.PI, 0.19, Math.PI]}
        scale={1.744}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_66_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-27401.998, -95, -26554]}
        rotation={[0, -0.584, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23154, -95, -23865]}
        rotation={[0, 0.788, 0]}
        scale={1.194}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Fence_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27320.699, -107, -23962.602]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27034, -108, -25470]}
        scale={[2.11, 1.209, 2.11]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_04_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27941, -317, -23399]}
        rotation={[0, 1.262, 0]}
        scale={[0.458, 0.669, 0.458]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_67_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-32722, -456, -17782]}
        rotation={[-Math.PI, 1.254, -Math.PI]}
        scale={[0.259, 0.259, 0.231]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_64_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-24927, -95, -26196]}
        rotation={[Math.PI, 0.994, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_70_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-19330.01, -110, -22192.164]}
        rotation={[0, -0.602, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_68_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-29876.998, -664, -17706]}
        rotation={[0, 0.198, 0]}
        scale={[0.331, 0.331, 0.295]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_70_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-24231, -95, -25501]}
        rotation={[Math.PI, 0.52, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_53_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21996, -192, -19554]}
        rotation={[-Math.PI, -1.501, Math.PI]}
        scale={[1.177, 1.654, 1.177]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27525, -108, -25301]}
        rotation={[-Math.PI, -1.389, Math.PI]}
        scale={[2.11, 1.209, 2.11]}
      />
      <mesh
        geometry={nodes.SM_Prop_Well_02_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-27625, -113, -25248]}
        rotation={[0, -0.739, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_58_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22730, -560, -16097]}
        rotation={[-Math.PI, -1.403, Math.PI]}
        scale={[2.136, 2.021, 2.136]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26254, -91, -25103]}
        rotation={[0, 1.227, 0]}
        scale={1.319}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_72_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-18740, -660, -21310]}
        rotation={[Math.PI, -0.58, Math.PI]}
        scale={[0.477, 0.575, 0.477]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_55_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24691, -126, -17864]}
        rotation={[-Math.PI, -0.472, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_05_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21890, -162, -19350]}
        rotation={[0, 0.903, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_68_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-27818, -95, -24529]}
        rotation={[-Math.PI, -0.496, -Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_58_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26760, -390, -28460]}
        rotation={[-2.903, 0.555, 3.077]}
        scale={0.411}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_62_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27746.258, -190, -27652.045]}
        rotation={[Math.PI, -0.781, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_76_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-17970, -1020, -27060]}
        rotation={[0, 1.561, 0]}
        scale={[1.343, 1.621, 1.343]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_82_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24575, -137, -21689]}
        rotation={[-Math.PI, -0.836, Math.PI]}
        scale={[0.189, 0.12, 0.168]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_31_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-28939.002, -223, -24787]}
        rotation={[0, 0.459, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_10_9_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28615, -705, -22762]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_11_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27512.002, -875, -22763.008]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Bld_Dock_17_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-27118.002, -705, -22763.004]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_12_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28226, -705, -22763]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_11_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27881, -875, -22763.004]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_57_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22440, -100, -16017]}
        rotation={[-Math.PI, -0.697, Math.PI]}
        scale={[1.846, 1.994, 1.846]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_73_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26431, -151, -29482.998]}
        rotation={[Math.PI, 0.163, Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_71_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-24298, -95, -25759]}
        rotation={[0, -1.317, 0]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.SM_Bld_Dock_22_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-29684, -532, -25373]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_11_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28975, -702, -25372.998]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_Stairs_01_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28665, -129, -25372.998]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_10_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-29319.998, -532, -25372.998]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_10_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-30049, -532, -25372]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_12_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-30409, -532, -25372.002]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_10_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-30346, -702, -26840]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_11_15_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-29621.002, -872, -26841.006]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_11_16_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-29990, -872, -26841.004]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_17_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-29227.002, -702, -26841.004]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_17_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23459, -95, -18835]}
        rotation={[-Math.PI, 0.766, Math.PI]}
        scale={1.744}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-29081, -234, -24564]}
        rotation={[-Math.PI, -1.542, Math.PI]}
        scale={[0.458, 0.55, 0.458]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_61_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23680, -800, -28700]}
        rotation={[Math.PI, -0.393, Math.PI]}
        scale={[0.457, 0.457, 0.407]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_74_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-23111, -95, -24144]}
        rotation={[Math.PI, -1.108, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_29_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20097.809, -210, -24529.316]}
        rotation={[Math.PI, -0.661, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_74_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26651, -510, -18968]}
        rotation={[0, -0.886, 0]}
        scale={[0.306, 0.306, 0.273]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_83_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21430, -970, -15477]}
        rotation={[-Math.PI, -0.817, Math.PI]}
        scale={[0.877, 0.965, 0.877]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_56_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24344, -160, -17916]}
        rotation={[0, 0.936, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_61_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25205, -193, -20745]}
        rotation={[0, 0.272, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_85_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21526, -500.12, -14667.999]}
        rotation={[Math.PI, 0.766, Math.PI]}
        scale={[0.969, 0.946, 0.969]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_27_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-19329.557, -150, -24077.5]}
        rotation={[-Math.PI, 0.37, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_83_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-16241, -146, -21616]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_81_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20060, -310, -26510]}
        rotation={[0, -0.752, 0]}
        scale={[0.856, 0.82, 0.856]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_56_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-18330, 740, -26590]}
        rotation={[0, 0.414, 0]}
        scale={[3.86, 5.897, 5.164]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_80_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-19170, -1120, -26520.002]}
        rotation={[0, 0.27, 0]}
        scale={[1.343, 1.563, 1.343]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_16_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22324, -95, -25735]}
        rotation={[Math.PI, -0.19, Math.PI]}
        scale={1.744}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_66_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26310, -420, -32679.998]}
        rotation={[-Math.PI, 1.254, -Math.PI]}
        scale={[0.39, 0.39, 0.347]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_21_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21730, -94, -24382]}
        rotation={[0, -1.52, 0]}
        scale={2.461}
      />
      <mesh
        geometry={nodes.SM_Bld_Tent_44_PolygonPirates_Material_02_A_0.geometry}
        material={materials.PolygonPirates_Material_02_A}
        position={[-22175, -93, -26659]}
        rotation={[Math.PI, 0.644, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_18_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23053, -95, -16250.999]}
        rotation={[-Math.PI, -1.187, Math.PI]}
        scale={1.744}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_64_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22080, -170, -29050]}
        rotation={[0, -0.09, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20323, -105, -23522]}
        rotation={[Math.PI, -0.652, Math.PI]}
        scale={2.779}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24656, -95, -24681]}
        rotation={[0, -0.24, 0]}
        scale={1.744}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24470, -95, -22118]}
        rotation={[0, -0.981, 0]}
        scale={1.744}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_75_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-24339, -95, -23798]}
        rotation={[-Math.PI, 0.291, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_73_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-23044, -95, -23457]}
        rotation={[Math.PI, 0.42, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_57_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24000, -160, -15400]}
        rotation={[-Math.PI, -1.412, Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_69_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-28457, -95, -25632]}
        rotation={[Math.PI, 0.3, -Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_47_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-22530, -380, -17950]}
        rotation={[0, 0.007, 0]}
        scale={[3.022, 2.367, 3.022]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_78_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24227, -116, -34631]}
        rotation={[0, -0.755, 0]}
        scale={1.108}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_67_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-26637, -95, -25126]}
        rotation={[-Math.PI, -0.981, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_65_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-25102.9, -95, -26407.699]}
        rotation={[Math.PI, -0.269, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22343, -94, -22570]}
        scale={2.461}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_69_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26241, -109, -27991]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26975, -107, -24879]}
        scale={[1.806, 1.005, 1.806]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_74_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26117.002, -132, -29601.998]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_Pile_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26017.002, -109, -27235]}
        rotation={[-Math.PI, -0.016, Math.PI]}
        scale={[1.588, 2.668, 1.588]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_58_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28369, -160, -16032.001]}
        rotation={[Math.PI, -0.152, Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_33_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-22075, -133, -20231]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_77_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24447, -138, -34839]}
        rotation={[Math.PI, 1.55, -Math.PI]}
        scale={0.938}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_29_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-28131, -377, -18387]}
        scale={1.487}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_46_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-24350, -380, -16430]}
        rotation={[0, -0.555, 0]}
        scale={[3.022, 2.367, 3.022]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_65_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22200, -190, -29160]}
        rotation={[-Math.PI, 0.805, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_63_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21730, -660, -27979.998]}
        rotation={[-Math.PI, 0.071, Math.PI]}
        scale={[0.704, 0.849, 0.704]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_30_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-29735, -435, -18089]}
        rotation={[0, -1.287, 0]}
        scale={1.487}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_66_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-18592.65, -190, -22271]}
        rotation={[0, 1.366, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_63_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27639.637, -170, -27768.826]}
        rotation={[0, 1.496, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_75_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25876.998, -132, -32020.002]}
        rotation={[0, 1.349, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Shanty_Preset_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28574, -271, -27601]}
        rotation={[-Math.PI, 1.147, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_68_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23392, -109, -28782.998]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_69_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-29975, -560, -15778.999]}
        rotation={[-Math.PI, 1.299, -Math.PI]}
        scale={[0.259, 0.312, 0.259]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Shanty_Preset_23_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24711, -140, -28881]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_80_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20412, -100, -18278]}
        rotation={[0, -1.245, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_65_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26040, -800, -31279.998]}
        rotation={[0, 0.198, 0]}
        scale={[0.457, 0.457, 0.407]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_71_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23543, -110, -20943]}
        rotation={[0, 0.746, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_76_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24525, -132, -34752]}
        rotation={[-Math.PI, 0.175, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_72_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26401.998, -130, -29426.998]}
        rotation={[Math.PI, -0.245, Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_28_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-28367.002, -234, -18336]}
        rotation={[-0.257, -0.342, 0.312]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_73_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-19720, -481, -18760]}
        rotation={[-Math.PI, -0.678, Math.PI]}
        scale={[0.543, 0.655, 0.543]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_60_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25355, -173, -20695]}
        rotation={[Math.PI, -0.987, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_70_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20340, -420, -19330]}
        rotation={[0, -0.886, 0]}
        scale={[0.39, 0.39, 0.347]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_71_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-18670, -800, -20360]}
        rotation={[-Math.PI, 1.065, Math.PI]}
        scale={[0.457, 0.457, 0.407]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_64_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27603, -440, -14578.999]}
        rotation={[-Math.PI, -0.626, Math.PI]}
        scale={[0.604, 0.658, 0.604]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_52_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28375, -470, -14747]}
        rotation={[-Math.PI, -1.213, Math.PI]}
        scale={[2.688, 3.71, 2.688]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_30_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28451, -160, -18167]}
        rotation={[-Math.PI, 1.387, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_50_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-23780, -380, -25280]}
        rotation={[0, 0.035, 0]}
        scale={[4.149, 2.367, 3.972]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_54_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27251.002, -126, -16208]}
        rotation={[0, -1.148, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_51_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27870.002, -245, -14760.001]}
        rotation={[Math.PI, -0.506, Math.PI]}
        scale={[2.91, 4.346, 2.91]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_62_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25110, -660, -31060]}
        rotation={[Math.PI, 1.299, -Math.PI]}
        scale={[0.477, 0.575, 0.477]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Shanty_Preset_15_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-29276, -369, -25904]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_59_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28453, -115, -16158]}
        rotation={[-Math.PI, 0.022, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_52_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-31237, -169, -16557]}
        rotation={[-Math.PI, 0.305, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_51_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-31187, -160, -16445]}
        rotation={[-Math.PI, -0.237, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Shanty_Preset_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26934, -126, -27332]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Shanty_Preset_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26742.002, -128, -23716]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Shanty_Preset_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28648.002, -271, -24160]}
        rotation={[-Math.PI, -0.181, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Bld_Tent_26_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-27720.002, -97, -16879]}
        rotation={[Math.PI, 1.121, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Bld_Tent_01_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-27834, -100, -16071.001]}
        rotation={[Math.PI, 0.341, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_56_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-23100, -490, -31710]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[3.188, 1.088, 3.188]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_55_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-18560, -490, -19440]}
        rotation={[0, 0.321, 0]}
        scale={[3.188, 1.083, 3.188]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_54_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-29629.998, -460, -17060]}
        rotation={[Math.PI, 0.368, Math.PI]}
        scale={[2.483, 1.386, 2.483]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_53_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-24080, -380, -27950]}
        rotation={[0, -1.344, 0]}
        scale={[3.022, 2.367, 3.022]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_52_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-27090, -400, -25860]}
        rotation={[Math.PI, 0.309, Math.PI]}
        scale={[3.022, 2.435, 3.022]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_51_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-24840, -380, -22930]}
        rotation={[Math.PI, -0.046, Math.PI]}
        scale={[3.022, 2.367, 3.022]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_49_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-20630, -380, -23390]}
        rotation={[0, 1.189, 0]}
        scale={[3.022, 2.367, 3.022]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_48_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-23020, -380, -21000]}
        rotation={[-Math.PI, 0.936, Math.PI]}
        scale={[3.022, 2.367, 3.022]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_45_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-26200, -380, -16820]}
        rotation={[0, 1.497, 0]}
        scale={[3.022, 2.367, 3.022]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_75_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21948, -125, -19691]}
        rotation={[-Math.PI, 1.007, Math.PI]}
        scale={[0.297, 0.171, 0.297]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26247.998, -96.431, -21888.887]}
        rotation={[-2.995, 0.933, 3.039]}
        scale={0.672}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27276.709, -105.937, -23799.668]}
        rotation={[0.023, 0.292, 0.009]}
        scale={0.683}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_7_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24994.891, -89.541, -29247.477]}
        rotation={[3.133, -0.501, 3.129]}
        scale={0.736}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_8_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24562.623, -89.18, -29178.498]}
        rotation={[-0.001, 0.985, -0.001]}
        scale={0.736}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_9_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24261.492, -89.332, -29265.707]}
        rotation={[-0.002, 0.21, -0.001]}
        scale={0.655}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26130.123, -93.872, -28232.486]}
        rotation={[0.029, -1.16, 0.023]}
        scale={0.625}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26297.814, -101.886, -28075.123]}
        rotation={[0.161, -1.006, 0.171]}
        scale={0.67}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28202.424, -102.41, -26669.082]}
        rotation={[3.125, -0.688, 3.127]}
        scale={0.605}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20603.025, -89.251, -24200.627]}
        rotation={[-0.002, 0.89, -0.001]}
        scale={0.649}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20664.719, -88.697, -23900.451]}
        rotation={[-0.004, -1.386, -0.001]}
        scale={0.63}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_15_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20912.629, -88.534, -23789.141]}
        rotation={[3.14, 0.937, 3.141]}
        scale={0.631}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_16_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22789.297, -89.118, -25196.334]}
        rotation={[-0.002, -0.67, -0.005]}
        scale={0.647}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_17_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23698.316, -88.984, -26536.822]}
        rotation={[-0.002, 0.419, -0.001]}
        scale={0.605}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_18_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26884.021, -101.254, -24372.553]}
        rotation={[-3.141, 1.478, -3.136]}
        scale={0.702}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_19_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26439.986, -94.188, -26304.865]}
        rotation={[-0.123, 0.863, 0.119]}
        scale={0.636}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_24_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28236.92, -104.278, -25340.801]}
        rotation={[0.169, -1.517, 0.162]}
        scale={[0.956, 1.913, 0.956]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_25_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27340.797, -103.478, -24938.115]}
        rotation={[0.004, -1.051, 0.002]}
        scale={[0.95, 1.901, 0.95]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_26_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23244.771, -91.591, -25577.402]}
        rotation={[0.007, 1.205, -0.009]}
        scale={[0.931, 1.861, 0.931]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_27_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26854.865, -102.719, -25931.303]}
        rotation={[-0.001, 1.098, 0.001]}
        scale={[0.984, 1.967, 0.984]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_28_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27072.281, -103.79, -26832.27]}
        rotation={[-0.002, -0.848, 0.001]}
        scale={[0.903, 1.806, 0.903]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_29_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28749.729, -104.629, -26205.695]}
        rotation={[0.006, -0.645, 0.015]}
        scale={[0.948, 1.895, 0.948]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_30_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25761.207, -92.479, -25265.299]}
        rotation={[-0.003, 0.62, 0.001]}
        scale={[0.942, 1.883, 0.942]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_31_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27942.215, -105.359, -26954.705]}
        rotation={[0.003, -0.977, 0.01]}
        scale={[0.942, 1.884, 0.942]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_32_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27269.146, -104.598, -24218.689]}
        rotation={[0.007, 0.71, 0]}
        scale={[0.931, 1.862, 0.931]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_33_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24701.859, -91.882, -24267.316]}
        rotation={[-0.022, 1.512, 0.027]}
        scale={[0.939, 1.878, 0.939]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_34_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23543.852, -92.951, -22058.49]}
        rotation={[-0.003, 0.956, 0]}
        scale={[0.969, 1.938, 0.969]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_35_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22083.135, -92.105, -18875.631]}
        rotation={[-0.007, -0.629, -0.004]}
        scale={[0.935, 1.869, 0.935]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_36_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23498.826, -91.82, -17337.361]}
        rotation={[0.002, 0.459, 0.002]}
        scale={[0.942, 1.885, 0.942]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_37_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25008.049, -91.958, -17308.523]}
        rotation={[3.135, -1.189, 3.137]}
        scale={[0.902, 1.805, 0.902]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_38_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25016.787, -91.53, -16057.815]}
        rotation={[0.002, 0.193, 0.002]}
        scale={[0.941, 1.881, 0.941]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_39_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26369.293, -91.147, -16816.689]}
        rotation={[3.141, 0.914, 3.141]}
        scale={[0.922, 1.844, 0.922]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_40_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27260.102, -92.111, -16945.977]}
        rotation={[0.013, -1.408, 0.014]}
        scale={[0.926, 1.851, 0.926]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_41_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26756.51, -92.068, -15797.954]}
        rotation={[0.004, -0.771, 0.002]}
        scale={[0.964, 1.927, 0.964]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_42_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23623.623, -91.254, -25092.139]}
        rotation={[0.006, 1.269, -0.006]}
        scale={[0.952, 1.905, 0.952]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_43_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24100.885, -91.363, -22892.621]}
        rotation={[3.14, 0.846, -3.139]}
        scale={[0.908, 1.816, 0.908]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_44_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23330.352, -92.493, -23332.07]}
        rotation={[0.001, -0.431, 0.001]}
        scale={[0.929, 1.857, 0.929]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_45_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20939.314, -92.342, -24940.809]}
        rotation={[-0.095, 1.445, 0.085]}
        scale={[0.932, 1.864, 0.932]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_46_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22704.488, -93.392, -26782.617]}
        rotation={[3.102, 0.884, -3.121]}
        scale={[0.923, 1.845, 0.923]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_47_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21116.697, -92.562, -21928.066]}
        rotation={[-0.006, 1.298, 0.006]}
        scale={[0.902, 1.803, 0.902]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_02_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27866.955, -103.79, -25834.555]}
        rotation={[-0.002, 0.693, 0.003]}
        scale={[0.982, 1.964, 0.982]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_02_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25787.092, -94.536, -26765]}
        rotation={[-0.063, 1.119, 0.048]}
        scale={[0.954, 1.907, 0.954]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_02_7_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25970.352, -92.995, -22323.127]}
        rotation={[0, 1.172, 0.001]}
        scale={[0.966, 1.931, 0.966]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_02_8_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26720.99, -91.832, -17252.355]}
        rotation={[-0.002, -0.01, 0.001]}
        scale={[0.929, 1.859, 0.929]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_02_9_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24202.365, -91.785, -17497.879]}
        rotation={[-0.002, 0.528, -0.001]}
        scale={[0.926, 1.853, 0.926]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_02_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23376.535, -91.531, -18092.344]}
        rotation={[0.021, -1.477, 0.022]}
        scale={[0.922, 1.844, 0.922]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_02_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25416.248, -92.581, -15642.424]}
        rotation={[-3.139, 0.445, -3.131]}
        scale={[0.961, 1.923, 0.961]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_02_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22518.516, -91.572, -21416.379]}
        rotation={[-0.002, -0.117, -0.001]}
        scale={[0.93, 1.861, 0.93]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_02_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24727.592, -91.465, -27925.381]}
        rotation={[0.004, -0.831, 0.004]}
        scale={[0.918, 1.836, 0.918]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_02_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21181.482, -91.326, -23446.752]}
        rotation={[-0.001, -0.362, 0.001]}
        scale={[0.936, 1.872, 0.936]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_02_15_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23524.783, -91.816, -27641.541]}
        rotation={[0.033, 1.527, -0.032]}
        scale={[0.972, 1.943, 0.972]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_02_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23260.836, -188.836, -27917.883]}
        rotation={[-0.003, -1.089, -0.004]}
        scale={1.377}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_02_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21611.443, -227.174, -27004.523]}
        rotation={[-2.984, -0.848, -2.59]}
        scale={1.318}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_02_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24478.102, -153, -23823.699]}
        rotation={[-3.139, -1.339, 3.139]}
        scale={1.016}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_02_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23384.979, -188.695, -24588.59]}
        rotation={[0, -0.614, -0.004]}
        scale={1.796}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_02_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23194.012, -190.313, -22628.178]}
        rotation={[0.045, 1.434, -0.042]}
        scale={1.059}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_02_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-19293.66, -199.179, -21907.068]}
        rotation={[0.214, 0.627, -0.032]}
        scale={1.311}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_02_7_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-19030.824, -191.502, -22561.895]}
        rotation={[0.009, 0.3, -0.011]}
        scale={1.881}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_02_8_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23548.232, -188.597, -20308.988]}
        rotation={[-3.139, 0.801, 3.139]}
        scale={1.206}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_02_9_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26822.918, -193.905, -18469.131]}
        rotation={[0.164, -1.393, 0.257]}
        scale={1.072}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_02_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25163.703, -300, -19677.484]}
        rotation={[0, -1.304, 0]}
        scale={1.318}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_02_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27414.969, -202.063, -27208.029]}
        rotation={[-Math.PI, -1.235, Math.PI]}
        scale={1.323}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_02_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28842.563, -280.581, -27277.99]}
        rotation={[-Math.PI, -0.993, Math.PI]}
        scale={1.51}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_02_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-18310, -300, -23620]}
        rotation={[Math.PI, 0.632, -Math.PI]}
        scale={1.491}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_02_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-18552, -304, -15928.999]}
        rotation={[0, 0.349, 0]}
        scale={1.806}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_01_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23232.742, -138.827, -28834.066]}
        rotation={[0, -0.19, 0]}
        scale={1.714}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_01_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22541.373, -145.102, -27611.512]}
        rotation={[0, 0.455, 0]}
        scale={1.676}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_01_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23486.137, -138.453, -28547.242]}
        rotation={[0, -1.24, 0]}
        scale={1.374}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_01_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20584.889, -138.154, -23318.182]}
        rotation={[0, -0.432, 0]}
        scale={1.239}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_01_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23123.744, -140.936, -22467.031]}
        rotation={[0, 1.225, 0]}
        scale={1.601}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_01_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23489.248, -138.771, -24378.838]}
        rotation={[0, 0.53, 0]}
        scale={1.313}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_01_7_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25572, -139, -22929]}
        rotation={[-Math.PI, 0.965, Math.PI]}
        scale={1.538}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_01_8_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26800.52, -238.624, -21837.758]}
        rotation={[Math.PI, 1.096, -Math.PI]}
        scale={1.262}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_01_9_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-29265.064, -250, -25128.129]}
        rotation={[Math.PI, -1.075, Math.PI]}
        scale={1.742}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_01_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-29242.893, -250, -26485.074]}
        rotation={[-Math.PI, 0.594, -Math.PI]}
        scale={1.434}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_01_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28376.145, -182.074, -27403.506]}
        rotation={[0, 0.804, 0]}
        scale={1.098}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_01_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28331.617, -213.1, -23974.109]}
        rotation={[0, 0.949, 0]}
        scale={1.42}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_01_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24110.52, -138.68, -26446.539]}
        rotation={[0, -0.737, 0]}
        scale={1.171}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_01_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-19136.404, -100.518, -23015.594]}
        rotation={[-Math.PI, 0.953, Math.PI]}
        scale={1.183}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_01_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23355, -99, -15078.999]}
        rotation={[-Math.PI, 1.456, -Math.PI]}
        scale={1.031}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_01_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22498.664, -99.963, -28446.152]}
        rotation={[0, 0.823, 0]}
        scale={1.366}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_01_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21722.486, -100.404, -25077.258]}
        rotation={[0, -0.685, 0]}
        scale={1.559}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_01_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-18600, -430, -17270]}
        rotation={[0, -1.403, 0]}
        scale={1.659}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25054.779, -196.331, -19572.402]}
        rotation={[0, 0.214, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25126.504, -145.148, -20701.307]}
        rotation={[0, -1.343, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25794, -103, -22232]}
        rotation={[0, -0.354, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25846, -99, -22779]}
        rotation={[Math.PI, -0.774, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26369.266, -100.085, -22962.889]}
        rotation={[0, 0.685, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26979.336, -162.735, -22999.859]}
        rotation={[0, 0.196, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_7_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28149.945, -117.881, -24635.613]}
        rotation={[-Math.PI, 1.423, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_8_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26654.508, -109.728, -25859.406]}
        rotation={[0, -0.414, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_9_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26645.828, -106.021, -25435.334]}
        rotation={[0, 0.675, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28226.627, -111.828, -26436.975]}
        rotation={[0, 0.914, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-29008.725, -161.599, -26670.594]}
        rotation={[Math.PI, -1.258, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28881.715, -116.559, -25822.119]}
        rotation={[0, 0.711, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25501.35, -100.3, -27680.316]}
        rotation={[0, 1.374, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25197.371, -99.692, -28814.746]}
        rotation={[0, -0.8, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_15_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24267.574, -98.286, -27803.428]}
        rotation={[Math.PI, -1.473, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_16_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23259.744, -99.543, -27301.258]}
        rotation={[0, 1.019, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_17_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23142.254, -99.131, -26362.24]}
        rotation={[0, 1.12, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_18_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22308.297, -99.738, -25074.459]}
        rotation={[0, 1.54, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_19_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23483.701, -98.908, -24228.223]}
        rotation={[-Math.PI, 1.138, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_20_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23639.848, -98.762, -24264.381]}
        rotation={[0, -0.353, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_21_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22525.166, -101.634, -23314.811]}
        rotation={[Math.PI, -1.53, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_22_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23089.707, -100.405, -22257.479]}
        rotation={[0, -0.145, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_23_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22331.424, -99.423, -21866.178]}
        rotation={[0, 0.759, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_24_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23400.563, -98.561, -20154.166]}
        rotation={[-Math.PI, 1.433, -Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_25_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23442, -100, -19263]}
        rotation={[0, -0.708, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_26_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23075.076, -98.284, -18207.053]}
        rotation={[Math.PI, 1.031, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_27_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22319.674, -98.541, -17471.182]}
        rotation={[0, 1.282, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_28_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21472.713, -99.748, -18291.391]}
        rotation={[Math.PI, -0.909, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_29_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20588.529, -103.585, -19761.615]}
        rotation={[-Math.PI, 1.039, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_30_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23402, -100, -15533]}
        rotation={[Math.PI, 0.914, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_31_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25042.275, -99.74, -15394.209]}
        rotation={[0, 0.406, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_32_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26974.23, -100.436, -15390.435]}
        rotation={[0, 1.089, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_33_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26951.059, -98.542, -16752.348]}
        rotation={[0, -1.393, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_34_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27791.02, -101.799, -17077.18]}
        rotation={[0, -1.125, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_35_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27599.182, -112.443, -17786.996]}
        rotation={[0, -0.385, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_36_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-29469.543, -158.14, -17756.42]}
        rotation={[0, -1.177, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_37_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-31127.654, -167.068, -16544.818]}
        rotation={[0, -0.155, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_38_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26330.316, -117.948, -29518.002]}
        rotation={[Math.PI, -1.06, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_39_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22260.59, -102.946, -29142.693]}
        rotation={[0, 1.149, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_40_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24998.918, -165.647, -30379.488]}
        rotation={[0, 1.408, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_41_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22735.703, -101.12, -27743.516]}
        rotation={[0, -0.753, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_42_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22275.322, -100.833, -24027.166]}
        rotation={[Math.PI, 0.862, -Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_43_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21354.127, -104.044, -24727.734]}
        rotation={[0, 0.792, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_44_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27427.023, -111.074, -24591.115]}
        rotation={[0, -0.004, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_01_45_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27677.973, -110.537, -25363.744]}
        rotation={[-Math.PI, -1.42, Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26166.662, -78.785, -25126.643]}
        rotation={[0, 1.02, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27347.402, -110.016, -26181.25]}
        rotation={[-Math.PI, 1.387, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28874.258, -116.867, -26047.18]}
        rotation={[Math.PI, 0.955, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28120.637, -147.424, -24006.648]}
        rotation={[Math.PI, -0.351, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26252.393, -100.265, -22917.039]}
        rotation={[0, -0.38, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25846, -102, -22294]}
        rotation={[-Math.PI, 1.424, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_7_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23816.57, -99.59, -19797.369]}
        rotation={[Math.PI, 1.455, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_8_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23347.799, -99.91, -22512.221]}
        rotation={[Math.PI, 1.419, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_9_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23084.092, -98.84, -23160.133]}
        rotation={[Math.PI, -1.413, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23559.529, -98.528, -24573.896]}
        rotation={[0, -0.934, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24189.014, -98.927, -26653.547]}
        rotation={[0, -0.02, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmBush_03_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22344.561, -100.548, -23449.689]}
        rotation={[-Math.PI, -1.325, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmBush_03_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20521.395, -100.252, -24897.582]}
        rotation={[0, 0.018, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmBush_03_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21882.945, -99.243, -20218.955]}
        rotation={[0, -0.292, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmBush_03_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24644.695, -100.338, -18043.025]}
        rotation={[0, 0.926, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmBush_03_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26644.342, -99.679, -17799.541]}
        rotation={[0, 1.506, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmBush_03_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27341.068, -115.673, -23828.086]}
        rotation={[0, 0.959, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmBush_03_7_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-29012.885, -158.011, -26543.076]}
        rotation={[-Math.PI, 1.442, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmBush_03_8_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25817.881, -101.222, -27846.809]}
        rotation={[0, 0.625, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmBush_03_9_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23450.127, -99.36, -29144.961]}
        rotation={[0, -0.783, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_97_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-19468.635, -1422.852, -17425.844]}
        rotation={[0, -1.209, 0]}
        scale={[5.885, 8.736, 5.827]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_98_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-23846.391, -1422.852, -15059.543]}
        rotation={[-Math.PI, 1.51, -Math.PI]}
        scale={[5.885, 8.736, 5.827]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_99_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-30389.84, -1422.852, -16387.086]}
        rotation={[-Math.PI, 0.767, -Math.PI]}
        scale={[5.885, 8.736, 3.799]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_100_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26637.678, -1422.852, -19679.244]}
        rotation={[0, 1.392, 0]}
        scale={[5.885, 8.736, 3.799]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_96_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-17387.129, -1422.852, -20912.555]}
        rotation={[0, -0.378, 0]}
        scale={[5.885, 8.736, 5.827]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_101_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28041.801, -1422.852, -24336.516]}
        rotation={[0, -1.276, 0]}
        scale={[5.885, 8.736, 3.799]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_102_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-29095.273, -1422.852, -27247.906]}
        rotation={[-Math.PI, -1.143, Math.PI]}
        scale={[5.885, 8.736, 3.799]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_103_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25841.635, -1422.852, -32675.9]}
        rotation={[0, 1.516, 0]}
        scale={[5.885, 8.736, 3.799]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_104_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22558.375, -1422.852, -33199.828]}
        rotation={[0, -0.834, 0]}
        scale={[5.885, 8.736, 3.799]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_105_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-19187.232, -1422.852, -29104.334]}
        rotation={[0, -1.227, 0]}
        scale={[5.885, 8.736, 3.799]}
      />
      <mesh
        geometry={
          nodes
            .SM_Veh_Boat_Rowing_01_Hull_Pirate_7_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27839.078, -66, -18255.313]}
        rotation={[-0.121, -0.169, -3.017]}
      />
    </group>
  );
}