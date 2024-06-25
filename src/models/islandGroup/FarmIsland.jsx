import PropTypes from "prop-types";
import { useCompoundBody } from "@react-three/cannon";

export default function FarmIsland({ nodes, materials }) {
  
  const shapes = [
    { rotation: [0, .5, 0], position: [150, 0, -245], args: [50, 10, 80] },    
    { rotation: [0, .5, 0], position: [180, 0, -270], args: [43, 10, 60] },    
    { rotation: [0, .5, 0], position: [170, 0, -208], args: [15, 10, 15] },
    { rotation: [0, .5, 0], position: [125, 0, -280], args: [45, 10, 5] },
    { rotation: [0, .5, 0], position: [115, 0, -250], args: [5, 10, 35] },
  ]

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
    <group position={[13794.702, -1657.335, 9463.403]}>
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_24_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[429, 15, -33502]}
        rotation={[0, -0.724, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_22_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[631.298, 15, -33323.18]}
        rotation={[0, -0.724, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_Top_01_10_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[631.298, 177, -33323.18]}
        rotation={[0, -0.724, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_02_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[234.195, 15, -33674.195]}
        rotation={[0, -0.724, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_01_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[6.469, 15, -33828.773]}
        rotation={[0, -0.585, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_23_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-221.195, 15, -33979.434]}
        rotation={[0, -0.585, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_02_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-415.4, 15, -34156.297]}
        rotation={[0, -0.758, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_24_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-613.736, 15, -34343.895]}
        rotation={[0, -0.758, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_03_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-794.916, 15, -34543.813]}
        rotation={[0, -0.876, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_25_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-969.674, 15, -34753.551]}
        rotation={[0, -0.876, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_04_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1058.399, 15, -35014.285]}
        rotation={[0, -1.281, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_26_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1136.357, 15, -35275.918]}
        rotation={[0, -1.504, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_Top_01_11_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1136.357, 178, -35275.918]}
        rotation={[0, -1.504, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_23_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1784, 10, -32404]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_27_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1784, 10, -32660]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_01_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1524, 10, -32697]}
        rotation={[0, -0.148, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_28_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1268.838, 10, -32735.162]}
        rotation={[0, -0.148, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_Top_01_12_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1268.838, 171, -32735.162]}
        rotation={[0, -0.148, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_02_2_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1784, 10, -32132]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_01_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1862, 10, -31883.002]}
        rotation={[-Math.PI, 1.25, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_29_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1946.478, 10, -31628.662]}
        rotation={[-Math.PI, 0.99, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_01_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2159.064, 10, -31481.707]}
        rotation={[-Math.PI, 0.569, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_30_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2380.581, 10, -31339.936]}
        rotation={[-Math.PI, 0.569, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_Top_01_13_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2380.581, 173, -31339.936]}
        rotation={[-Math.PI, 0.569, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_10_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-727, -508, -31450]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_10_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-461.613, -508, -31716.801]}
        rotation={[-Math.PI, 0.785, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_11_17_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[297.815, -678, -32476.236]}
        rotation={[-Math.PI, 0.785, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_17_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[576.418, -508, -32754.834]}
        rotation={[-Math.PI, 0.785, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_12_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-207.055, -508, -31971.359]}
        rotation={[-Math.PI, 0.785, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_11_18_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[36.895, -678, -32215.314]}
        rotation={[-Math.PI, 0.785, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_Bridge_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-451.716, -15, -32230.16]}
        rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_17_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-704.861, -501, -32470.574]}
        rotation={[0, -0.785, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_01_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-445.356, -501, -32730.088]}
        rotation={[0, -0.785, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_Stairs_01_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-228.981, -93, -32946.461]}
        rotation={[0, -0.785, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_96_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8020, -650, -34400]}
        rotation={[0, -1.17, 0]}
        scale={[0.305, 0.449, 0.271]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_85_1_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[3723, 0, -33602]}
        rotation={[0, -0.3, 0]}
        scale={[1.12, 0.832, 1.461]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Mansion_Stairs_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1073, -191, -34107]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_01_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1065, -94, -34523]}
        scale={[1, 0.518, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_02_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1517, -95.037, -34523]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.089, 0.518, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_03_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1872, -94, -34523]}
        scale={[1, 0.518, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_04_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2106, -94, -34185]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.39, 0.518, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_05_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2416, -94, -33872]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.39, 0.518, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_06_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2833, -94, -33872]}
        scale={[1.39, 0.518, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_07_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3138, -94, -34604]}
        rotation={[0, 1.571, 0]}
        scale={[1.39, 0.518, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_08_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3138, -94, -34187.004]}
        rotation={[0, -1.571, 0]}
        scale={[1.39, 0.518, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_09_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3138, -94, -35059.004]}
        rotation={[0, -1.571, 0]}
        scale={[0.983, 0.518, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_10_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3138, -94, -35355]}
        rotation={[0, 1.571, 0]}
        scale={[0.983, 0.518, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_11_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2636, -94, -35560]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.983, 0.518, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_12_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2932, -94, -35560]}
        scale={[0.983, 0.518, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_13_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2178, -94, -35560]}
        scale={[1.402, 0.518, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_14_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1756, -94, -35560]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.402, 0.518, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_15_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1021, -94, -35560]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.825, 0.518, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_16_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1270, -94, -35560]}
        scale={[0.825, 0.518, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_17_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[858, -94, -35086]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.969, 0.518, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_18_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[858, -94, -34729]}
        rotation={[0, -1.571, 0]}
        scale={[0.969, 0.518, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_19_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[858, -94, -35358]}
        rotation={[0, -1.571, 0]}
        scale={[0.969, 0.518, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_32_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3521, -30, -33518]}
        rotation={[-Math.PI, -1.494, -Math.PI]}
        scale={0.787}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Debris_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1605, 26, -32500]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_41_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[180, -330, -37300]}
        rotation={[-Math.PI, -0.174, -Math.PI]}
        scale={1.555}
      />
      <mesh
        geometry={
          nodes.SM_Prop_SugarCane_Pile_01_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[667, 85, -34561]}
        rotation={[0, -1.509, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3470.721, 76.962, -32673.15]}
        rotation={[0, 0.193, 0]}
        scale={1.024}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3376.511, 77.198, -32759.379]}
        rotation={[0, 1.039, 0]}
        scale={0.918}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3285.992, 76.487, -32788.867]}
        rotation={[0, 0.604, 0]}
        scale={0.815}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3245.834, 75.113, -32949.297]}
        rotation={[0, 0.288, 0]}
        scale={0.896}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3176.035, 70.64, -32923.684]}
        rotation={[-Math.PI, 0.929, -Math.PI]}
        scale={0.899}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3474.945, 77.389, -33194.801]}
        rotation={[0, 1.317, 0]}
        scale={0.811}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3639.581, 77.48, -33319.773]}
        rotation={[0, -0.962, 0]}
        scale={0.911}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_7_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3740.979, 77.485, -33423.219]}
        rotation={[-Math.PI, 0.062, -Math.PI]}
        scale={0.869}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_8_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3881.116, 77.413, -33533.961]}
        rotation={[-Math.PI, 0.839, -Math.PI]}
        scale={0.859}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_9_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3952.448, 77.607, -33422.48]}
        rotation={[0, 0.585, 0]}
        scale={1.061}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4019.293, 77.597, -33432.625]}
        rotation={[0, 0.406, 0]}
        scale={0.908}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4058.063, 77.698, -33332.75]}
        rotation={[-Math.PI, -0.093, -Math.PI]}
        scale={0.919}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4120.114, 77.62, -33360.539]}
        rotation={[-Math.PI, -0.251, -Math.PI]}
        scale={0.923}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4043.161, 77.688, -33178.082]}
        rotation={[-Math.PI, -1.195, -Math.PI]}
        scale={0.864}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4136.292, 77.682, -33267.574]}
        rotation={[0, 1.369, 0]}
        scale={0.999}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_15_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3872.91, 77.647, -33013.902]}
        rotation={[-Math.PI, 1.259, -Math.PI]}
        scale={1.009}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_16_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3736.966, 77.567, -32877.781]}
        rotation={[0, 0.882, 0]}
        scale={0.812}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_17_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3580.328, 77.315, -32758.24]}
        rotation={[0, -0.13, 0]}
        scale={0.935}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_18_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3681.952, 77.531, -32844.184]}
        rotation={[0, 0.93, 0]}
        scale={1.039}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_19_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3633.258, 77.553, -32955.574]}
        rotation={[0, 0.214, 0]}
        scale={1.13}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_20_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3494.379, 77.432, -33015.66]}
        rotation={[-Math.PI, 1.044, -Math.PI]}
        scale={0.883}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_21_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3677.863, 77.629, -33154.191]}
        rotation={[-Math.PI, -0.134, -Math.PI]}
        scale={0.808}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_22_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3605.899, 77.466, -33284.395]}
        rotation={[-Math.PI, 1.03, -Math.PI]}
        scale={0.951}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_23_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3831.875, 77.688, -33291.137]}
        rotation={[0, -0.232, 0]}
        scale={1.001}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_24_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3846.237, 77.519, -33463.945]}
        rotation={[0, -0.023, 0]}
        scale={1.148}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_25_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3820.267, 77.647, -33008.133]}
        rotation={[0, 1.17, 0]}
        scale={0.985}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_26_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3867.294, 77.708, -33190.117]}
        rotation={[0, 1.354, 0]}
        scale={0.855}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_80_1_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2658, 10, -32766]}
        rotation={[-Math.PI, 0.135, -Math.PI]}
        scale={[1, 0.671, 1.383]}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3887.335, 77.484, -33493.27]}
        rotation={[0, 0.926, 0]}
        scale={0.904}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3800.76, 77.519, -33438.441]}
        rotation={[-Math.PI, -0.443, -Math.PI]}
        scale={0.855}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3760.614, 77.539, -33389.086]}
        rotation={[-Math.PI, 1.015, -Math.PI]}
        scale={0.917}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3689.148, 77.542, -33319.934]}
        rotation={[0, -0.671, 0]}
        scale={1.054}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3642.938, 77.515, -33283.695]}
        rotation={[0, -0.117, 0]}
        scale={0.812}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3584.07, 77.473, -33233.48]}
        rotation={[0, 1.562, 0]}
        scale={0.879}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3506.143, 77.434, -33174.688]}
        rotation={[0, 0.837, 0]}
        scale={0.942}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_7_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3440.665, 77.414, -33130.141]}
        rotation={[0, 0.901, 0]}
        scale={0.83}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_8_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3364.624, 76.983, -33078.746]}
        rotation={[-Math.PI, -0.246, -Math.PI]}
        scale={0.816}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_9_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3281.03, 76.038, -33007.609]}
        rotation={[0, -1.305, 0]}
        scale={0.981}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3239.328, 74.209, -32974.813]}
        rotation={[0, 0.029, 0]}
        scale={0.827}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3954.681, 77.631, -33405.371]}
        rotation={[-Math.PI, 0.71, -Math.PI]}
        scale={0.963}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3880.167, 77.665, -33336.422]}
        rotation={[-Math.PI, 0.882, -Math.PI]}
        scale={0.815}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3800.354, 77.691, -33238.82]}
        rotation={[-Math.PI, 0.782, -Math.PI]}
        scale={0.903}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3724.777, 77.66, -33175.648]}
        rotation={[0, 0.336, 0]}
        scale={0.858}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_15_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3622.91, 77.569, -33100.465]}
        rotation={[0, 1.109, 0]}
        scale={0.906}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_16_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3555.121, 77.486, -33040.73]}
        rotation={[-Math.PI, 0.926, -Math.PI]}
        scale={1.076}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_17_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3463.269, 77.402, -32975.969]}
        rotation={[-Math.PI, 0.975, -Math.PI]}
        scale={1.104}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_18_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3408.811, 77.316, -32892.992]}
        rotation={[-Math.PI, 1.428, -Math.PI]}
        scale={1.072}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_19_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3326.626, 76.888, -32840.137]}
        rotation={[0, 0.237, 0]}
        scale={0.924}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_20_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3417.374, 77.206, -32784.73]}
        rotation={[0, 1.026, 0]}
        scale={1.102}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_21_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3517.575, 77.349, -32846.004]}
        rotation={[0, -1.342, 0]}
        scale={0.835}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_22_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3601.761, 77.507, -32920.625]}
        rotation={[-Math.PI, 1.289, -Math.PI]}
        scale={0.818}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_23_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3684.83, 77.598, -32980.48]}
        rotation={[0, 1.202, 0]}
        scale={0.999}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_24_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3756.644, 77.669, -33060.398]}
        rotation={[-Math.PI, -0.922, -Math.PI]}
        scale={0.919}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_25_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3835.779, 77.694, -33123.242]}
        rotation={[0, 0.956, 0]}
        scale={0.808}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_26_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3924.075, 77.704, -33234.285]}
        rotation={[0, 0.52, 0]}
        scale={1.044}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_27_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3978.9, 77.69, -33293.219]}
        rotation={[-Math.PI, 0.338, -Math.PI]}
        scale={1.133}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_28_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4042.209, 77.689, -33337.051]}
        rotation={[0, -0.929, 0]}
        scale={0.895}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_29_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4076.697, 77.719, -33249.152]}
        rotation={[0, 0.696, 0]}
        scale={1.102}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_30_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4023.929, 77.692, -33193.012]}
        rotation={[-Math.PI, -0.733, -Math.PI]}
        scale={0.851}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_31_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3960.855, 77.686, -33120.906]}
        rotation={[-Math.PI, -0.215, -Math.PI]}
        scale={0.991}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_32_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3868.176, 77.656, -33033.836]}
        rotation={[0, -0.574, 0]}
        scale={1.096}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_33_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3773.642, 77.615, -32955.984]}
        rotation={[0, 0.321, 0]}
        scale={1.069}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_34_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3708.914, 77.563, -32872.168]}
        rotation={[0, 0.804, 0]}
        scale={1.003}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_35_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3621.402, 77.41, -32793.523]}
        rotation={[0, -1.529, 0]}
        scale={1.09}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_36_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3547.119, 77.229, -32724.838]}
        rotation={[0, 0.66, 0]}
        scale={0.995}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_81_1_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2254, 10, -34068]}
        rotation={[0, 1.172, 0]}
        scale={[1, 0.532, 1.235]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_31_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3509, -30, -34622]}
        rotation={[0, -1.487, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Fishing_Crate_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[982, -19, -32173.002]}
        rotation={[-2.957, 0.294, 2.967]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_62_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3232, -390, -29982.998]}
        rotation={[-Math.PI, 1.253, -Math.PI]}
        scale={1.464}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_39_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1584, -110, -36556]}
        rotation={[0, -0.098, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_40_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[824, -330, -31694]}
        rotation={[-Math.PI, -1.197, -Math.PI]}
        scale={1.555}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_83_1_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1589, 10, -33647]}
        rotation={[0, 1.076, 0]}
        scale={[0.787, 0.566, 1.647]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_93_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1270, -660, -29910]}
        rotation={[-Math.PI, -0.761, -Math.PI]}
        scale={[0.422, 0.422, 0.376]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_38_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-2809, -330, -35875]}
        rotation={[-Math.PI, -1.197, -Math.PI]}
        scale={1.555}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_36_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[2023, -110, -30335]}
        rotation={[0, -1.184, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Debris_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1257, 14, -32503]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_74_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1310, -410, -34250]}
        rotation={[0, 0.141, 0]}
        scale={[2.339, 3.55, 2.87]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_95_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4890, -470, -33960]}
        rotation={[0, -0.307, 0]}
        scale={[0.624, 0.624, 0.555]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_84_1_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[3146, 0, -35744]}
        rotation={[0, 0.241, 0]}
        scale={[1.12, 1.464, 1.461]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_76_1_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1524, 6, -35088]}
        rotation={[0, 0.61, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Debris_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-503.818, 15, -33890.77]}
        rotation={[0, 1.134, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_79_1_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[259, 5, -34988]}
        rotation={[0, 1.109, 0]}
        scale={[1, 0.671, 1.235]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_30_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[541, 12, -35136]}
        rotation={[-Math.PI, 0.028, -Math.PI]}
        scale={0.71}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_72_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-290, -410, -35080]}
        rotation={[-Math.PI, -1.156, -Math.PI]}
        scale={[2.339, 3.55, 2.87]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_82_1_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2506, 10, -34562]}
        rotation={[0, -0.394, 0]}
        scale={[1, 1.839, 1.235]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_77_1_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2887, 6, -34618]}
        rotation={[0, 0.241, 0]}
        scale={[1, 1, 1.304]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_75_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2740, -410, -32760]}
        rotation={[0, -0.355, 0]}
        scale={[2.507, 3.55, 3.143]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_73_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2183, -410, -35720]}
        rotation={[0, 0.846, 0]}
        scale={[1.937, 3.55, 2.87]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_94_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3742, -470, -30153]}
        rotation={[0, 1.239, 0]}
        scale={[0.422, 0.422, 0.376]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_63_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2649, -390, -36395]}
        rotation={[-Math.PI, 0.167, -Math.PI]}
        scale={1.464}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Fishing_Crate_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1045, -21, -32104.998]}
        rotation={[0.096, 0.541, -0.032]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_37_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[1777, -330, -29850]}
        rotation={[-Math.PI, -0.111, -Math.PI]}
        scale={1.555}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_78_1_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2311, 6, -35316]}
        rotation={[-Math.PI, 0.882, -Math.PI]}
        scale={[1, 0.824, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_20_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[605.538, 87.006, -35273.633]}
        rotation={[0.094, 1.47, -0.105]}
        scale={0.649}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_21_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[525.671, 87.49, -34996.227]}
        rotation={[-0.004, -0.529, -0.004]}
        scale={0.654}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_22_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1847.366, 79.733, -33362.309]}
        rotation={[-3.124, -1.133, -3.127]}
        scale={0.659}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_23_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1598.5, 79.8, -33751.199]}
        rotation={[3.122, 1.497, -3.125]}
        scale={0.727}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_24_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2447.411, 91.835, -33393.461]}
        rotation={[3.117, -0.621, 3.131]}
        scale={0.637}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_25_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2058.162, 230.729, -33823.184]}
        rotation={[3.091, -1.441, 3.076]}
        scale={0.723}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_26_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2139.915, 92.225, -32446.512]}
        rotation={[0.023, -0.018, 0.011]}
        scale={0.654}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_27_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2509.61, 24.607, -31318.197]}
        rotation={[-3.127, 1.564, 3.13]}
        scale={0.718}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_28_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3150.61, 23.594, -31417.867]}
        rotation={[-3.137, -0.122, -3.14]}
        scale={0.669}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_29_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3610.401, 24.539, -32146.139]}
        rotation={[0, -0.843, -0.004]}
        scale={0.628}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_30_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3102.414, 92.313, -32591.451]}
        rotation={[0.031, 1.493, -0.027]}
        scale={0.654}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_31_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[837.253, 25.366, -33156.098]}
        rotation={[0.005, -1.24, 0.002]}
        scale={0.68}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_32_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1236.735, 26.39, -32820.473]}
        rotation={[-3.13, 0.89, 3.133]}
        scale={0.655}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_33_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[938.945, 78.859, -33482.922]}
        rotation={[-2.728, 1.455, 2.735]}
        scale={0.622}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_34_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1335.467, 79.689, -33873.234]}
        rotation={[-0.01, 1.337, 0.007]}
        scale={0.606}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_35_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1067.496, 77.151, -34226.617]}
        rotation={[-0.265, 1.128, 0.198]}
        scale={0.632}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_36_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[376.156, 75.598, -34022.09]}
        rotation={[-1.018, 1.329, 1.027]}
        scale={0.661}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_37_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[254.365, 87.701, -34860.184]}
        rotation={[0.001, -1.254, 0.001]}
        scale={0.701}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_38_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-234.429, 87.019, -34688.922]}
        rotation={[-0.005, 0.889, 0.013]}
        scale={0.682}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_39_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[732.178, 86.984, -34569.691]}
        rotation={[-0.03, -1.322, -0.041]}
        scale={0.603}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_40_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[269.479, 87.578, -35130.566]}
        rotation={[-0.003, -0.7, -0.001]}
        scale={0.675}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_41_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1068.571, 26.607, -35382.672]}
        rotation={[0, -0.036, 0.002]}
        scale={0.68}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_42_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-640.921, 26.979, -35793.375]}
        rotation={[-0.002, 0.434, 0.002]}
        scale={0.638}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_43_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[164.719, 26.176, -35915.855]}
        rotation={[-3.141, -1.082, -3.14]}
        scale={0.692}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_44_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[575.993, 25.408, -35818.613]}
        rotation={[0.008, 1.338, -0.01]}
        scale={0.673}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_45_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1787.047, 27.311, -36087.734]}
        rotation={[0, -1.178, 0.001]}
        scale={0.66}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_46_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2577.456, 178.814, -36262.926]}
        rotation={[-0.016, 1.26, 0.013]}
        scale={0.692}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_47_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2692.146, 179.833, -35896.609]}
        rotation={[-0.002, 0.508, 0.002]}
        scale={0.636}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_48_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3323.384, 180.187, -35697.59]}
        rotation={[0.001, 0.268, -0.001]}
        scale={0.632}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_49_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3597.888, 146.052, -34756.199]}
        rotation={[2.413, 1.402, -2.244]}
        scale={0.631}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_50_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3674.556, 101.462, -34467.633]}
        rotation={[3.14, 1.229, 3.13]}
        scale={0.661}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_51_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3700.673, 102.622, -33620.305]}
        rotation={[-3.14, -1.206, -3.14]}
        scale={0.617}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_52_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3414.083, 102.534, -33424.859]}
        rotation={[-0.002, 1.154, 0.005]}
        scale={0.661}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_53_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2864.155, 92.087, -33389.547]}
        rotation={[-0.008, 0.197, -0.002]}
        scale={0.661}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_54_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3054.668, 92.424, -33040.398]}
        rotation={[-0.003, 0.58, -0.004]}
        scale={0.655}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_55_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4237.805, 100.29, -33157.313]}
        rotation={[-0.066, -1.039, -0.085]}
        scale={0.724}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_56_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1668.375, 79.826, -33533.121]}
        rotation={[0, 0.009, 0]}
        scale={0.56}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_57_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2003.194, 234.039, -34051.738]}
        rotation={[0.005, -0.416, 0.001]}
        scale={0.676}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_48_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1150.991, 20.592, -32726.734]}
        rotation={[0.007, -0.566, 0.001]}
        scale={[0.932, 1.863, 0.932]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_49_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[381.2, 8.378, -33021.223]}
        rotation={[0.064, 0.211, 0.014]}
        scale={[0.96, 1.92, 0.96]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_50_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-228.94, -69.904, -33300.746]}
        rotation={[0.157, 0.235, 0.089]}
        scale={[0.914, 1.828, 0.914]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_51_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1630.985, 22.403, -32126.904]}
        rotation={[-0.011, 1.356, 0.015]}
        scale={[0.947, 1.894, 0.947]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_52_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1988.394, 11.682, -35024.641]}
        rotation={[-0.01, 0.426, 0.034]}
        scale={[0.978, 1.956, 0.978]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_53_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1432.468, 20.827, -36033.305]}
        rotation={[0.003, -0.971, 0.008]}
        scale={[0.911, 1.822, 0.911]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_54_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[735.295, 20.724, -36463.301]}
        rotation={[0, -0.333, 0.004]}
        scale={[0.959, 1.919, 0.959]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_55_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2664.299, 15.271, -30907.893]}
        rotation={[-3.12, 1.184, -3.137]}
        scale={[0.981, 1.962, 0.981]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_58_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2770, -1230, -37240]}
        rotation={[-Math.PI, 1.028, -Math.PI]}
        scale={[3.51, 6.697, 4.639]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_35_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[5440, -540, -39700]}
        rotation={[-Math.PI, -1.256, -Math.PI]}
        scale={4.193}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_03_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1039, -360, -37052]}
        rotation={[0, 1.448, 0]}
        scale={0.405}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_90_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1715, -660, -36970]}
        rotation={[-Math.PI, -0.241, -Math.PI]}
        scale={[0.642, 0.775, 0.642]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_91_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4640, -650, -31840]}
        rotation={[-Math.PI, -0.32, -Math.PI]}
        scale={[0.691, 0.834, 0.691]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_87_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[5980, -720, -35270]}
        rotation={[-Math.PI, 0.857, -Math.PI]}
        scale={[0.911, 1.1, 0.911]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_89_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4020, -850, -38080]}
        rotation={[0, 0.688, 0]}
        scale={[0.911, 1.39, 0.911]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_59_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4830, -540, -35350]}
        rotation={[0, -0.419, 0]}
        scale={3.8}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_60_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4811, -507, -34648]}
        rotation={[0, 0.573, 0]}
        scale={1.731}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_86_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4990, -940, -36550]}
        rotation={[-Math.PI, -0.809, -Math.PI]}
        scale={[1.139, 1.287, 1.139]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_06_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2495, -460, -38243]}
        rotation={[0, -0.645, 0]}
        scale={[1.487, 2.611, 1.487]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_61_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4000, 320, -37550]}
        rotation={[-Math.PI, -1.293, -Math.PI]}
        scale={[3.494, 5.339, 4.675]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_88_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3340, -820, -37920]}
        rotation={[0, -0.202, 0]}
        scale={[1.441, 1.128, 1.441]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_62_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4864, -540, -32859]}
        rotation={[-Math.PI, -1.348, -Math.PI]}
        scale={[5.486, 2.94, 4.148]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Fern_01_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2067.682, 69.59, -32190.695]}
        rotation={[0, 0.587, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Fern_01_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1445.287, 15.841, -32433.6]}
        rotation={[-Math.PI, -1.202, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Fern_01_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1638.437, 14.472, -31722.408]}
        rotation={[0, 1.288, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Fern_01_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[864.62, 13.124, -32740.072]}
        rotation={[0, -0.004, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Fern_01_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[417.06, 15.891, -33406.719]}
        rotation={[0, 0.932, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Fern_01_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1158.394, 69.631, -33935.41]}
        rotation={[-Math.PI, 1.186, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Fern_01_7_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3082.56, 90.332, -33318.234]}
        rotation={[0, 0.674, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Fern_01_8_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[650.482, 73.689, -34404.973]}
        rotation={[0, 1.383, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Fern_01_9_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-38.373, 77.489, -34771.984]}
        rotation={[0, -0.587, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2679.34, 81.852, -33539.375]}
        rotation={[-Math.PI, 1.044, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1616.613, 69.514, -33905.574]}
        rotation={[0, 1.486, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[813.965, 59.777, -34289.445]}
        rotation={[0, -0.433, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_15_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-606.905, 48.548, -34627.133]}
        rotation={[-Math.PI, -0.859, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_16_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4364.656, 91.959, -33642.516]}
        rotation={[0, 0.578, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_17_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3532.971, 114.731, -34446.398]}
        rotation={[0, -1.363, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_18_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2255.161, 142.515, -35920.93]}
        rotation={[0, 0.593, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_19_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-48.938, 74.675, -35545.223]}
        rotation={[0, -0.422, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_20_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[642.07, 70.329, -35525.383]}
        rotation={[0, -1.444, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_21_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[656.922, 77.415, -34859.965]}
        rotation={[0, -0.165, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_22_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[732.943, 25.548, -33330.391]}
        rotation={[0, 0.723, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_23_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2492.803, 21.484, -31442.133]}
        rotation={[-Math.PI, 1.456, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_24_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1736.349, 16.657, -32619.016]}
        rotation={[0, 0.381, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_25_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[535.203, 15.771, -33336.445]}
        rotation={[0, -1.546, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_26_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[702.331, 15.352, -33224.586]}
        rotation={[-Math.PI, 1.285, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_27_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3546.735, 169.293, -36040.047]}
        rotation={[-Math.PI, 0.574, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_28_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3378.607, 168.702, -34973.539]}
        rotation={[-Math.PI, -0.404, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmBush_03_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3343.369, 92.39, -33676.758]}
        rotation={[0, -1.009, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmBush_03_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2180.853, 49.704, -31774.236]}
        rotation={[0, -1.074, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmBush_03_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[871.617, 69.974, -34356.098]}
        rotation={[0, -0.737, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmBush_03_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-630.02, 71.921, -35308.922]}
        rotation={[0, -1.381, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_37_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2594.687, 77.484, -32034.857]}
        rotation={[0, -1.309, 0]}
        scale={0.904}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_38_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2604.883, 77.519, -32136.826]}
        rotation={[0, 1.35, 0]}
        scale={0.855}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_39_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2590.765, 77.539, -32198.859]}
        rotation={[0, -0.108, 0]}
        scale={0.917}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_40_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2580.368, 77.542, -32297.76]}
        rotation={[-Math.PI, -0.235, -Math.PI]}
        scale={1.054}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_41_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2580.313, 77.515, -32356.488]}
        rotation={[-Math.PI, -0.789, -Math.PI]}
        scale={0.812}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_42_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2577.06, 77.473, -32433.793]}
        rotation={[0, -0.673, 0]}
        scale={0.879}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_43_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2578.806, 77.434, -32531.396]}
        rotation={[0, -1.398, 0]}
        scale={0.942}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_44_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2584.085, 77.414, -32610.416]}
        rotation={[0, -1.334, 0]}
        scale={0.83}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_45_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2590.491, 76.983, -32701.971]}
        rotation={[0, 1.152, 0]}
        scale={0.816}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_46_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2586.008, 76.038, -32811.641]}
        rotation={[-Math.PI, 0.398, -Math.PI]}
        scale={0.981}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_47_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2585.886, 74.209, -32864.695]}
        rotation={[-Math.PI, -0.936, -Math.PI]}
        scale={0.827}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_48_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2483.963, 77.631, -32036.012]}
        rotation={[0, 0.196, 0]}
        scale={0.963}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_49_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2475.601, 77.665, -32137.186]}
        rotation={[0, 0.025, 0]}
        scale={0.815}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_50_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2447.94, 77.691, -32260.195]}
        rotation={[0, 0.125, 0]}
        scale={0.903}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_51_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2444.788, 77.66, -32358.648]}
        rotation={[-Math.PI, -1.243, -Math.PI]}
        scale={0.858}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_52_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2448.383, 77.569, -32485.201]}
        rotation={[0, -1.126, 0]}
        scale={0.906}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_53_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2443.13, 77.486, -32575.402]}
        rotation={[0, -0.019, 0]}
        scale={1.076}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_54_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2448.758, 77.402, -32687.646]}
        rotation={[0, -0.068, 0]}
        scale={1.104}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_55_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2416.986, 77.316, -32781.676]}
        rotation={[0, -0.521, 0]}
        scale={1.072}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_56_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2426.025, 76.888, -32878.973]}
        rotation={[-Math.PI, -1.143, -Math.PI]}
        scale={0.924}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_57_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2326.462, 77.206, -32841.672]}
        rotation={[0, -1.209, 0]}
        scale={1.102}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_58_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2312.942, 77.349, -32725]}
        rotation={[-Math.PI, 0.435, -Math.PI]}
        scale={0.835}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_59_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2319.809, 77.507, -32612.713]}
        rotation={[0, -0.382, 0]}
        scale={0.818}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_60_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2315.735, 77.598, -32510.406]}
        rotation={[0, -1.033, 0]}
        scale={0.999}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_61_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2334.399, 77.669, -32404.594]}
        rotation={[-Math.PI, 1.313, -Math.PI]}
        scale={0.919}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_62_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2335.098, 77.694, -32303.547]}
        rotation={[0, -1.279, 0]}
        scale={0.808}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_63_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2368.109, 77.704, -32165.572]}
        rotation={[-Math.PI, -1.427, -Math.PI]}
        scale={1.044}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_64_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2380.722, 77.69, -32086.072]}
        rotation={[0, 0.569, 0]}
        scale={1.133}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_65_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2376.211, 77.689, -32009.203]}
        rotation={[-Math.PI, 0.022, -Math.PI]}
        scale={0.895}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_66_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2285.739, 77.719, -32036.23]}
        rotation={[0, -1.539, 0]}
        scale={1.102}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_67_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2274.06, 77.692, -32112.387]}
        rotation={[-Math.PI, 1.502, -Math.PI]}
        scale={0.851}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_68_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2256.162, 77.686, -32206.498]}
        rotation={[0, 1.121, 0]}
        scale={0.991}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_69_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2244.733, 77.656, -32333.143]}
        rotation={[-Math.PI, -0.332, -Math.PI]}
        scale={1.096}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_70_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2241.702, 77.615, -32455.572]}
        rotation={[-Math.PI, -1.228, -Math.PI]}
        scale={1.069}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_71_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2215.601, 77.563, -32558.209]}
        rotation={[0, -1.431, 0]}
        scale={1.003}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_72_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2207.62, 77.41, -32675.592]}
        rotation={[-Math.PI, 0.622, -Math.PI]}
        scale={1.09}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_73_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2199.326, 77.229, -32776.426]}
        rotation={[-Math.PI, -1.567, -Math.PI]}
        scale={0.995}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_74_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1335.297, 15.638, -35248.938]}
        rotation={[0, 0.824, 0]}
        scale={0.99}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_75_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1308.926, 15.457, -35119.648]}
        rotation={[0, 0.56, 0]}
        scale={0.804}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_76_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1274.661, 15.393, -35037.648]}
        rotation={[0, -1.486, 0]}
        scale={1.075}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_77_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1239.02, 15.257, -34922.684]}
        rotation={[0, 1.332, 0]}
        scale={1.058}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_78_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1184.25, 15.049, -34766.078]}
        rotation={[-Math.PI, 0.964, -Math.PI]}
        scale={0.855}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_79_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1119.58, 14.949, -34652.77]}
        rotation={[0, 0.414, 0]}
        scale={0.938}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_80_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1018.451, 14.873, -34533.898]}
        rotation={[0, 0.725, 0]}
        scale={1.038}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_81_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1100.998, 14.185, -34444.469]}
        rotation={[0, -0.838, 0]}
        scale={0.865}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_82_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1209.793, 14.131, -34538.574]}
        rotation={[0, -1.355, 0]}
        scale={0.821}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_83_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1277.921, 14.221, -34628.336]}
        rotation={[0, -1.339, 0]}
        scale={0.846}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_84_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1340.521, 14.47, -34750.508]}
        rotation={[0, -1.13, 0]}
        scale={0.806}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_85_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1380.185, 14.589, -34862.27]}
        rotation={[-Math.PI, 0.38, -Math.PI]}
        scale={0.919}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_86_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1395.508, 14.776, -34966.688]}
        rotation={[-Math.PI, 1.446, -Math.PI]}
        scale={0.999}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_87_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1438.26, 14.939, -35104.609]}
        rotation={[0, 1.566, 0]}
        scale={0.893}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_88_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1473.706, 15.105, -35235.43]}
        rotation={[0, 1.143, 0]}
        scale={0.972}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_89_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1636.838, 14.362, -35234.637]}
        rotation={[0, -1.34, 0]}
        scale={1.053}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_90_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1599.655, 14.074, -35028.016]}
        rotation={[0, -0.604, 0]}
        scale={1.066}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_91_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1550.183, 13.946, -34897.906]}
        rotation={[0, 0.1, 0]}
        scale={0.855}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_92_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1468.518, 13.765, -34706.492]}
        rotation={[0, -0.952, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_93_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1380.902, 13.706, -34564.273]}
        rotation={[0, 0.373, 0]}
        scale={0.96}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_94_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1276.44, 13.207, -34359.371]}
        rotation={[0, -0.692, 0]}
        scale={1.029}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_95_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-985.391, 14.358, -34365.742]}
        rotation={[-Math.PI, 1.422, -Math.PI]}
        scale={0.888}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_96_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-861.575, 14.58, -34249.984]}
        rotation={[0, 0.191, 0]}
        scale={0.893}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_97_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-835.62, 15.306, -34427.617]}
        rotation={[0, 0.713, 0]}
        scale={0.884}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_98_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3441.296, 87.014, -32565.852]}
        rotation={[0, 0.198, 0]}
        scale={1.004}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_99_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3419.571, 79.674, -32498.904]}
        rotation={[-Math.PI, 0.218, -Math.PI]}
        scale={1.033}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_100_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3363.684, 91.225, -32747.152]}
        rotation={[0, 0.823, 0]}
        scale={0.804}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_101_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3318.606, 90.309, -32672.299]}
        rotation={[0, -0.61, 0]}
        scale={0.975}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_102_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3294.302, 88.453, -32586.627]}
        rotation={[-Math.PI, 0.533, -Math.PI]}
        scale={0.866}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_103_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3175.979, 90.156, -32863.832]}
        rotation={[-Math.PI, -1.229, -Math.PI]}
        scale={0.905}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_104_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3142.129, 86.562, -32794.328]}
        rotation={[-Math.PI, 0.547, -Math.PI]}
        scale={0.938}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_105_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3941.675, 92.364, -33582.723]}
        rotation={[0, 0.246, 0]}
        scale={1.024}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_106_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3986.636, 92.313, -33695.91]}
        rotation={[0, 0.092, 0]}
        scale={0.937}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_107_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4051.291, 92.159, -33513.414]}
        rotation={[0, 0.599, 0]}
        scale={1.121}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_108_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4069.806, 92.164, -33629.316]}
        rotation={[0, -0.06, 0]}
        scale={0.914}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_109_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4136.347, 92.019, -33454.711]}
        rotation={[0, 1.426, 0]}
        scale={1.074}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_110_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2178.287, 82.075, -32922.762]}
        rotation={[0, -0.175, 0]}
        scale={0.917}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_111_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2257.522, 82.051, -32959.637]}
        rotation={[-Math.PI, 1.156, -Math.PI]}
        scale={0.953}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_112_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2387.207, 82.304, -32968.523]}
        rotation={[-Math.PI, -1.533, -Math.PI]}
        scale={0.958}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_113_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2129.26, 80.321, -33003.898]}
        rotation={[0, 0.109, 0]}
        scale={1.169}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_114_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2352.325, 82.154, -33037.098]}
        rotation={[0, -0.687, 0]}
        scale={0.897}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_115_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2688.391, 82.131, -31964.148]}
        rotation={[-Math.PI, -1.348, -Math.PI]}
        scale={1.133}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_116_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2563.638, 81.468, -31926.93]}
        rotation={[-Math.PI, -1.282, -Math.PI]}
        scale={1.052}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_117_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2401.44, 75.022, -31883.105]}
        rotation={[-Math.PI, 0.891, -Math.PI]}
        scale={0.832}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_118_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2754.59, 81.695, -31886.199]}
        rotation={[0, 0.974, 0]}
        scale={0.992}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_119_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2616.495, 81.078, -31841.102]}
        rotation={[0, -0.203, 0]}
        scale={0.915}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_120_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2849.969, 81.213, -31865.109]}
        rotation={[-Math.PI, -1.168, -Math.PI]}
        scale={0.806}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_121_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1904.099, 13.943, -31380.719]}
        rotation={[0, 1.062, 0]}
        scale={1.01}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_122_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1997.424, 14.005, -31326.916]}
        rotation={[0, -0.321, 0]}
        scale={1.048}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_123_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2123.993, 14.058, -31271.104]}
        rotation={[0, 0.66, 0]}
        scale={1.066}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_124_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2259.042, 13.895, -31179.682]}
        rotation={[0, -0.149, 0]}
        scale={1.066}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_125_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2363.541, 13.438, -31084.521]}
        rotation={[-Math.PI, -0.848, -Math.PI]}
        scale={0.817}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_126_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1800.851, 14.043, -31488.385]}
        rotation={[-Math.PI, -0.932, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_127_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1760.852, 14.49, -31628.281]}
        rotation={[0, 1.487, 0]}
        scale={0.829}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_128_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1715.671, 13.511, -31405.654]}
        rotation={[0, 1.458, 0]}
        scale={0.998}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_129_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1766.696, 13.158, -31283.002]}
        rotation={[0, 1.102, 0]}
        scale={0.831}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_130_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1889.026, 13.337, -31233.969]}
        rotation={[-Math.PI, 1.203, -Math.PI]}
        scale={1.015}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_131_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1978.342, 13.354, -31164.313]}
        rotation={[0, 0.847, 0]}
        scale={0.948}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_132_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2103.613, 13.261, -31097.305]}
        rotation={[0, -0.027, 0]}
        scale={0.995}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_133_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2205.872, 12.698, -30979.438]}
        rotation={[0, -0.013, 0]}
        scale={0.863}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_134_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2260.361, 11.265, -30892.406]}
        rotation={[0, 1.16, 0]}
        scale={0.831}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_135_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2100.43, 11.797, -30890.408]}
        rotation={[0, -1.047, 0]}
        scale={0.935}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_136_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2072.968, 12.411, -30984.064]}
        rotation={[0, 0.335, 0]}
        scale={1.04}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_137_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1957.242, 13.085, -31113.498]}
        rotation={[-Math.PI, 0.887, -Math.PI]}
        scale={1.002}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_138_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1807.907, 12.842, -31170.871]}
        rotation={[-Math.PI, -1.284, -Math.PI]}
        scale={1.024}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_139_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1694.241, 12.276, -31232.99]}
        rotation={[0, 0.249, 0]}
        scale={0.951}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_140_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2473.496, 13.326, -31052.055]}
        rotation={[-Math.PI, 1.241, -Math.PI]}
        scale={0.946}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_141_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[573.111, 14.996, -35974.402]}
        rotation={[0, -0.425, 0]}
        scale={0.923}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_142_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[450.226, 15.401, -35976.625]}
        rotation={[0, -0.464, 0]}
        scale={0.968}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_143_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[320.651, 15.725, -35989.301]}
        rotation={[0, -0.903, 0]}
        scale={0.934}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_144_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[199.359, 15.89, -36014.422]}
        rotation={[0, -0.889, 0]}
        scale={0.824}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_145_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[63.425, 16.048, -36047.055]}
        rotation={[0, 0.413, 0]}
        scale={0.81}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_146_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-181.906, 16.38, -36058.309]}
        rotation={[-Math.PI, 0.011, -Math.PI]}
        scale={0.887}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_147_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-403.253, 16.776, -35995.91]}
        rotation={[0, 0.703, 0]}
        scale={0.85}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_148_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-400.824, 16.334, -36114.996]}
        rotation={[-Math.PI, 0.823, -Math.PI]}
        scale={0.926}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_149_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-306.079, 16.2, -36142.734]}
        rotation={[0, -0.352, 0]}
        scale={1.119}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_150_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-50.055, 15.923, -36185.773]}
        rotation={[-Math.PI, -0.374, -Math.PI]}
        scale={0.809}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_151_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[192.783, 15.579, -36148.27]}
        rotation={[0, 0.867, 0]}
        scale={0.808}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_152_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[364.871, 15.298, -36124.227]}
        rotation={[-Math.PI, 0.38, -Math.PI]}
        scale={0.827}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_153_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[532.892, 14.586, -36090.07]}
        rotation={[-Math.PI, -0.707, -Math.PI]}
        scale={1.028}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_154_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[716.534, 13.643, -36111.473]}
        rotation={[0, 1.436, 0]}
        scale={0.876}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_155_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[868.112, 15.06, -36234.453]}
        rotation={[-Math.PI, 0.694, -Math.PI]}
        scale={0.9}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_156_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[700.641, 13.408, -36221.66]}
        rotation={[-Math.PI, -1.506, -Math.PI]}
        scale={0.944}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_157_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[575.699, 13.611, -36187.918]}
        rotation={[-Math.PI, 0.641, -Math.PI]}
        scale={0.973}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_158_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[434.048, 14.619, -36211.402]}
        rotation={[-Math.PI, 0.974, -Math.PI]}
        scale={1.043}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_159_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[304.95, 15.21, -36214.965]}
        rotation={[0, -0.474, 0]}
        scale={1.059}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_160_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[131.83, 15.475, -36238.094]}
        rotation={[-Math.PI, -0.589, -Math.PI]}
        scale={0.91}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_161_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-52.188, 15.752, -36261.586]}
        rotation={[0, -0.152, 0]}
        scale={1.125}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_162_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-278.11, 15.828, -36266.34]}
        rotation={[0, 0.19, 0]}
        scale={0.992}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_163_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-434.058, 16.012, -36216.188]}
        rotation={[0, 1.312, 0]}
        scale={0.977}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_164_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-516.15, 16.646, -36017.492]}
        rotation={[0, 1.268, 0]}
        scale={0.996}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_165_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-609.515, 16.791, -35895.723]}
        rotation={[0, 0.087, 0]}
        scale={1.077}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_166_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1357.199, 15.644, -35380.934]}
        rotation={[0, 0.129, 0]}
        scale={0.826}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_167_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-647.607, 15.143, -34218.047]}
        rotation={[0, -1.391, 0]}
        scale={0.887}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_168_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3470.474, 13.15, -31586.422]}
        rotation={[0, -1.294, 0]}
        scale={0.898}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_169_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3356.503, 12.617, -31427.838]}
        rotation={[0, -0.64, 0]}
        scale={0.829}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_170_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3289.139, 12.356, -31359.711]}
        rotation={[0, -0.603, 0]}
        scale={1.154}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_171_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3207.004, 12.207, -31295.289]}
        rotation={[0, 0.233, 0]}
        scale={0.977}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_172_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3116.754, 12.053, -31222.977]}
        rotation={[-Math.PI, 0.495, -Math.PI]}
        scale={1.017}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_173_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3548.81, 13.241, -31714.301]}
        rotation={[0, -0.416, 0]}
        scale={1.079}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_174_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3590.659, 13.674, -31915.684]}
        rotation={[0, -0.65, 0]}
        scale={0.805}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_175_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3696.909, 12.925, -31865.133]}
        rotation={[0, 0.48, 0]}
        scale={0.881}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_176_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3659.943, 12.532, -31739.422]}
        rotation={[-Math.PI, 1.566, -Math.PI]}
        scale={0.98}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_177_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3604.807, 12.031, -31574.621]}
        rotation={[0, -0.84, 0]}
        scale={0.903}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_178_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3497.049, 12.077, -31442.078]}
        rotation={[0, 0.047, 0]}
        scale={0.969}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_179_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3420.542, 11.76, -31346.146]}
        rotation={[0, 0.554, 0]}
        scale={1.135}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_180_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3303.537, 9.753, -31224.768]}
        rotation={[-Math.PI, 1.025, -Math.PI]}
        scale={0.993}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_181_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3189.267, 8.431, -31136.855]}
        rotation={[-Math.PI, 0.331, -Math.PI]}
        scale={0.987}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_182_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[638.239, 41.425, -33493.629]}
        rotation={[-Math.PI, 0.532, -Math.PI]}
        scale={0.904}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_183_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[561.252, 43.24, -33572.719]}
        rotation={[0, -0.238, 0]}
        scale={0.814}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_184_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[512.338, 42.024, -33623.07]}
        rotation={[-Math.PI, 1.387, -Math.PI]}
        scale={0.877}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_185_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[455.588, 41.457, -33693.801]}
        rotation={[-Math.PI, -1.203, -Math.PI]}
        scale={0.991}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_186_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[352.09, 38.146, -33794.836]}
        rotation={[0, 1.173, 0]}
        scale={1.148}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_187_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[209.836, 34.031, -33912.445]}
        rotation={[0, -1.127, 0]}
        scale={1.025}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_188_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[76.666, 30.441, -34004.523]}
        rotation={[0, -0.779, 0]}
        scale={1.06}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_189_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[708.484, 60.208, -33536.68]}
        rotation={[-Math.PI, -1.21, -Math.PI]}
        scale={0.989}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_190_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[629.77, 59.834, -33648.957]}
        rotation={[0, 1.293, 0]}
        scale={0.896}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_191_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[567.725, 59.318, -33731.348]}
        rotation={[-Math.PI, -1.085, -Math.PI]}
        scale={1.066}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_192_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[465.53, 57.496, -33825.887]}
        rotation={[-Math.PI, 1.375, -Math.PI]}
        scale={1.164}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_193_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[373.407, 55.154, -33900.301]}
        rotation={[0, 0.427, 0]}
        scale={1.072}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_02_194_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[222.156, 51.834, -34020.41]}
        rotation={[0, 0.16, 0]}
        scale={1.085}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_27_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2205.719, 76.962, -32868.445]}
        rotation={[-Math.PI, -1.1, -Math.PI]}
        scale={1.024}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_28_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2331.687, 77.198, -32889.473]}
        rotation={[0, -1.196, 0]}
        scale={0.918}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_29_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2410.706, 76.487, -32942.57]}
        rotation={[-Math.PI, -1.511, -Math.PI]}
        scale={0.815}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_30_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2561.783, 75.113, -32875.305]}
        rotation={[-Math.PI, -1.195, -Math.PI]}
        scale={0.896}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_31_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2584.644, 70.64, -32946.051]}
        rotation={[0, -0.022, 0]}
        scale={0.899}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_32_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2613.867, 77.389, -32543.561]}
        rotation={[0, -0.918, 0]}
        scale={0.811}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_33_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2610.794, 77.48, -32336.891]}
        rotation={[-Math.PI, 0.056, -Math.PI]}
        scale={0.911}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_34_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2629.742, 77.485, -32193.283]}
        rotation={[0, 0.845, 0]}
        scale={0.869}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_35_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2630.56, 77.413, -32014.672]}
        rotation={[0, 0.067, 0]}
        scale={0.859}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_36_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2498.813, 77.607, -32027.223]}
        rotation={[-Math.PI, -1.492, -Math.PI]}
        scale={1.061}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_37_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2465.594, 77.597, -31968.332]}
        rotation={[-Math.PI, -1.312, -Math.PI]}
        scale={0.908}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_38_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2363.055, 77.698, -31999.369]}
        rotation={[0, 1, 0]}
        scale={0.919}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_39_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2346.686, 77.62, -31933.381]}
        rotation={[0, 1.157, 0]}
        scale={0.923}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_40_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2250.449, 77.688, -32106.445]}
        rotation={[-Math.PI, 1.04, -Math.PI]}
        scale={0.864}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_41_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2263.51, 77.682, -31977.947]}
        rotation={[0, -0.866, 0]}
        scale={0.999}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_42_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2226.117, 77.647, -32341.705]}
        rotation={[0, -0.353, 0]}
        scale={1.009}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_43_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2202.731, 77.567, -32532.66]}
        rotation={[0, -1.353, 0]}
        scale={0.812}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_44_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2205.154, 77.315, -32729.684]}
        rotation={[-Math.PI, -0.777, -Math.PI]}
        scale={0.935}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_45_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2210.187, 77.531, -32596.689]}
        rotation={[0, -1.305, 0]}
        scale={1.039}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_46_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2327.911, 77.553, -32566.369]}
        rotation={[-Math.PI, -1.121, -Math.PI]}
        scale={1.13}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_47_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2460.834, 77.432, -32638.684]}
        rotation={[0, -0.137, 0]}
        scale={0.883}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_48_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2456.814, 77.629, -32408.813]}
        rotation={[0, 1.041, 0]}
        scale={0.808}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_49_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2603.696, 77.466, -32385.223]}
        rotation={[0, -0.123, 0]}
        scale={0.951}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_50_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2469.711, 77.688, -32203.125]}
        rotation={[-Math.PI, -0.674, -Math.PI]}
        scale={1.001}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_51_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2596.933, 77.519, -32085.297]}
        rotation={[-Math.PI, -0.883, -Math.PI]}
        scale={1.148}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_52_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2254.022, 77.647, -32386.715]}
        rotation={[0, -1.065, 0]}
        scale={0.985}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_53_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2368.335, 77.708, -32237.506]}
        rotation={[0, -0.881, 0]}
        scale={0.855}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_54_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-915.506, 14.994, -34452.164]}
        rotation={[0, 0.127, 0]}
        scale={0.801}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_55_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-747.879, 15.21, -34315.008]}
        rotation={[0, -0.563, 0]}
        scale={1.076}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_56_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-797.015, 14.614, -34165.492]}
        rotation={[0, 0.614, 0]}
        scale={0.898}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_57_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-981.689, 14.143, -34296.457]}
        rotation={[-Math.PI, 1.154, -Math.PI]}
        scale={0.856}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_58_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1160.59, 13.039, -34244.02]}
        rotation={[-Math.PI, -1.325, -Math.PI]}
        scale={0.916}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_59_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1332.178, 13.363, -34427.262]}
        rotation={[0, -0.276, 0]}
        scale={1.117}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_60_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1529.626, 13.706, -34782.055]}
        rotation={[-Math.PI, -0.567, -Math.PI]}
        scale={0.922}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_61_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1646.338, 14.13, -35152.809]}
        rotation={[0, -0.541, 0]}
        scale={1.059}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_62_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1497.485, 15.045, -35315.098]}
        rotation={[0, 0.64, 0]}
        scale={0.968}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_63_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1316.678, 15.841, -35320.277]}
        rotation={[0, -0.597, 0]}
        scale={1.028}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_64_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1275.879, 15.219, -34965.242]}
        rotation={[-Math.PI, 0.537, -Math.PI]}
        scale={0.925}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_65_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1185.745, 15.162, -34811.785]}
        rotation={[-Math.PI, 1.154, -Math.PI]}
        scale={0.851}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_66_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1037.445, 15.167, -34625.617]}
        rotation={[0, 0.251, 0]}
        scale={0.947}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_67_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-52.567, 16.19, -36071.563]}
        rotation={[0, 0.157, 0]}
        scale={0.917}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_68_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[98.66, 15.99, -36046.047]}
        rotation={[0, 0.732, 0]}
        scale={0.849}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_69_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[271.252, 15.717, -36030.555]}
        rotation={[0, -0.959, 0]}
        scale={0.91}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_70_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[414.868, 15.52, -35970.863]}
        rotation={[0, -0.099, 0]}
        scale={0.815}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_71_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[848.041, 14.823, -36133.406]}
        rotation={[-Math.PI, 0.298, -Math.PI]}
        scale={0.89}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_72_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1037.79, 15.782, -36294.008]}
        rotation={[0, 0.079, 0]}
        scale={0.849}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_73_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-95.779, 15.724, -36280.219]}
        rotation={[0, 0.046, 0]}
        scale={1.061}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_74_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-519.833, 16.219, -36126.57]}
        rotation={[0, -0.726, 0]}
        scale={1.017}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_75_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-533.496, 16.898, -35921.48]}
        rotation={[0, -0.952, 0]}
        scale={0.85}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_76_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-700.604, 16.777, -35818.48]}
        rotation={[0, -0.972, 0]}
        scale={0.827}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_77_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-297.638, 16.547, -36034.68]}
        rotation={[-Math.PI, 1.379, -Math.PI]}
        scale={1.175}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_78_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-168.692, 15.959, -36205.738]}
        rotation={[0, -1.531, 0]}
        scale={0.888}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_79_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[47.977, 15.544, -36273.918]}
        rotation={[-Math.PI, 0.256, -Math.PI]}
        scale={0.89}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_80_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[205.359, 15.575, -36302.586]}
        rotation={[0, -1.354, 0]}
        scale={0.826}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_81_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[446.631, 14.35, -36290.047]}
        rotation={[0, -0.118, 0]}
        scale={0.841}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_82_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[642.899, 12.821, -36225.633]}
        rotation={[-Math.PI, -0.775, -Math.PI]}
        scale={0.929}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_83_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1298.514, 15.819, -35429.453]}
        rotation={[-Math.PI, -1.393, -Math.PI]}
        scale={0.864}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_84_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-554.099, 14.985, -34133.406]}
        rotation={[0, 0.158, 0]}
        scale={0.98}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_85_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1149.149, 16.294, -35434.488]}
        rotation={[-Math.PI, 0.832, -Math.PI]}
        scale={0.81}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_86_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3426.288, 13.35, -31561.404]}
        rotation={[0, 1.065, 0]}
        scale={0.87}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_87_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3036.401, 11.797, -31149.969]}
        rotation={[0, 0.63, 0]}
        scale={1.185}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_88_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3090.894, 10.097, -31130.549]}
        rotation={[-Math.PI, -0.8, -Math.PI]}
        scale={0.836}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_89_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3665.686, 12.112, -31669.26]}
        rotation={[-Math.PI, 1.168, -Math.PI]}
        scale={0.889}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_90_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3704.654, 13.578, -31999.912]}
        rotation={[-Math.PI, -1.524, -Math.PI]}
        scale={1.077}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_91_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3644.446, 13.882, -32022.15]}
        rotation={[0, 0.714, 0]}
        scale={0.805}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_92_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3747.211, 14.082, -32149.045]}
        rotation={[0, 1.248, 0]}
        scale={0.955}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_93_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[863.049, 68.479, -33529.723]}
        rotation={[-Math.PI, 1.303, -Math.PI]}
        scale={0.888}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_94_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[792.438, 63.446, -33481.605]}
        rotation={[-Math.PI, -1.285, -Math.PI]}
        scale={0.837}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_95_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[614.291, 46.085, -33538.996]}
        rotation={[0, 0.759, 0]}
        scale={0.945}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_96_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[509.476, 58.14, -33783.91]}
        rotation={[0, 0.802, 0]}
        scale={0.852}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_97_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[429.141, 44.805, -33761.906]}
        rotation={[0, 0.193, 0]}
        scale={0.902}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_98_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[157.788, 49.844, -34112.691]}
        rotation={[0, -1.546, 0]}
        scale={0.955}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_99_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-60.239, 45.474, -34123.426]}
        rotation={[-Math.PI, 1.09, -Math.PI]}
        scale={0.918}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_100_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[39.124, 26.943, -33984.734]}
        rotation={[-Math.PI, -1.49, -Math.PI]}
        scale={0.946}
      />
      <mesh
        geometry={
          nodes.SM_Env_SugarCane_01_101_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[152.847, 23.35, -33889.367]}
        rotation={[0, 1.538, 0]}
        scale={0.932}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_02_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3808.433, 9.743, -31733.025]}
        rotation={[0, 0.887, 0]}
        scale={1.122}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_02_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1456.435, -49.291, -30407.172]}
        rotation={[-Math.PI, -1.518, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_02_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2267.251, -5.115, -36086.563]}
        rotation={[-Math.PI, -1.012, -Math.PI]}
        scale={1.015}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_02_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[920.245, 14.494, -36719.383]}
        rotation={[0, 0.152, 0]}
        scale={0.805}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_02_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1961.249, 84.059, -35902.148]}
        rotation={[0, 0.534, 0]}
        scale={0.901}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_02_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3205.928, 170.376, -35805.867]}
        rotation={[0, 0.739, 0]}
        scale={1.043}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_02_7_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2494.404, 192.137, -33689.602]}
        rotation={[0, -0.071, 0]}
        scale={0.812}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_02_8_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[385.432, 77.336, -35260.113]}
        rotation={[0, 0.415, 0]}
        scale={1.017}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_02_9_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[284.112, 77.262, -35353.816]}
        rotation={[-Math.PI, -0.479, -Math.PI]}
        scale={1.011}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_02_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-394.272, 71.973, -35445.988]}
        rotation={[0, 0.263, 0]}
        scale={0.845}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_01_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2357.314, 177.607, -33651.109]}
        rotation={[-Math.PI, 1.463, -Math.PI]}
        scale={1.054}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_01_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4012.807, 91.434, -33000.766]}
        rotation={[0, 1.214, 0]}
        scale={0.966}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_01_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1996.72, 8.385, -36079.141]}
        rotation={[0, -0.613, 0]}
        scale={0.813}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_01_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1030.28, 15.342, -36596.434]}
        rotation={[-Math.PI, -1.039, -Math.PI]}
        scale={0.958}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_03_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2260.298, -33.822, -35308.656]}
        rotation={[-Math.PI, -0.801, -Math.PI]}
        scale={1.161}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_03_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3902.839, -74.099, -31243.732]}
        rotation={[0, -1.13, 0]}
        scale={0.957}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_Tall_02_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2912.648, 170.353, -35914.785]}
        rotation={[0, -0.714, 0]}
        scale={0.807}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_Tall_02_2_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2817.737, 170.178, -36076.988]}
        rotation={[0, 1.34, 0]}
        scale={0.837}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_Tall_02_3_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1335.198, 85.461, -35834.441]}
        rotation={[0, 0.305, 0]}
        scale={0.878}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_Tall_02_4_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2455.444, 138.248, -33569.172]}
        rotation={[0, -1.248, 0]}
        scale={1.077}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_272_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1731.265, 24.936, -31792.959]}
        rotation={[-3.122, 1.415, 3.125]}
        scale={0.705}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_273_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1524.902, -10.154, -30591.59]}
        rotation={[-1.815, 1.465, 1.874]}
        scale={0.679}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_274_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1550.222, 9.534, -30852.758]}
        rotation={[-2.783, 1.24, 2.827]}
        scale={0.619}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_275_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1776.285, 17.225, -30743.398]}
        rotation={[-3.095, 1.215, 3.114]}
        scale={0.611}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_276_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1717.557, 11.588, -30655.256]}
        rotation={[3.128, -1.35, 3.098]}
        scale={0.788}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_277_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1701.589, 18.695, -30940.787]}
        rotation={[0.012, 0.243, 0.009]}
        scale={0.563}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_278_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1498.489, 17.905, -31021.301]}
        rotation={[-0.001, 1.078, 0.063]}
        scale={0.624}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_279_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1683.844, 26.367, -32368.777]}
        rotation={[0, 0.635, 0.002]}
        scale={0.739}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_280_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1483.983, 25.898, -32584.539]}
        rotation={[-0.003, 0.981, 0.006]}
        scale={0.65}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_281_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1217.132, -51.144, -31731.814]}
        rotation={[-0.062, 1.059, 0.322]}
        scale={0.659}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_282_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1021.652, -102.61, -31755.572]}
        rotation={[0.095, 0.428, 0.212]}
        scale={0.56}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_283_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[996.936, -130.171, -31582.074]}
        rotation={[1.744, -1.34, 1.7]}
        scale={0.647}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_284_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1118.607, -81.276, -31622.359]}
        rotation={[2.162, -1.367, 2.141]}
        scale={0.765}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_285_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[830.763, -146.73, -31858.871]}
        rotation={[-2.75, 0.856, 2.853]}
        scale={0.589}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_286_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-572.25, -52.422, -33501.238]}
        rotation={[0.212, -0.177, 0.039]}
        scale={0.588}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_287_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-743.853, -95.523, -33458.574]}
        rotation={[0.203, -0.082, 0.048]}
        scale={0.613}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_288_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-836.025, -142.893, -33397.848]}
        rotation={[0.223, 0.497, 0.069]}
        scale={0.866}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_289_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1095.621, -102.197, -33559.5]}
        rotation={[0.194, 0.153, 0.074]}
        scale={0.628}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_290_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-796.3, -54.5, -33590.398]}
        rotation={[1.219, -1.504, 0.756]}
        scale={0.804}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_291_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-623.279, -1.624, -33631.008]}
        rotation={[0.147, -1.229, 0.072]}
        scale={0.526}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_292_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-949.005, 23.929, -34168.59]}
        rotation={[-3.134, 0.913, 3.136]}
        scale={0.774}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_293_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2483.616, -49.031, -36046.141]}
        rotation={[0.366, -1.124, 0.394]}
        scale={0.633}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_294_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2270.792, -10.503, -36268.105]}
        rotation={[0.017, -0.86, 0.117]}
        scale={0.777}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_295_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2359.616, -9.677, -36146.965]}
        rotation={[0.103, -0.527, 0.188]}
        scale={0.68}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_296_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2146.86, 10.09, -35744.574]}
        rotation={[3.063, -1.141, 3.058]}
        scale={0.557}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_297_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2213.566, 7.691, -35964.266]}
        rotation={[-0.086, 1.161, 0.088]}
        scale={0.837}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_298_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1684.914, 19.929, -36210.813]}
        rotation={[-0.006, 0.19, 0.008]}
        scale={0.556}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_299_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1983.174, 20.89, -35974.488]}
        rotation={[-3.132, 0.905, 3.12]}
        scale={0.708}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_300_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1821.144, 20.081, -36149.973]}
        rotation={[0, -0.593, 0.01]}
        scale={0.653}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_301_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2045.232, 13.492, -36226.766]}
        rotation={[3.112, -0.784, 3.115]}
        scale={0.625}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_302_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1691.331, 23.598, -35797.852]}
        rotation={[0.026, -1.443, 0.028]}
        scale={0.582}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_303_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-448.737, -42.899, -36774.066]}
        rotation={[-0.097, 0.097, 0.018]}
        scale={0.778}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_304_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-687.715, -23.366, -36683.699]}
        rotation={[-0.125, 0.609, 0.022]}
        scale={0.783}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_305_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-826.641, 15.326, -36485.656]}
        rotation={[-1.372, 1.52, 1.325]}
        scale={0.632}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_306_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1395.811, 26.184, -36476.668]}
        rotation={[-0.001, -0.727, 0.002]}
        scale={0.645}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_307_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1186.649, 25.673, -36547.672]}
        rotation={[-0.006, 1.05, 0.004]}
        scale={0.615}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_308_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1244.6, 25.897, -36422.754]}
        rotation={[-0.001, 0.01, 0.001]}
        scale={0.626}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_309_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1636.751, 26.53, -36421.621]}
        rotation={[-0.009, 1.437, 0.007]}
        scale={0.746}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_310_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[4156.852, 24.363, -32495.768]}
        rotation={[0.011, 0.83, -0.013]}
        scale={0.648}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_311_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[3979.113, 25.602, -32330.703]}
        rotation={[0.038, -1.556, 0.037]}
        scale={0.731}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_312_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[3818.561, 24.542, -32301.828]}
        rotation={[0.002, -0.424, 0]}
        scale={0.549}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_313_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[3813.506, 24.271, -32127.045]}
        rotation={[0.012, 1.384, -0.009]}
        scale={0.739}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_314_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[3922.285, 6.637, -31580.695]}
        rotation={[0.05, -0.138, -0.073]}
        scale={0.798}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_315_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[3960.682, -22.886, -31422.195]}
        rotation={[-0.142, -1.237, -0.368]}
        scale={0.744}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_316_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[3705.143, 15.906, -31449.271]}
        rotation={[-3.126, 0.581, -3.119]}
        scale={0.608}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_317_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[3464.56, 23.882, -31830.375]}
        rotation={[0.013, 1.072, -0.01]}
        scale={0.541}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_318_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[3342.14, 23.788, -31623.748]}
        rotation={[-3.133, -1.175, -3.135]}
        scale={0.669}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_319_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[3756.657, 20.183, -31638.65]}
        rotation={[0.044, 1.081, -0.037]}
        scale={0.714}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_320_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[3872.995, 16.881, -31882.182]}
        rotation={[0.047, 1.1, -0.054]}
        scale={0.817}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_321_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2471.058, 24.394, -31267.658]}
        rotation={[0.004, -0.639, 0]}
        scale={0.781}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_322_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[3011.874, 23.069, -31263.596]}
        rotation={[0.009, 0.452, -0.003]}
        scale={0.587}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_323_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[3025.169, 18.138, -31027.643]}
        rotation={[0.032, 0.754, -0.008]}
        scale={0.69}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_324_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[3057.049, -138.038, -30359.615]}
        rotation={[0.236, -0.433, -0.103]}
        scale={0.709}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_325_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2879.415, -129.511, -30301.252]}
        rotation={[0.405, 1.106, -0.051]}
        scale={0.655}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_326_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2646.677, -139.023, -30233.014]}
        rotation={[0.501, -1.528, 0.248]}
        scale={0.726}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_327_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2927.518, -64.303, -30491.4]}
        rotation={[0.187, -1.241, -0.033]}
        scale={0.564}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_328_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2779.452, -66.329, -30452.377]}
        rotation={[0.229, 1.138, 0.03]}
        scale={0.578}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_329_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1498.088, -54.204, -30220.637]}
        rotation={[0.021, 0.725, 0.109]}
        scale={0.656}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_330_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1381.606, -56.651, -30334.783]}
        rotation={[-0.376, 1.416, 0.482]}
        scale={0.632}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_331_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1712.007, -15.213, -30403.148]}
        rotation={[0.175, -0.094, -0.017]}
        scale={0.81}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_332_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1649.454, 26.395, -32607.285]}
        rotation={[0.001, -0.271, 0.001]}
        scale={0.733}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_333_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[255.526, 24.643, -33456.051]}
        rotation={[0.011, -0.324, 0.004]}
        scale={0.584}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_334_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[111.952, 26.358, -33653.992]}
        rotation={[0.005, -0.693, 0.002]}
        scale={0.79}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_335_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-87.26, 26.705, -33760.82]}
        rotation={[0.001, 0.738, 0.004]}
        scale={0.872}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_336_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-252.791, 24.572, -33923.281]}
        rotation={[3.14, 1.058, -3.14]}
        scale={0.793}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_58_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1555, 23, -34698]}
        rotation={[-3.139, -0.19, 3.138]}
        scale={0.774}
      />
      <mesh
        geometry={
          nodes.SM_Env_Bush_01_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[680.277, 75.641, -35398.875]}
        rotation={[-Math.PI, -1.526, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Bush_01_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-648.139, 54.742, -34786.211]}
        rotation={[0, -1.249, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Bush_01_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-976.043, 41.727, -35181.496]}
        rotation={[-Math.PI, 0.897, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Bush_01_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2031.932, 50.191, -31948.203]}
        rotation={[0, 0.508, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Bush_01_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1908.909, 40.701, -32234.836]}
        rotation={[-Math.PI, -0.2, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Bush_01_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2316.482, 206.101, -33721.238]}
        rotation={[0, -0.323, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Bush_02_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2201.504, 214.654, -33717.223]}
        rotation={[0, -0.663, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Bush_02_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-704.992, 41.466, -34732.297]}
        rotation={[0, 0.77, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Bush_02_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-817.441, 54.172, -35257.555]}
        rotation={[0, -0.455, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Bush_02_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1978.483, 46.01, -32014.334]}
        rotation={[0, 0.606, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Bush_02_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1896.934, 42.72, -32371.729]}
        rotation={[-Math.PI, 1.501, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_02_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2716.498, 82.142, -33399.449]}
        rotation={[-Math.PI, -0.856, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_02_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1537.441, 69.459, -33974.902]}
        rotation={[0, -0.947, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_02_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[867.945, 66.336, -34195.844]}
        rotation={[0, -0.462, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_02_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[40.881, 60.091, -34171.031]}
        rotation={[0, 0.427, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_02_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-896.06, 44.256, -35040.023]}
        rotation={[-Math.PI, -0.653, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_02_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[567.839, 15.18, -33248.949]}
        rotation={[0, 1.515, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_02_7_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2105.92, 47.677, -31831.549]}
        rotation={[-Math.PI, 1.085, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_02_8_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1895.389, 47.404, -32516.877]}
        rotation={[-Math.PI, 1.193, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_02_9_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[4019.215, 90.726, -32914.301]}
        rotation={[0, 1.287, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_02_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2222.829, 33.632, -31577.869]}
        rotation={[0, -1.336, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_02_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[688.343, -46.616, -32504.9]}
        rotation={[0, 0.442, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_92_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1677.852, -1422.852, -34981.078]}
        rotation={[-Math.PI, 1.045, -Math.PI]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_93_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[2266.893, -1422.852, -31866.18]}
        rotation={[-Math.PI, -1.069, -Math.PI]}
        scale={[5.885, 8.736, 5.827]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_94_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[5449.957, -1422.852, -35452.313]}
        rotation={[0, 0.277, 0]}
        scale={[5.885, 8.736, 5.827]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_95_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[897.643, -1422.852, -36842.309]}
        rotation={[-Math.PI, 1.426, -Math.PI]}
        scale={[5.885, 8.736, 5.827]}
      />
      <mesh
        geometry={
          nodes
            .SM_Veh_Boat_Rowing_01_Hull_Pirate_12_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1182, 14, -30819]}
        rotation={[-1.125, 1.157, -1.931]}
      />
      <mesh
        geometry={
          nodes
            .SM_Veh_Boat_Rowing_01_Hull_Pirate_11_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1103, 9, -31146.002]}
        rotation={[-1.852, 1.164, -1.26]}
      />
    </group>
  );
}

FarmIsland.propTypes = {
  nodes: PropTypes.any.isRequired,
  materials: PropTypes.any.isRequired,
}
