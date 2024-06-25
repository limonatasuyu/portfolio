import { useCompoundBody } from "@react-three/cannon";

export default function CastleIsland({ nodes, materials }) {
  

  const shapes = [
    { rotation: [0, -.8, 0], position: [330, 0, -110], args: [150, 10, 130] },    
    { rotation: [0, -1, 0], position: [290, 0, -10], args: [20, 10, 60] },    
    { rotation: [0, -1, 0], position: [237, 0, -90], args: [20, 10, 20] },    
    { rotation: [0, -1.6, 0], position: [295, 0, -210], args: [33, 10, 15] },    
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
    <group
      position={[31494.703, -1657.335, 10763.403]}
      rotation={[0, 0.789, 0]}
    >
      <group ref={ref} />
      <mesh
        geometry={nodes.SM_Bld_Dock_08_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[9885, -451, -16228]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Bld_Dock_02_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[10248, -451, -16228.003]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Bld_Dock_03_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[10591, -616, -16228.006]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Room_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[16615, 731, -12255]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Bld_Dock_07_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[9884, -451, -16969]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_02_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10246.999, -451, -16969.004]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_03_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10589.999, -616, -16969.006]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_02_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11204, -588, -14907.001]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_02_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11204, -588, -14544]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_03_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11204, -753, -14201.001]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_03_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11204, -588, -13818.001]}
      />
      <mesh
        geometry={nodes.SM_Bld_Dock_06_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[10615, -451, -16590]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_02_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10252, -451, -16589.998]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_03_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9909, -616, -16589.998]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Debris_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10052, -135, -17576]}
        rotation={[0.379, 0.504, 0.19]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Tower_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[15260.001, 660, -14680]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Wall_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[15259.993, 1225, -15736]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Stairs_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[15259.998, 2318, -15030]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Tower_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[18422, 1485, -10624]}
        scale={1.041}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_02_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11204, -588, -16378]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_03_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11203.999, -753, -16721]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Bld_Dock_01_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[10845, -588, -13836]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_02_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10482, -588, -13835.999]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_03_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10139, -753, -13835.998]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Bld_Dock_04_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[10845, -588, -15648]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_02_7_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10482, -588, -15647.998]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_03_7_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10139, -753, -15647.998]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_03_8_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9750.999, -588, -15647.996]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_04_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9388, -588, -15647.996]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_03_9_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9045, -753, -15647.996]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Bld_Dock_05_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[9751.004, -588, -13841.997]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Debris_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[6302, -65.1, -10361]}
        rotation={[-0.017, 0.117, 0.429]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Base_Circle_01_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12620, -380, -12540]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Base_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[14066, -380, -12540.003]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Wall_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[14972.998, 618, -13264.005]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Tower_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[14972.995, 250, -14343.004]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Tower_02_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[14973.004, 250, -10756.004]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Debris_01_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9274.182, -111.485, -10708.242]}
        rotation={[-0.149, -0.432, 0.264]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Tower_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[18794, 660, -18223]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Wall_01_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[17738, 1225, -18222.994]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Stairs_01_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[18444, 2318, -18222.998]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Wall_02_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[18797.004, 1225, -17176]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Stairs_01_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[18797.004, 2318, -17882]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Stairs_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[18797.006, 2318, -16453]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Wall_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[17746.01, 1225, -16109.994]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Stairs_01_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[18452.01, 2318, -16109.997]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_22_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12077, 24, -19021]}
        rotation={[-Math.PI, 1.512, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_03_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11204, -588, -16003]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_02_8_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11204, -588, -15639.999]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_03_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11204, -753, -15297]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Debris_03_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10020.601, -0.6, -17937.398]}
        rotation={[0.114, 0.243, 0.177]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_43_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11727, -75, -8247]}
        rotation={[0, -1.477, 0]}
        scale={0.889}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Room_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12577, -56, -13988]}
        scale={0.902}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_57_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[18497, 866, -10853]}
        rotation={[3.04, 0.508, -3.108]}
        scale={[0.961, 0.891, 0.891]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_17_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[17818, 221, -17012]}
        rotation={[0, 0.502, 0]}
        scale={1.163}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_21_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[22045, -2, -9037]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_StallCover_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11915, -61, -14441]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_Stairs_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10621, -47, -15939]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Room_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[13282.001, 602, -11537]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_Stairs_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10908, -47, -16217]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Tower_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[18388, -374, -13559]}
        rotation={[0, -1.571, 0]}
        scale={1.158}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Wall_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[16160.001, 199, -10401]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Wall_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[18474, 501, -12443]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_05_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[13141, 119, -14214.999]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8776, 21, -19609]}
        rotation={[0, 1.436, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_Stairs_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12852, 516, -14189]}
        rotation={[0, 1.571, 0]}
        scale={[0.654, 0.987, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Tower_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[17225, 1560, -15661.999]}
        rotation={[0, -1.571, 0]}
        scale={1.041}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_49_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9349, -560, -18390]}
        rotation={[-Math.PI, -0.646, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_23_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[21671, 6.8, -20768]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[21633.5, 17.8, -20498.801]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Tower_01_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[15260.001, 660, -18220]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Wall_01_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[15260.004, 1225, -17164]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Stairs_01_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[15260.002, 2318, -17870]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Wall_02_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[16307.001, 1225, -18223.002]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Stairs_01_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[15601.001, 2318, -18223.002]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmBush_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[13320, 26, -10734]}
        rotation={[0.136, -0.271, -0.096]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_26_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[17040, 40, -9266]}
        rotation={[0, -0.773, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_25_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[17428, 32, -9168]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_24_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12371, 31, -10569]}
        rotation={[-Math.PI, -1.205, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_23_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12491, 11, -10626]}
        rotation={[0, -0.82, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_20_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[20745, 9, -18215]}
        rotation={[0, -0.267, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_19_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[21906, -11, -20687]}
        rotation={[0, 0.033, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_18_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[21940, -17, -20890]}
        rotation={[0, 0.766, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_17_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[21692, 2, -20743]}
        rotation={[0, -1.503, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_16_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12055, 40, -21232]}
        rotation={[0, -1.503, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12083, 40, -18908]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_15_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11831, -17, -20819]}
        rotation={[-Math.PI, -0.503, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11862, -3, -21439]}
        rotation={[0, 1.029, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8777, 17, -19442]}
        rotation={[0, -0.611, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[6673, 19, -10246]}
        rotation={[-Math.PI, -0.173, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[7007, 19, -10253]}
        rotation={[0, -0.403, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[6715, 6, -10333]}
        rotation={[-Math.PI, 1.196, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10386, 41, -8484]}
        rotation={[-Math.PI, -1.285, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10473, 19, -8566]}
        rotation={[0, 0.566, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[13520, 34, -10793]}
        rotation={[0, -0.921, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12686, 35, -19226]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmBush_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12160, 29, -18380]}
        rotation={[-Math.PI, -1.404, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_22_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[17395, 58, -9168]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_21_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[13267.999, 50, -10736]}
        rotation={[0, 0.397, 0]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_20_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[13616, 50, -10567]}
        rotation={[0, -0.93, 0]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_19_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[13083.1, 46, -19789.9]}
        rotation={[-Math.PI, 1.308, -Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_18_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[12842.999, 46, -19453]}
        rotation={[0, 1.166, 0]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_17_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[12105, 49, -18386]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_56_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[22490, -1030, -20700]}
        rotation={[0, 0.926, 0]}
        scale={[0.556, 0.556, 0.495]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_55_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[21880, -1030, -11050]}
        rotation={[0, -0.709, 0]}
        scale={[0.556, 0.556, 0.495]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_39_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[19800, -690, -15230]}
        rotation={[-Math.PI, -0.568, -Math.PI]}
        scale={0.891}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_18_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[4634, -55.7, -10507]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_54_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[21340, -530, -16030]}
        rotation={[-0.351, -0.948, -0.226]}
        scale={0.5}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_48_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[22360, -450, -19930]}
        rotation={[0, -0.643, 0]}
        scale={2.494}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_53_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[20580, -560, -23140]}
        rotation={[-Math.PI, -0.129, -Math.PI]}
        scale={[0.475, 0.475, 0.423]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_47_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[21177, -450, -24187]}
        rotation={[0, 1.062, 0]}
        scale={1.669}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_20_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[11101, -470, -19097]}
        rotation={[-Math.PI, 0.735, -Math.PI]}
        scale={[3.266, 2.563, 2.563]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_46_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[14638.001, -450, -22532]}
        rotation={[0, 1.062, 0]}
        scale={1.669}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_50_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[19000, -560, -6010]}
        rotation={[-Math.PI, -0.785, -Math.PI]}
        scale={[0.475, 0.475, 0.423]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_45_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12800, -450, -21186]}
        rotation={[0, -0.166, 0]}
        scale={1.669}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_52_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[13985.001, -560, -21834]}
        rotation={[-Math.PI, -0.129, -Math.PI]}
        scale={[0.475, 0.475, 0.423]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_51_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8290, -560, -20170]}
        rotation={[-Math.PI, 1.269, -Math.PI]}
        scale={[0.475, 0.475, 0.423]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_44_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[13167.999, -26, -9516]}
        rotation={[0, 1.291, 0]}
        scale={1.329}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_19_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[9870, -540, -18600]}
        rotation={[-Math.PI, -0.486, -Math.PI]}
        scale={[3.861, 3.03, 3.03]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Tower_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[17090, -65, -13364.999]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={1.261}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_49_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12345, -128, -8261]}
        rotation={[0, -1.173, 0]}
        scale={[0.491, 0.533, 0.491]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_42_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9113, -560, -11119]}
        rotation={[0, -0.806, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_41_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10262, -390, -11259]}
        rotation={[0, 1.291, 0]}
        scale={1.329}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Arch_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11977, -480, -7387]}
        rotation={[0, 1.254, 0]}
        scale={[1.32, 1.368, 1.32]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_40_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10265, -439, -11701]}
        rotation={[0, 1.111, 0]}
        scale={[1.524, 0.485, 1.105]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_48_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[7030, -660, -11080]}
        rotation={[-Math.PI, -0.913, -Math.PI]}
        scale={[0.422, 0.422, 0.376]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_47_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9420, -555, -8670]}
        rotation={[-Math.PI, 0.718, -Math.PI]}
        scale={[0.475, 0.475, 0.423]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_39_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9586, -448, -8074]}
        rotation={[-Math.PI, 0.069, -Math.PI]}
        scale={1.669}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_17_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[4504, -330, -10146]}
        rotation={[-Math.PI, -1.295, -Math.PI]}
        scale={1.555}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_16_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[4570, -480, -10510]}
        rotation={[-Math.PI, -0.452, -Math.PI]}
        scale={1.85}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_15_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[5240, -540, -9970]}
        rotation={[0, 0.873, 0]}
        scale={2.396}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_21_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[19334, 1046, -11246]}
        rotation={[0, 1.287, 0]}
        scale={0.969}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_20_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[19413, 221, -14842.999]}
        rotation={[0, 0.502, 0]}
        scale={1.163}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_19_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[18605, 847, -15227]}
        rotation={[0, 0.519, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_18_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[16316, -116, -11410]}
        rotation={[-Math.PI, -0.352, -Math.PI]}
        scale={1.163}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_16_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[13163.001, 1, -19550]}
        rotation={[0, 1.166, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[16277, 681, -16488]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Door_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12072, -245, -16091]}
        rotation={[0, -0.454, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_38_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[20150, -450, -11340]}
        rotation={[-Math.PI, 0.345, -Math.PI]}
        scale={3.272}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_46_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[19960, -420, -10400]}
        rotation={[-Math.PI, 0.931, -Math.PI]}
        scale={0.735}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_37_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[19940, 290, -10920]}
        rotation={[-Math.PI, 1.052, -Math.PI]}
        scale={[2.827, 3.229, 2.827]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Door_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[14971.001, 1717, -13972.4]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[18490, 740, -10300]}
        rotation={[-Math.PI, 0.788, -Math.PI]}
        scale={[3.86, 5.897, 5.164]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_45_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[18840, -1120, -9550]}
        rotation={[-Math.PI, 0.931, -Math.PI]}
        scale={[1.343, 1.563, 1.343]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_44_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[17910, -1020, -10460]}
        rotation={[-Math.PI, -0.36, -Math.PI]}
        scale={[1.343, 1.621, 1.343]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_43_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[20370, -1030, -7080]}
        rotation={[-Math.PI, 0.905, -Math.PI]}
        scale={[0.556, 0.556, 0.495]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_42_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[20100, -860, -8210]}
        rotation={[-Math.PI, -0.74, -Math.PI]}
        scale={[0.58, 0.7, 0.58]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_41_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[19040, -860, -8150]}
        rotation={[0, -1.174, 0]}
        scale={[0.856, 1.033, 0.856]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_40_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[22759, -530, -8911]}
        rotation={[-2.023, -1.346, -1.97]}
        scale={0.5}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_02_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[17450, -630, -18290]}
        scale={[5.861, 5.167, 8.205]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_38_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[18915, -430, -12120]}
        rotation={[0, -0.669, 0]}
        scale={[1.239, 0.891, 1.327]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_03_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[18673, -630, -16348]}
        scale={[5.913, 4.451, 11.368]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_37_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[18800, -460, -18420]}
        rotation={[0, 0.532, 0]}
        scale={[1.379, 1.109, 1.379]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_Stairs_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11203, -180, -17040]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Base_01_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12877, -1049, -15139.999]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Base_Circle_03_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12759, -330, -17202]}
        rotation={[0, -0.64, 0]}
        scale={0.812}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Tower_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[18794, 660, -16114.999]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_36_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[17475, -140, -12335]}
        rotation={[-Math.PI, 1.288, -Math.PI]}
        scale={[1.492, 0.744, 1.173]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Door_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[16411, 555, -13085.001]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_35_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[16289.999, -170, -17510]}
        rotation={[-Math.PI, -0.046, -Math.PI]}
        scale={[1.005, 0.952, 1.756]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_34_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[14712, 228, -16449]}
        rotation={[0, -0.284, 0]}
        scale={[0.744, 0.608, 0.934]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Door_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[14592, 797, -17954]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Door_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[14512, 1330, -14339]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Base_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[16144, -367, -12552]}
        scale={[1, 1.113, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Base_Circle_02_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[13885.001, -47, -17977]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_33_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11590, -520, -11460]}
        rotation={[0, 1.308, 0]}
        scale={[1.174, 0.506, 1.174]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_32_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[13557.001, -520, -15397]}
        rotation={[0, 1.297, 0]}
        scale={[1.34, 0.841, 1.043]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Base_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[14410.001, 409, -14860.001]}
        rotation={[0, 1.571, 0]}
        scale={[1, 1.113, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_31_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[18380, -430, -14100]}
        rotation={[-Math.PI, -0.339, -Math.PI]}
        scale={1.184}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Fort_Wall_03_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[14972, 619, -11832]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_30_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[16825, -180, -15607.001]}
        rotation={[0, 0.532, 0]}
        scale={[1.433, 1.433, 1.724]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_29_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[16072, -140, -10018]}
        rotation={[-Math.PI, -0.954, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[15087, -220, -10619]}
        rotation={[0, -0.666, 0]}
        scale={0.909}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[14869, -63, -19227]}
        rotation={[0, -0.665, 0]}
        scale={[1, 0.733, 1]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_05_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[20840, -400, -21970.002]}
        rotation={[0, 1.283, 0]}
        scale={[2.417, 1.695, 2.417]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_16_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[19950, -390, -8730]}
        rotation={[0, -0.265, 0]}
        scale={[2.08, 1.183, 2.08]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_15_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[9870, -370, -9930]}
        scale={[2.964, 1.337, 2.964]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_14_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[10810.001, -390, -19770.002]}
        rotation={[-Math.PI, 0.28, -Math.PI]}
        scale={[2.08, 1.183, 2.08]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_13_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[8510.001, -410, -11370]}
        rotation={[0, -0.403, 0]}
        scale={[2.32, 1.473, 2.32]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_06_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[17110, -440, -10310.001]}
        rotation={[0, -0.835, 0]}
        scale={[3.112, 3.994, 3.112]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_06_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11570, -440, -9130]}
        rotation={[-Math.PI, -1.372, -Math.PI]}
        scale={[1.999, 3.99, 2.876]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_06_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[14270, -440, -10380]}
        rotation={[0, -1.316, 0]}
        scale={[3.112, 3.978, 3.112]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_06_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[20050, -390, -19030]}
        rotation={[0, -1.227, 0]}
        scale={[2.133, 3.458, 2.632]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_06_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[14390.001, -390, -18030]}
        rotation={[0, -0.147, 0]}
        scale={3.563}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_06_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[17530, -420, -18050]}
        rotation={[-Math.PI, 1.38, -Math.PI]}
        scale={[3.112, 3.773, 3.112]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_06_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[16220, -440, -12920.001]}
        rotation={[0, 0.516, 0]}
        scale={[4.202, 3.978, 2.933]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_06_7_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[15860.001, -390, -15110.001]}
        rotation={[-Math.PI, -1.523, -Math.PI]}
        scale={[3.563, 3.563, 3.202]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_9_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12240.677, 482.211, -17739.635]}
        rotation={[0, -1.36, 0]}
        scale={[0.928, 1.856, 0.928]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12696.085, 482.211, -16631.215]}
        rotation={[0, -0.587, 0]}
        scale={[0.946, 1.891, 0.946]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[13330.837, 954.213, -17204.262]}
        rotation={[0, -0.692, 0]}
        scale={[0.956, 1.913, 0.956]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[13030.368, 954.212, -18565.947]}
        rotation={[-Math.PI, -1.22, -Math.PI]}
        scale={[0.906, 1.812, 0.906]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[13827.552, 954.212, -18201.018]}
        rotation={[0, -1.073, 0]}
        scale={[0.95, 1.9, 0.95]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12070.406, 621.213, -12253.751]}
        rotation={[0, 0.024, 0]}
        scale={[0.914, 1.828, 0.914]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_15_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12354.477, 621.212, -13399.447]}
        rotation={[0, 0.656, 0]}
        scale={[0.924, 1.848, 0.924]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_16_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[14224.587, 1523.324, -15036.024]}
        rotation={[0, 1.353, 0]}
        scale={[0.933, 1.865, 0.933]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_17_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[14318.082, 621.213, -11838.58]}
        rotation={[0, 0.287, 0]}
        scale={[0.934, 1.867, 0.934]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_18_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[17036.828, 2320.313, -13315.543]}
        rotation={[0, 0.445, 0]}
        scale={[0.905, 1.81, 0.905]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_19_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[15301.236, 2551.338, -18182.898]}
        rotation={[-Math.PI, -1.386, -Math.PI]}
        scale={[0.925, 1.85, 0.925]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_20_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12426.436, 47.245, -9621.24]}
        rotation={[0.003, 1.179, -0.004]}
        scale={[0.902, 1.804, 0.902]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_21_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10381.66, 46.02, -9448.645]}
        rotation={[-0.002, 0.487, 0.003]}
        scale={[0.909, 1.818, 0.909]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_22_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11042.653, 46.788, -8727.502]}
        rotation={[0.001, 0.211, 0.001]}
        scale={[0.917, 1.835, 0.917]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_23_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12600.204, 37.947, -19690.006]}
        rotation={[-0.004, 0.178, -0.026]}
        scale={[0.968, 1.936, 0.968]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_02_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12191.593, 482.211, -17071.434]}
        rotation={[0, -0.671, 0]}
        scale={[0.967, 1.934, 0.967]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_02_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11740.363, 621.212, -12980.195]}
        rotation={[-Math.PI, 0.937, -Math.PI]}
        scale={[0.903, 1.807, 0.903]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_02_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[13337.655, 621.213, -12152.171]}
        rotation={[0, 1.26, 0]}
        scale={[0.94, 1.88, 0.94]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_02_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[13805.502, 621.212, -13344.745]}
        rotation={[0, -0.439, 0]}
        scale={[0.942, 1.884, 0.942]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_172_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11550.341, 34.331, -17724.016]}
        rotation={[0.051, -0.467, 0.317]}
        scale={0.681}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_173_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11461.615, 25.901, -17501.434]}
        rotation={[-0.528, 0.919, 0.593]}
        scale={0.77}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_174_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11700.64, 30.849, -18010.043]}
        rotation={[3.034, 1.322, 3.044]}
        scale={0.631}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_175_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11551.548, 23.946, -17938.936]}
        rotation={[1.44, -1.278, 1.585]}
        scale={0.682}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_176_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11373.429, 1.787, -17663.318]}
        rotation={[-0.155, -0.042, 0.586]}
        scale={0.703}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_177_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[10465.641, 34.051, -18047.229]}
        rotation={[3.134, -0.853, 2.995]}
        scale={0.537}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_178_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[10280.313, 24.321, -18075.758]}
        rotation={[-0.002, -0.108, 0.207]}
        scale={0.593}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_179_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[10296.833, 11.742, -18237.287]}
        rotation={[-0.72, -0.569, -0.122]}
        scale={0.606}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_180_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[10315.616, 24.182, -17914.27]}
        rotation={[-2.896, 0.907, 2.901]}
        scale={0.654}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_181_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9865.683, 36.636, -8917.359]}
        rotation={[0.016, -0.342, 0.028]}
        scale={0.546}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_182_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9766.883, 38.13, -9149.097]}
        rotation={[0.124, -1.369, 0.124]}
        scale={0.678}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_183_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9648.056, 21.214, -9014.754]}
        rotation={[-2.997, 1.405, 2.93]}
        scale={0.633}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_184_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9592.991, 25.663, -9295.237]}
        rotation={[-0.056, 0.526, 0.17]}
        scale={0.587}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_185_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9698.252, 39.654, -9434.065]}
        rotation={[0.013, -0.49, 0.025]}
        scale={0.854}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_186_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9931.738, 45.41, -9150.832]}
        rotation={[-3.038, 1.439, 3.039]}
        scale={0.801}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_187_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[10092.983, 46.449, -8934.577]}
        rotation={[0.011, -0.66, 0.014]}
        scale={0.751}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_188_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[10199.916, 44.315, -8677.545]}
        rotation={[0, 0.36, 0.014]}
        scale={0.657}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_189_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9960.799, 29.712, -8695.185]}
        rotation={[0.012, 0.169, 0.05]}
        scale={0.601}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_190_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9982.047, 40.737, -8828.001]}
        rotation={[-0.039, 1.103, 0.051]}
        scale={0.527}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_191_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[12150.677, 39.817, -10492.73]}
        rotation={[3.079, -1.441, 3.076]}
        scale={0.544}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_192_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[12668.826, 46.424, -10753.21]}
        rotation={[0.003, -0.66, 0.007]}
        scale={0.814}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_193_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[12568.666, 45.773, -10457.723]}
        rotation={[2.98, -1.527, 2.981]}
        scale={0.526}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_194_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[12641.401, 46.173, -10299.482]}
        rotation={[-0.002, 0.544, 0.005]}
        scale={0.635}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_195_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11971.752, 51.678, -9042.141]}
        rotation={[-3.14, -1.15, -3.14]}
        scale={0.643}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_196_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11701.966, 51.554, -8942.468]}
        rotation={[0.002, 1.445, -0.001]}
        scale={0.591}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_197_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11538.086, 51.195, -8859.962]}
        rotation={[-3.141, -0.576, 3.141]}
        scale={0.617}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_198_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11871.465, 51.353, -8893.034]}
        rotation={[-0.005, -1.503, -0.006]}
        scale={0.703}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_199_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[12142.596, 51.225, -8933.177]}
        rotation={[0.001, 0.069, -0.001]}
        scale={0.705}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_200_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[12281.082, 51.291, -9093.235]}
        rotation={[-0.002, -1.226, -0.003]}
        scale={0.553}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_201_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[12045.468, 51.657, -9107.32]}
        rotation={[-3.141, -0.639, -3.141]}
        scale={0.768}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_202_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11740.441, 51.94, -9140.673]}
        rotation={[0, -0.339, 0]}
        scale={0.762}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_203_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11413.386, 51.912, -9297.758]}
        rotation={[0, 0.452, 0]}
        scale={0.832}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_204_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[10583.52, 47.937, -8663.431]}
        rotation={[0.003, -0.601, 0.003]}
        scale={0.84}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_205_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11958.246, 30.37, -20992.135]}
        rotation={[1.663, -1.301, 1.584]}
        scale={0.603}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_206_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11906.021, 31.218, -21271.451]}
        rotation={[0.652, -1.346, 0.603]}
        scale={0.609}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_207_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11756.5, 23.656, -21468.967]}
        rotation={[-3.116, 0.347, 2.761]}
        scale={0.667}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_208_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11778.741, 26.788, -21366.229]}
        rotation={[2.65, -1.283, 2.547]}
        scale={0.53}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_209_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11155.243, -104.056, -18910.936]}
        rotation={[1.105, -0.627, 1.41]}
        scale={0.623}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_210_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11262.296, -70.053, -19050.547]}
        rotation={[-2.165, 0.661, 1.649]}
        scale={0.768}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_211_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11926.432, 43.688, -18948.52]}
        rotation={[3.118, -0.872, 3.113]}
        scale={0.558}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_212_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11979.154, 45.113, -18797.307]}
        rotation={[-3.119, 1.04, -3.138]}
        scale={0.698}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_213_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[12086.803, 44.104, -19138.488]}
        rotation={[-0.008, -0.975, 0.013]}
        scale={0.604}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_214_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[12316.72, 44.376, -19003.133]}
        rotation={[-3.111, -0.396, -3.107]}
        scale={0.528}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_84_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[10244.223, -1422.852, -19941.061]}
        rotation={[-Math.PI, -0.891, -Math.PI]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_215_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[13515.101, 42.496, -20241.719]}
        rotation={[3.126, -0.438, 3.133]}
        scale={0.569}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_216_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[13706.868, 41.1, -20483.932]}
        rotation={[-0.03, 0.876, 0.011]}
        scale={0.781}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_83_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[15610.085, -1422.852, -20894.631]}
        rotation={[0, 0.041, 0]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_217_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[13444.786, 38.865, -20409.652]}
        rotation={[-0.041, 0.374, 0.029]}
        scale={0.731}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_218_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[13331.873, 43.606, -20106.389]}
        rotation={[-3.031, 1.532, 3.021]}
        scale={0.588}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_219_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[13242.681, 44.54, -19930.318]}
        rotation={[-0.005, -0.659, 0.005]}
        scale={0.629}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_86_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[7594.829, -1422.852, -10397.148]}
        rotation={[0, -0.03, 0]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_85_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[10365.929, -1422.852, -13944.899]}
        rotation={[0, 1.298, 0]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_87_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[10845.718, -1422.852, -8530.222]}
        rotation={[-Math.PI, 0.266, -Math.PI]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_88_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[17357.033, -1422.852, -7183.334]}
        rotation={[0, 0.038, 0]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_89_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[21915.143, -1422.852, -10534.8]}
        rotation={[0, 1.534, 0]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_90_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[21455.016, -1422.852, -17548.43]}
        rotation={[0, 1.308, 0]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_91_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[21176.436, -1422.852, -22298.146]}
        rotation={[0, 1.308, 0]}
        scale={[5.885, 8.736, 4.118]}
      />
    </group>
  );
}
