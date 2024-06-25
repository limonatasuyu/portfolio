import { useCompoundBody } from "@react-three/cannon";

export default function CityIsland({ nodes, materials }) {
  const shapes = [
    { position: [120, 0, 80], rotation: [0, 0, 0], args: [15, 3, 40] },
    { position: [158, 0, 38], rotation: [0, 0.2, 0], args: [35, 3, 10] },
    { position: [180, 0, 45], rotation: [0, -0.8, 0], args: [35, 3, 10] },
    { position: [211, 0, 65], rotation: [0, -0.8, 0], args: [35, 3, 10] },
    { position: [187, 0, 158], rotation: [0, 0, 0], args: [15, 3, 30] },
    { position: [168, 0, 190], rotation: [0, -0.4, 0], args: [20, 3, 40] },
    { position: [205, 0, 120], rotation: [0, -0.6, 0], args: [10, 3, 90] },
    { position: [203.5, 0, 173], rotation: [0, 0, 0], args: [15, 3, 28] },
    { position: [126, 0, 45], rotation: [0, 0.85, 0], args: [35, 3, 35] },
    { position: [100, 0, 150], rotation: [0, -0.5, 0], args: [15, 3, 35] },
    { position: [110, 0, 120], rotation: [0, 0.85, 0], args: [15, 3, 35] },
    { position: [120, 0, 100], rotation: [0, 0.9, 0], args: [5, 3, 40] },
    { position: [120, 0, 185], rotation: [0, 1, 0], args: [30, 3, 55] },
  ];

  const [ref] = useCompoundBody(() => ({
    mass: 0,
    type: "Static",
    shapes: shapes.map((shape) => ({
      type: "Box",
      position: shape.position,
      rotation: shape.rotation,
      args: shape.args,
    })),
  }));

  return (
    <group position={[17394.703, -1657.335, 11863.403]} rotation={[0, -0.7, 0]}>
      <group ref={ref} />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_09_PolygonPirates_Material_02_A_0.geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[-5419, 256, -1080]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_06_PolygonPirates_Material_02_A_0.geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[-5493, 586, -1080]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_02_PolygonPirates_Material_02_A_0.geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[-5420, 916, -1075]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_Square_01_PolygonPirates_Material_02_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[-5456, 1238, -1075]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5478.997, 256, -679]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5077.997, 256, -707.004]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5062.997, 583, -707.004]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5460.998, 584, -705]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Debris_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-326, 272, 3539]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_99_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3522, 240, -495]}
        rotation={[-Math.PI, 0.787, -Math.PI]}
        scale={1.11}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_100_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3364, 281, -372]}
        rotation={[0, -0.177, 0]}
        scale={1.214}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_96_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-762, 242, 7468]}
        rotation={[0, 0.762, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_94_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1615, 229, 8294]}
        rotation={[-Math.PI, -1.082, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_52_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5364.7, 1226, -886.1]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Debris_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1152, 278, 3805]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_88_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3150, -970, 5860]}
        rotation={[-Math.PI, -1.492, -Math.PI]}
        scale={[1.592, 1.246, 1.592]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_61_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2830, 290, 6630]}
        rotation={[-Math.PI, 0.155, -Math.PI]}
        scale={[3.86, 5.897, 5.164]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_32_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5632, 1015, -1082]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_95_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1621, 242, 8236]}
        rotation={[-Math.PI, -0.291, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_89_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1729, 221, 1666]}
        rotation={[0, 0.293, 0]}
        scale={1.15}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_53_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[5436, -128, 1469]}
        rotation={[0, -0.355, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_98_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2559, 242, 7242]}
        rotation={[-Math.PI, 0.787, -Math.PI]}
        scale={1.11}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_103_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3363, 240, -1704]}
        rotation={[-Math.PI, -0.38, -Math.PI]}
        scale={0.928}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_39_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5629, 427, -1188]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_60_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-680, -400, 8600]}
        rotation={[0, -0.875, 0]}
        scale={1.912}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_37_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5084, 447, -510]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_86_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1860, -1100, 7850]}
        rotation={[-Math.PI, 0.639, -Math.PI]}
        scale={[1.259, 1.421, 1.259]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_105_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5170, 240, -1426]}
        rotation={[0, 1.127, 0]}
        scale={0.928}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_59_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[530, -660, 7840]}
        rotation={[-Math.PI, -1.275, -Math.PI]}
        scale={4.197}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_102_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3034, 240, -2271]}
        rotation={[-Math.PI, 0.624, -Math.PI]}
        scale={0.928}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_88_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2033, 251, 1805]}
        rotation={[0, -0.606, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_86_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[5383, -138, 1419]}
        rotation={[0, 0.84, 0]}
        scale={0.96}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_40_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5350, 1048, -1257]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_89_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3420, -1000, 6580]}
        rotation={[0, -0.759, 0]}
        scale={[1.007, 1.536, 1.007]}
      />
      <mesh
        geometry={nodes.SM_Prop_Door_10_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-5464, 274, -1265]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_41_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5499, 1048, -1257]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_50_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5642, 1253, -968]}
        rotation={[-3.142, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_101_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2916, 240, -2147]}
        rotation={[0, 0.774, 0]}
        scale={1.11}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_31_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5079, 438, -905]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_87_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[600, -850, 9110]}
        rotation={[0, 0.837, 0]}
        scale={[1.007, 1.215, 1.007]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_92_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1670, -580, -910]}
        rotation={[-Math.PI, 0.638, -Math.PI]}
        scale={[1.11, 0.745, 1.11]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_97_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2532, 242, 7470]}
        rotation={[-Math.PI, -0.956, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_49_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4892, 584, -721]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_87_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1652, 251, -67]}
        rotation={[0, 0.743, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_51_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5265, 907, -1096]}
        rotation={[3.142, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_38_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5629, 427, -1039]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_70_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[4212, -374, 2058]}
        rotation={[0, -0.299, 0]}
        scale={[2.068, 1.221, 2.068]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_91_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3350, -780, 8096]}
        rotation={[-Math.PI, 1.127, -Math.PI]}
        scale={[0.764, 0.922, 0.764]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_33_PolygonPirates_Material_02_A_0.geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[-5450, 761, -1281]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_93_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1773, 222, 8247]}
        rotation={[-Math.PI, -0.607, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_90_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1313, 220, 6191]}
        rotation={[0, 0.293, 0]}
        scale={1.15}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_92_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[886, 250, 6673]}
        rotation={[-Math.PI, 0.684, -Math.PI]}
        scale={0.92}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_90_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3535.226, -790, 3725.576]}
        rotation={[-Math.PI, 1.207, -Math.PI]}
        scale={[0.709, 0.856, 0.709]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Sunshade_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5455, 231, -1320]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_Top_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5376, 516, -532]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3052, -462, 2772]}
        scale={0.447}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_91_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1009, 220, 6686]}
        rotation={[0, -1.117, 0]}
        scale={1.15}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_104_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5533, 271, 1098]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_35_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[5380, -660, 7920]}
        rotation={[-Math.PI, 0.192, -Math.PI]}
        scale={4.632}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_30_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3587, 388, 773]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_21_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1287, 274, 925]}
        rotation={[-Math.PI, 0.65, -Math.PI]}
        scale={[1, 0.962, 1]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_63_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-4675, 274, 1628]}
        rotation={[3.103, -0.229, -3.096]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_11_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[718, 270, 2811]}
        rotation={[-Math.PI, -0.684, -Math.PI]}
        scale={[1, 0.926, 1]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_14_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[854, 270, 4607]}
        rotation={[-Math.PI, 1.284, -Math.PI]}
        scale={[1, 0.926, 1]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_59_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[888, 274, 1876]}
        rotation={[3.099, -0.506, -3.108]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_23_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1016, 271, 2975]}
        rotation={[0, -0.861, 0]}
        scale={[1, 0.962, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_26_PolygonPirates_Material_04_A_0.geometry
        }
        material={materials.PolygonPirates_Material_04_A}
        position={[-3587.7, 783.6, 749.5]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_19_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1589, 446.9, -140]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_34_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-2799, 285, 3308]}
        rotation={[-Math.PI, 0.291, -Math.PI]}
        scale={[1, 1.103, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_28_PolygonPirates_Material_02_A_0.geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[-3775, 722, 507]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1537, 747, 3835]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_Top_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4141, 882, 223.8]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Prop_Door_08_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1691.6, 274, 2176.5]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_26_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1831, 275, 1692]}
        rotation={[-Math.PI, 1.349, -Math.PI]}
        scale={[1, 0.926, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Balcony_06_PolygonPirates_Material_04_A_0.geometry
        }
        material={materials.PolygonPirates_Material_04_A}
        position={[1568, 653, 3090]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Prop_Door_03_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[1533.7, 636.6, 3090]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2711, 944, -464]}
        rotation={[-Math.PI, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3772, 931, 408]}
        rotation={[-Math.PI, 1.571, 0]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Balcony_12_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-216, 655, 2940]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Prop_Door_01_PolygonPirates_Material_02_A_0.geometry}
        material={materials.PolygonPirates_Material_02_A}
        position={[-216, 664.9, 2922.8]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_Top_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2238, 833, 3043.7]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Balcony_07_PolygonPirates_Material_04_A_0.geometry
        }
        material={materials.PolygonPirates_Material_04_A}
        position={[1568, 653, 3413]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Door_03_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1533.7, 636.6, 3413]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_Long_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3208, 271, 1515]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_Long_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3235, 601, 1515]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3202, 989, 1515]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_03_1_PolygonPirates_Material_04_A_0.geometry
        }
        material={materials.PolygonPirates_Material_04_A}
        position={[-3183.001, 271, 926]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_Long_03_PolygonPirates_Material_04_A_0.geometry
        }
        material={materials.PolygonPirates_Material_04_A}
        position={[-3771.001, 271, 983.004]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_Long_05_1_PolygonPirates_Material_04_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_04_A}
        position={[-3771.001, 604, 983.004]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_01_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3558.001, 932, 951.002]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_04_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3956.001, 926, 954.006]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_04_1_PolygonPirates_Material_02_A_0.geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[-3183.001, 600, 926]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Balcony_Corner_01_PolygonPirates_Material_02_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[-3079.002, 553, 814.999]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_04_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3199.901, 940.6, 935.7]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[208, 261, 3119]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_Square_01_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[172, 593, 3119]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2067.2, 438, 2541.3]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Balcony_10_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-4132, 655, 225]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Door_01_1_PolygonPirates_Material_02_A_0.geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[-4149.2, 664.9, 225]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Balcony_11_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-556, 655, 2940]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Door_01_2_PolygonPirates_Material_02_A_0.geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[-556, 664.9, 2922.8]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4359.999, 270, 194.998]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_04_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4337.002, 270, 571.998]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_03_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4360.004, 270, 970.998]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_04_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4340.004, 590, 961.998]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_01_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4338.001, 590, 571.998]}
        rotation={[0, -1.571, 0]}
        scale={[0.916, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_02_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4338, 590, 197.998]}
        rotation={[0, -1.571, 0]}
        scale={[0.935, 1, 1]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_62_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-3883, 274, 2010]}
        rotation={[3.104, -0.022, -3.088]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Balcony_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2977, 637, 1354]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Door_03_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3011.3, 620.6, 1354]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_61_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-3876, 274, 2305]}
        rotation={[0.063, -0.928, 0.105]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_22_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1234, 270, 3282]}
        rotation={[-Math.PI, -0.059, -Math.PI]}
        scale={[1, 1.103, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Stall_Cloth_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1044, 257, 3530]}
        rotation={[0, -1.571, 0]}
        scale={[0.686, 1.147, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Stall_Cloth_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-443, 266, 2440]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.715, 1.16, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Balcony_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1920, 653, -869]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Door_03_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1954.3, 636.6, -869]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Balcony_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2977, 637, 1672]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Door_03_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3011.3, 620.6, 1672]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Stall_Cloth_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2340, 661, -336]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_Long_04_1_PolygonPirates_Material_03_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1686, 263, 2552]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_Long_03_1_PolygonPirates_Material_02_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[-1653, 587, 2552]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_Square_01_2_PolygonPirates_Material_02_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[-1685, 923.9, 2366]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_Square_02_PolygonPirates_Material_02_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[-1685, 925, 2732]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_29_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[266, 1068, 367]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_31_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-3375, 285, 3925]}
        rotation={[-Math.PI, -1.171, -Math.PI]}
        scale={[1, 1.103, 1]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_24_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1973, 275, 724]}
        rotation={[-Math.PI, -1.102, -Math.PI]}
        scale={[1, 0.926, 1]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_30_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-3802, 257, 4428]}
        rotation={[-3.009, 1.146, 3.003]}
        scale={[1, 1.337, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_05_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2086, 259, 3143]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_03_3_PolygonPirates_Material_04_A_0.geometry
        }
        material={materials.PolygonPirates_Material_04_A}
        position={[-2086, 586, 3143]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Balcony_Corner_01_1_PolygonPirates_Material_04_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_04_A}
        position={[-2197, 558.7, 3253.2]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_04_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2062, 916, 3115]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_04_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1679, 259, 3117.999]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_07_1_PolygonPirates_Material_04_A_0.geometry
        }
        material={materials.PolygonPirates_Material_04_A}
        position={[-1683, 586, 3152.999]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_01_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1683, 910.1, 3112.999]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Arch_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1313, 259, 3117.999]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_06_1_PolygonPirates_Material_02_A_0.geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[-1313, 727, 3157.999]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_01_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1313, 1057, 3113.999]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Arch_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-942, 259, 3117.999]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_06_2_PolygonPirates_Material_02_A_0.geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[-942, 727, 3157.999]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_01_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-942, 1057, 3113.999]}
        scale={[1, 0.976, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_05_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2086.001, 259, 2744]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_02_1_PolygonPirates_Material_02_A_0.geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[-2061.001, 590, 2712]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_01_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2061.001, 912, 2725]}
        rotation={[0, 1.571, 0]}
        scale={[0.908, 0.969, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6160, 260, 1780]}
        rotation={[0, -0.494, 0]}
        scale={[0.943, 1, 0.995]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_Top_01_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6160, 424.3, 1780]}
        rotation={[0, -0.494, 0]}
        scale={[0.943, 1, 0.995]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_25_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3014.4, 933.6, 1510.5]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_28_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-2491, 279, 4443]}
        rotation={[-Math.PI, 0.66, -Math.PI]}
        scale={[1, 1.103, 1]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_25_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-2333, 276, 1416]}
        rotation={[0, 1.203, 0]}
        scale={[1, 0.962, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5090, 260, 1790]}
        scale={[0.877, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4890.912, 260, 1790]}
        scale={[0.877, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3350, 260, 5760]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_2_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3350, 260, 5988]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_36_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4059.9, 799, 23.7]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_19_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1278, 271, 1785]}
        rotation={[-Math.PI, -0.167, -Math.PI]}
        scale={[1, 0.962, 1]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_35_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2697.4, 792, -772.7]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_18_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1136, 270, 2511]}
        rotation={[-Math.PI, 1.019, -Math.PI]}
        scale={[1, 0.926, 1]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_34_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2697.4, 792, -1009.1]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4240, 260, 1790]}
        scale={[0.877, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_3_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4040.912, 260, 1790]}
        scale={[0.877, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_Top_01_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4040.912, 424.3, 1790]}
        scale={[0.877, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_31_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1569, 271.1, 2178]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_Top_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1514, 848.2, 3407.5]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_19_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3350, -530, 6730]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_End_01_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3349.999, -530, 6975]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_22_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3350, 260, 6250]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_4_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3350, 260, 6478]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_Top_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1514, 848.2, 3084.3]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_15_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-381, 270, 2113]}
        rotation={[-Math.PI, -0.18, -Math.PI]}
        scale={[1, 0.926, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_Top_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1260.9, 515.7, 1977.8]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_Top_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-214.6, 860.1, 2944.2]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_Top_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1688.2, 836.7, 2189.4]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_12_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[363, 271, 2268]}
        rotation={[0, -0.623, 0]}
        scale={[1, 0.962, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_Top_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2077.2, 852, -1053.5]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_10_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[641, 270, 3702]}
        rotation={[0, 0.241, 0]}
        scale={[1, 0.926, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_Top_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1152.1, 832.9, 2811]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_07_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[362, 270, 3804]}
        rotation={[0, -0.623, 0]}
        scale={[1, 0.926, 1]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_33_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1527, 784.4, 2747.9]}
        rotation={[-0.496, 1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_06_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-370, 270, 3989]}
        rotation={[-Math.PI, 1.493, -Math.PI]}
        scale={[1, 1.103, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Sunshade_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4586, 242, 498]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_60_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[761, 274, 176]}
        rotation={[3.104, -0.065, -3.089]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_32_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[969, 447, 1955.6]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_03_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1023, 271, 3955]}
        rotation={[-Math.PI, -1.307, -Math.PI]}
        scale={[1, 0.841, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Sunshade_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1542, 242, -431]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_58_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[1547, 274, 4751]}
        rotation={[0.261, 1.425, -0.204]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_57_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[1667.934, 274, 3529.253]}
        rotation={[2.846, 1.441, -2.794]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_02_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1879, 267, 3817]}
        scale={[1, 1.337, 1]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_56_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[1588, 274, 3160]}
        rotation={[0.045, -0.581, 0.079]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_31_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1514.4, 427, 2634]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_30_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1514.4, 427, 2485]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4040, 260, 3000]}
        rotation={[0, -1.571, 0]}
        scale={[0.997, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_5_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4040, 260, 3236.181]}
        rotation={[0, -1.571, 0]}
        scale={[0.997, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Sunshade_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1594, 242, 3852]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1516.6, 1015.5, 2527.8]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Sunshade_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1084, 242, 3780]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_38_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-774, 274, 3253]}
        rotation={[0.038, -0.113, 0.059]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_38_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4152.1, 925.1, 386.6]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_23_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1962, 741, -571]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_28_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2135.9, 1246.5, -689.2]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_35_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-9, 923, 3218]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_19_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1150, 906.8, 2541.8]}
        rotation={[-3.142, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_26_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1959, 407, -62]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_37_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1955.8, 1247.8, -607.5]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_22_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1149.1, 598.3, 3723]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_16_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5940, 260, 1790]}
        scale={[0.877, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_6_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5740.912, 260, 1790]}
        scale={[0.877, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_30_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-405.5, 924.7, 2931.5]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_18_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[202, 264.4, 2929.3]}
        rotation={[-Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_22_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-754.8, 806, 1534.6]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_39_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-766, 1005.8, 1611]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_25_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2038.6, 1082.1, -670.7]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4148, 651, 1004]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Bld_Dock_13_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-4330, -590, 3180]}
      />
      <mesh
        geometry={nodes.SM_Bld_Dock_11_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-4330, -760, 2467]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Bld_Dock_10_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-4330, -590, 2077]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_11_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4331.003, -760, 2841]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_10_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4331, -590, 3550]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Sunshade_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1762, 257, -880]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4300, 110, 4810]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_7_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4536.8, 110, 4809.999]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_Top_01_2_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4536.8, 274.3, 4809.999]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_13_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3350, -530, 5740]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_End_01_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3355.999, -530, 5496]}
        rotation={[-Math.PI, 1.125, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_20_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6920, 260, 370]}
        rotation={[0, -1.571, 0]}
        scale={[0.877, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_8_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6919.999, 260, 569.088]}
        rotation={[0, -1.571, 0]}
        scale={[0.877, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6920, 260, 140.215]}
        rotation={[0, -1.571, 0]}
        scale={[0.877, 1, 1]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_29_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1274, 812, 2940]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_19_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6920, 260, 810]}
        rotation={[0, -1.571, 0]}
        scale={[0.938, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_9_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6919.999, 260, 1023.006]}
        rotation={[0, -1.272, 0]}
        scale={[0.944, 1, 0.995]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_Top_01_3_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6919.999, 424.3, 1023.006]}
        rotation={[0, -1.272, 0]}
        scale={[0.944, 1, 0.995]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_17_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1327.4, 1049.5, 2929.2]}
        rotation={[Math.PI, 0, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_06_3_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3951, 270, 565]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_07_2_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3920.999, 270, 199]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Arch_01_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3961.998, 270, -163]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_01_7_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3961.998, 739, -163]}
        rotation={[0, 1.571, 0]}
        scale={[0.9, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_02_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3961.998, 739, -503]}
        rotation={[0, 1.571, 0]}
        scale={[0.793, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Arch_02_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3961.998, 270, -515]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Arch_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3961.997, 270, -866]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_04_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3961.997, 736.1, -866]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Arch_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3599.997, 270, -864.999]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_01_8_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3599.997, 729, -864.999]}
        scale={[0.937, 0.998, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_02_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3230.997, 729, -864.999]}
        scale={[0.877, 0.931, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2892.997, 729, -864.999]}
        scale={[0.877, 0.947, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Arch_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3245.997, 270, -864.998]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Arch_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2886.997, 270, -864.998]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_Long_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2335.997, 270, -900]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_Long_03_2_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2335.997, 599, -900]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_02_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2335.997, 977, -868]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_Long_04_2_PolygonPirates_Material_03_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2335.995, 270, -490]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_Long_02_1_PolygonPirates_Material_03_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2335.995, 599, -463]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_05_3_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2144.995, 929, -469.002]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_Square_01_3_PolygonPirates_Material_03_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2143.995, 1256, -498.002]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_Square_01_4_PolygonPirates_Material_03_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2523.995, 931, -496.998]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_04_4_PolygonPirates_Material_04_A_0.geometry
        }
        material={materials.PolygonPirates_Material_04_A}
        position={[-1778.995, 270, -500.005]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_07_3_PolygonPirates_Material_04_A_0.geometry
        }
        material={materials.PolygonPirates_Material_04_A}
        position={[-1778.992, 270, -85.005]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_01_9_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1778.992, 598, -105.005]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_02_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1778.996, 598, -508.005]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_02_2_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3990, 603, 575]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_06_4_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3922.997, 603, 201]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_01_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3955.998, 928, 202]}
        rotation={[0, 1.571, 0]}
        scale={[0.963, 0.962, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_01_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3959, 929, 578]}
        rotation={[0, -1.571, 0]}
        scale={[0.883, 0.894, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2271, 945.2, -307.1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4300, 110, 4120]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_10_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4536.8, 110, 4119.999]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_Top_01_4_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4536.8, 274.3, 4119.999]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_41_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[843, 274, 2376]}
        rotation={[3.099, 0.467, -3.068]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_46_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1041, 1058, 3307]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_53_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-2838, 274, 1526]}
        rotation={[3.081, -0.907, -3.135]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={nodes.SM_Prop_Well_01_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-3125, 273, 117]}
        rotation={[0, -0.68, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_27_PolygonPirates_Material_02_A_0.geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[-3775, 722, 655]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_29_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6734, 260, 393]}
        rotation={[0, 1.317, 0]}
        scale={0.96}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3350, 260, 6740]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_11_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3349.999, 260, 6976.8]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_Top_01_5_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3349.999, 424.3, 6976.8]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_16_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1768.4, 965.4, 2177]}
        rotation={[Math.PI, 0, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_15_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1747.3, 279.4, -688.6]}
        rotation={[-Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1336, 256, 3849]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_Long_04_3_PolygonPirates_Material_04_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_04_A}
        position={[1335.999, 256, 3286]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_07_4_PolygonPirates_Material_02_A_0.geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[1303.997, 256, 2526]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_06_5_PolygonPirates_Material_02_A_0.geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[1377.997, 586, 2526]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_02_3_PolygonPirates_Material_02_A_0.geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[1304.997, 916, 2521]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_Square_01_5_PolygonPirates_Material_02_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[1340.997, 1238, 2521]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_03_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1363.996, 256, 2125]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_04_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[962.996, 256, 2153.003]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_01_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[947.996, 583, 2153.003]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_04_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1345.996, 584, 2151]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_Long_05_2_PolygonPirates_Material_04_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_04_A}
        position={[1303.999, 581, 3286]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_02_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1334.999, 971, 3286]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Arch_02_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1335.998, 256, 2811]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_Short_01_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1302.998, 585, 2811]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_03_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1334.998, 914, 2811]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_05_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1310, 584, 3849]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_01_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1339, 911, 3849]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_20_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1867, 393, 2419]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4040, 260, 3910]}
        rotation={[0, -1.571, 0]}
        scale={[0.938, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_12_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4040, 260, 4123.006]}
        rotation={[0, -1.571, 0]}
        scale={[0.938, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_Top_01_6_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4040, 424.3, 4123.006]}
        rotation={[0, -1.571, 0]}
        scale={[0.938, 1, 1]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_24_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2212, 1082.1, -670.7]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_28_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1156, 274, 5231]}
        rotation={[0, 0.204, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_24_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-265, 673, 366]}
        rotation={[-Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4040, 260, 2040]}
        rotation={[0, -1.571, 0]}
        scale={[0.934, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_13_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4040, 260, 2261.207]}
        rotation={[0, -1.571, 0]}
        scale={[0.934, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_26_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3466, 598.1, 759.7]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3870, 260, 4970]}
        rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_14_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4037.442, 260, 4802.557]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_Top_01_7_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4037.442, 424.3, 4802.557]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4040, 260, 2520]}
        rotation={[0, -1.571, 0]}
        scale={[0.957, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_15_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4040, 260, 2746.663]}
        rotation={[0, -1.571, 0]}
        scale={[0.957, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_20_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1526.7, 1252.7, 2413.7]}
        rotation={[3.142, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_18_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6740, 260, 1210]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[1.015, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_16_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6577.07, 260, 1372.93]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[1.015, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_21_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6920, 260, -120]}
        rotation={[0, 1.571, 0]}
        scale={[0.938, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_17_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6920, 260, -333.006]}
        rotation={[0, 1.571, 0]}
        scale={[0.938, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_Top_01_8_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6920, 424.3, -333.006]}
        rotation={[0, 1.571, 0]}
        scale={[0.938, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_41_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-765, 584, 2850]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_Long_03_3_PolygonPirates_Material_03_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-388, 263, 3153]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_Long_05_3_PolygonPirates_Material_03_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-388, 593, 3153]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_02_7_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-380, 984, 3117]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Room_Long_06_PolygonPirates_Material_04_A_0.geometry
        }
        material={materials.PolygonPirates_Material_04_A}
        position={[-388, 263, 2707]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Roof_02_8_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-388, 649, 2731]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_23_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-755, 806, 197]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_23_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[298.3, 673.2, 1428.1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Sunshade_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2814, 257, 1686]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3156.5, 595.5, 1891.3]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4670, 260, 1790]}
        scale={[0.877, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_18_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4470.912, 260, 1790]}
        scale={[0.877, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_07_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1947, 1097, -504]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_47_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1647, 274, -649]}
        rotation={[0.134, 1.286, -0.074]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_VineWall_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3420, 261, -864.4]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_28_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1126, 812, 2940]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_15_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1348.8, 725.7, 2350.1]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_45_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1867.2, 907.7, 3306.9]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Debris_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1905, 264, 4263]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3005.8, 460, 1348]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_33_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1526, 908, 2948]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1688, 669, 2189]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_24_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-3741, 264, 4050]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.SM_Bld_Dock_09_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-5050, -430, 4280]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_11_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4341, -600, 4280.001]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_10_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4686, -430, 4280]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_10_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5415, -430, 4280.999]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_11_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6489, -600, 4281.001]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Bld_Dock_12_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-5775, -430, 4280.998]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_11_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6120, -600, 4280.999]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_13_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5792.999, -430, 3908.998]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Bld_Dock_14_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-7267.996, -430, 2085.995]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_Stairs_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6608.995, -38, 2091.997]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Bld_Dock_15_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-6549.996, -760, 2081.997]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Bld_Dock_16_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-6900.995, -430, 2083.996]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Bld_Dock_20_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-6164.999, -439, 3908.997]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_37_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1986, 274, 3433]}
        rotation={[0.04, 0.312, 0.043]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_17_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1514, 362, 3296]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4040, 260, 3480]}
        rotation={[0, -1.571, 0]}
        scale={[0.888, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_19_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4040, 260, 3681.366]}
        rotation={[0, -1.571, 0]}
        scale={[0.888, 1, 1]}
      />
      <mesh
        geometry={nodes.SM_Prop_Door_09_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[1540.4, 269, 3845.9]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_15_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5520, 260, 1790]}
        scale={[0.877, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_20_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5320.912, 260, 1790]}
        scale={[0.877, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3520, 260, 5320]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_01_21_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3352.557, 260, 5487.443]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_End_Top_01_9_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3352.557, 424.3, 5487.443]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_43_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1148, 590, 3135]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_39_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[317, 274, 3271]}
        rotation={[0.056, -0.841, 0.097]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_54_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-2864, 274, 1295]}
        rotation={[0.045, -0.581, 0.079]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_46_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-2816, 274, -1139]}
        rotation={[3.067, -1.045, 3.131]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_18_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1514, 362, 3490]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_29_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4329, 464.9, -11]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_32_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1325, 1239, 2328.4]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Prop_Door_02_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-2, 601, 3114]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_16_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1514, 362, 3086]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_36_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1498.2, 911.3, 2432.6]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Hall_Room_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-665, 260, 886]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Hall_Front_01_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-665, 693, 886]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Hall_Room_04_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[15.002, 260, 1569.999]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Hall_Room_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[14.998, 260, 202.998]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Hall_Room_05_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[705, 260, 886.997]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Hall_Front_01_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[705, 693, 886.997]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Hall_Room_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[18.001, 691, 1269.998]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Hall_Room_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[17.999, 691, 520.998]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Hall_Room_02_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[18.002, 748, 893.999]}
        rotation={[0, 1.571, 0]}
        scale={[1.28, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Hall_Tower_01_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-642.999, 260, 1562]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Hall_Tower_02_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-643.001, 260, 225]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Sunshade_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[184, 257, 2733]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Stall_Cloth_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2234, 661, 2744]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_47_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1455, 1248.2, 2708.5]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_10_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4300, -530, 1790]}
        scale={[1.038, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_End_01_2_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4066.402, -530, 1812]}
        rotation={[0, -0.754, 0]}
        scale={[1.02, 1, 1.219]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Door_03_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3210, 284, 1899]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_24_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1962, 741, -423]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_52_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-2970, 274, 1845]}
        rotation={[3.083, 0.878, -3.041]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_48_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1945, 274, -7]}
        rotation={[3.064, 1.067, -3.018]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_42_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[776.7, 584, 2167]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[963.8, 438.2, 2351.2]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_07_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5910, -530, 1790]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.06, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_End_01_3_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6151.679, -530, 1777.001]}
        rotation={[-Math.PI, 0.472, -Math.PI]}
        scale={[1.048, 1, 1.012]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_27_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1959, 407, -215]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_39_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-800, -380, 6260]}
        rotation={[0, 1.571, 0]}
        scale={[3.022, 5.262, 3.022]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_10_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4690, -430, 4650]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_11_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5396, -600, 4653.999]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_10_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5793, -430, 4649.998]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_11_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5029, -600, 4651.002]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_10_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4320, -430, 4651.001]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_45_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-4498, 274, -48]}
        rotation={[0.075, -1.042, 0.119]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_40_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1874.1, 912.1, 2306.2]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_27_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2439.7, 912, -1053.7]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_14_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3154.5, 735.2, 1879.4]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_25_PolygonPirates_Material_02_A_0.geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[-2705, 717, -494]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_43_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-2039, 274, 2369]}
        rotation={[3.065, 1.054, -3.021]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_21_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1867, 393, 2271]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_14_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5800, -590, 2080]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_11_7_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5095, -760, 2079.998]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_10_7_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4699, -590, 2079.997]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_11_8_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5461, -760, 2078.996]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_10_8_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6170, -590, 2099.001]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_13_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3320, 735, 1879]}
      />
      <mesh
        geometry={nodes.SM_Prop_Door_07_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-2722, 274, -867]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_30_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-422, 281, 5552]}
        rotation={[0, -0.82, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_08_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2724, 460, -495]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Door_01_3_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3, 258, 2767]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_35_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-2190, 274, 5739]}
        rotation={[0.052, -0.761, 0.091]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_16_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2326, 1078, -456]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_04_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4050, -530, 3170]}
        rotation={[0, 1.571, 0]}
        scale={[1.224, 1, 1]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_51_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-3550, 274, 716]}
        rotation={[3.088, -0.797, -3.125]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_06_PolygonPirates_Material_02_A_0.geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[-961.6, 898.7, 2918.5]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Vines_Wall_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3016, 258, 1766]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_Stairs_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5050, -40, 4950]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_55_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1967, 274, 2178]}
        rotation={[2.832, -1.447, 2.889]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_50_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-236, 274, -151]}
        rotation={[0.258, -1.423, 0.31]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_49_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-541, 274, 41]}
        rotation={[0.047, 0.654, 0.026]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Stall_Cloth_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4539, 255, 1149]}
        rotation={[0, -0.767, 0]}
        scale={[0.712, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_17_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6370, 260, 1580]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[1.173, 1, 1]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_44_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-4150, 274, 1115]}
        rotation={[3.087, -0.817, -3.127]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_17_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1444, 1045, 2340]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_42_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-762, 274, 1630]}
        rotation={[0.054, -0.807, 0.094]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_40_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[1125, 274, 4072]}
        rotation={[2.915, 1.403, -2.863]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_36_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-2295, 274, 3043]}
        rotation={[3.026, 1.238, -2.978]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3930, 260, 2382]}
        rotation={[-Math.PI, -0.362, -Math.PI]}
        scale={0.96}
      />
      <mesh
        geometry={nodes.SM_Prop_Door_06_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1953, 274, -903]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Prop_Door_05_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-3966, 274, -4]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_18_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[1295, 1045, 2340]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_15_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2326, 1078, -592]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Sunshade_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3200, 254, 1952]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_31_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-811, 274, 4457]}
        rotation={[3.026, 1.238, -2.978]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_27_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6651, 260, 1025]}
        rotation={[-Math.PI, -0.463, -Math.PI]}
        scale={0.96}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_28_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6776, 266, 909]}
        rotation={[-Math.PI, 0.269, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_25_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3030, 230, -1660]}
        rotation={[0, -1.231, 0]}
        scale={0.818}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Cuba_Sunshade_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1759, 238, 3368]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Window_05_PolygonPirates_Material_02_A_0.geometry
        }
        material={materials.PolygonPirates_Material_02_A}
        position={[-2262.2, 761.5, 2748.9]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Stall_Cloth_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[177, 257, 3414]}
        scale={[1, 1.151, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Stall_Cloth_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3477, 274, 1520]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1.146, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_24_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[535, 240, 6275]}
        rotation={[0, -1.13, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_34_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1415, 274, 6274]}
        rotation={[0.203, 1.384, -0.145]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_33_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[348, 274, 5560]}
        rotation={[2.982, -1.332, 3.041]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_32_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[613, 274, 4760]}
        rotation={[3.102, 0.283, -3.076]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_03_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-5626.256, 277.137, 1126.236]}
        rotation={[-0.008, -0.642, -0.03]}
        scale={0.656}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4649.007, 276.449, 715.883]}
        rotation={[-1.739, -1.456, -1.787]}
        scale={0.677}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5675.21, 273.181, -1245.656]}
        rotation={[-0.001, 0.654, 0.002]}
        scale={0.714}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4833.568, 276.294, -960.505]}
        rotation={[3.141, -0.887, 3.141]}
        scale={0.696}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_03_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3500.575, 277.338, 1174.031]}
        rotation={[2.913, -0.806, 2.999]}
        scale={0.606}
      />
      <mesh
        geometry={nodes.SM_Env_Rocks_01_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-3821.716, 265.961, 1535.334]}
        rotation={[2.142, -1.17, 2.044]}
        scale={[0.956, 1.912, 0.956]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5066.985, 278.676, 560.15]}
        rotation={[0.11, 0.339, -0.063]}
        scale={[0.923, 1.847, 0.923]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5631.006, 277.543, 85.078]}
        rotation={[-2.687, -1.468, -2.691]}
        scale={[0.929, 1.857, 0.929]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5064.04, 270.484, -204.143]}
        rotation={[0.002, -0.165, 0.001]}
        scale={[0.908, 1.816, 0.908]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_4_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3979.522, 273.071, -1656.017]}
        rotation={[-0.001, -0.693, -0.001]}
        scale={[0.906, 1.811, 0.906]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_5_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3320.182, 268.241, -59.298]}
        rotation={[-0.008, -1.125, -0.018]}
        scale={[0.953, 1.905, 0.953]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_6_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2689.929, 268.639, 24.396]}
        rotation={[-0.004, 0.642, 0.004]}
        scale={[0.971, 1.942, 0.971]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_7_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2600.546, 268.583, 810.556]}
        rotation={[0.003, -0.609, 0.004]}
        scale={[0.951, 1.901, 0.951]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rocks_01_8_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1174.685, 270.844, 109.372]}
        rotation={[3.14, -0.976, 3.141]}
        scale={[0.937, 1.875, 0.937]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_29_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1084, 274, 5867]}
        rotation={[0, 0.204, 0]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_27_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-774, 274, 5421]}
        rotation={[0, -1.121, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_81_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1190, -310, -3260]}
        rotation={[0, -1.134, 0]}
        scale={[0.856, 0.82, 0.856]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_56_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[450, 740, -2690]}
        rotation={[0, 0.031, 0]}
        scale={[3.86, 5.897, 5.164]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_55_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-90, 290, -1210]}
        rotation={[0, -0.233, 0]}
        scale={[2.827, 3.229, 2.827]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_80_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-360, -1120, -2940]}
        rotation={[0, -0.112, 0]}
        scale={[1.343, 1.563, 1.343]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_79_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3246, -525, -4014]}
        rotation={[0, -0.086, 0]}
        scale={[0.556, 0.556, 0.495]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_78_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-480, -420, -1550]}
        rotation={[0, -0.112, 0]}
        scale={0.735}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_77_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2180, -860, -2930]}
        rotation={[0, 1.559, 0]}
        scale={[0.58, 0.7, 0.58]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_54_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[70, -450, -780]}
        rotation={[0, 0.474, 0]}
        scale={3.272}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_76_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[950, -1020, -2990]}
        rotation={[0, 1.179, 0]}
        scale={[1.343, 1.621, 1.343]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6513, -584, -2298]}
        rotation={[0, 1.167, 0]}
        scale={[2.661, 3.588, 2.661]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2720, -434, -5970]}
        rotation={[0, 0.44, 0]}
        scale={[1.366, 1.795, 1.366]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3000, -570, 389]}
        rotation={[-Math.PI, -1.049, -Math.PI]}
        scale={[1.642, 2.885, 1.642]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_63_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-1310, -860, -4840]}
        rotation={[-Math.PI, 0.454, -Math.PI]}
        scale={[0.704, 0.849, 0.704]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_57_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2320, -1416.2, 5320]}
        rotation={[0, 0.666, 0]}
        scale={[3.877, 7.398, 5.125]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_64_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-7952, -490, -1931]}
        rotation={[-Math.PI, -1.559, -Math.PI]}
        scale={[0.339, 0.41, 0.339]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-9889, -430, -2861]}
        rotation={[-Math.PI, 0.688, -Math.PI]}
        scale={[1.366, 1.795, 1.366]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_82_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-7588, -530, -1348]}
        rotation={[-Math.PI, 1.214, -Math.PI]}
        scale={[0.556, 0.556, 0.495]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_83_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5560, -420, -3490]}
        rotation={[-Math.PI, 0.724, -Math.PI]}
        scale={0.735}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_63_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5092, -361, -3225]}
        rotation={[-Math.PI, 1.437, -Math.PI]}
        scale={[2.827, 5.381, 2.827]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_64_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5010, -450, -2720]}
        rotation={[-Math.PI, 0.137, -Math.PI]}
        scale={3.272}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Debris_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-683.8, 278.3, 5187.9]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Flat_Sand_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2290, 240, 5990]}
        rotation={[-Math.PI, -1.188, -Math.PI]}
        scale={[2.986, 0.857, 2.136]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_02_PolygonPirates_Material_03_A_0.geometry}
        material={materials.PolygonPirates_Material_03_A}
        position={[-6789.654, 259.211, 244.302]}
        rotation={[2.881, 0.724, 2.829]}
        scale={0.576}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_1_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6668.059, 257.349, 67.743]}
        rotation={[0.244, -0.767, 0.498]}
        scale={0.703}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_2_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6775.469, 249.869, 2.71]}
        rotation={[-0.308, 0.612, 0.433]}
        scale={0.696}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_3_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6733.792, 249.739, -200.552]}
        rotation={[2.414, -0.639, 2.563]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_4_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6692.401, 246.579, -448.988]}
        rotation={[3.064, -1.013, 3.065]}
        scale={0.547}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_5_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6956.452, 137.556, -1420.65]}
        rotation={[-0.368, 0.501, 0.474]}
        scale={0.63}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_6_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6791.393, 142.98, -1729.996]}
        rotation={[2.485, -0.698, 2.808]}
        scale={0.647}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_7_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6570.286, 210.142, -1709.316]}
        rotation={[-0.54, 1.242, 0.394]}
        scale={0.718}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_8_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6754.828, 204.925, -1559.256]}
        rotation={[-2.733, 1.074, 2.479]}
        scale={0.526}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_9_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6610.681, 237.696, -1433.547]}
        rotation={[0.283, -1.412, 0.352]}
        scale={0.532}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_10_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6811.484, 207.767, -1306.807]}
        rotation={[2.765, -1.101, 2.694]}
        scale={0.69}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_11_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6615.103, 226.934, -1558.037]}
        rotation={[-0.2, 1.116, 0.143]}
        scale={0.558}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_12_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6237.828, 212.934, -1887.859]}
        rotation={[-0.424, 1.23, 0.252]}
        scale={0.685}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_13_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6207.521, 241.854, -1713.318]}
        rotation={[-0.09, 0.887, 0.058]}
        scale={0.636}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_14_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-5902.246, 200.581, -2176.038]}
        rotation={[3.113, 0.303, 3.074]}
        scale={0.563}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_15_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-5998.114, 259.844, 1554.121]}
        rotation={[-2.987, -0.817, 2.922]}
        scale={0.585}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_16_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6198.237, 261.126, 1430.164]}
        rotation={[2.905, -1.305, 2.554]}
        scale={0.611}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_17_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6423.344, 267.239, 1207.036]}
        rotation={[0.295, -0.036, 0.228]}
        scale={0.676}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_18_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6157.51, 273.579, 1226.201]}
        rotation={[0.698, -1.224, 0.452]}
        scale={0.586}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_19_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6149.162, 251.496, 1611.463]}
        rotation={[-2.64, 0.729, 2.941]}
        scale={0.528}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_20_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6018, 247, 1427]}
        rotation={[0.228, -0.598, 0.046]}
        scale={0.861}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_21_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-5831.282, 260.695, 1603.118]}
        rotation={[0.625, -0.444, 0.119]}
        scale={0.65}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_22_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-5756.029, 274.958, 1407.16]}
        rotation={[0.306, -0.431, 0.126]}
        scale={0.588}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_23_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-5921.045, 276.816, 1257.822]}
        rotation={[-0.467, 1.369, 0.739]}
        scale={0.645}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_24_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3578.387, -165.429, 5709.611]}
        rotation={[0.397, -0.504, 0.557]}
        scale={0.624}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_25_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3538, -127, 6027]}
        rotation={[0.016, -0.1, 0.67]}
        scale={0.706}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_26_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3575.045, -160.966, 5490.153]}
        rotation={[0.225, 0.01, 0.433]}
        scale={0.551}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_27_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3562.829, -147.674, 6094.905]}
        rotation={[-0.222, 0.763, 0.298]}
        scale={0.53}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_28_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3503.056, -94.868, 6212.962]}
        rotation={[0.397, -1.105, 0.497]}
        scale={0.745}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_29_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3652.143, -177.834, 6311.842]}
        rotation={[-1.093, 1.174, 1.096]}
        scale={0.621}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_30_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3955.213, -147.443, 6993.306]}
        rotation={[0.77, -1.409, 0.852]}
        scale={0.741}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_31_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3554.515, 85.262, 7319.238]}
        rotation={[0.346, -0.334, 0.819]}
        scale={0.639}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_32_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3361.972, 185.253, 7267.04]}
        rotation={[1.73, -1.023, 1.721]}
        scale={0.888}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_33_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3191.989, 258.974, 6644.556]}
        rotation={[1.508, -1.003, 1.321]}
        scale={0.703}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_34_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3190.774, 254.406, 6202.256]}
        rotation={[2.671, -0.899, 2.293]}
        scale={0.576}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_35_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2954.635, 278.046, 6485.412]}
        rotation={[0.134, -0.905, 0.29]}
        scale={0.587}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_04_PolygonPirates_Material_03_A_0.geometry}
        material={materials.PolygonPirates_Material_03_A}
        position={[-3182, 249, 6409]}
        rotation={[2.798, -1.338, 2.693]}
        scale={1.022}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_36_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1598.841, 259.494, 8042.846]}
        rotation={[-3.112, 1.077, 3.126]}
        scale={0.659}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_37_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1390.708, 262.527, 7911.484]}
        rotation={[0.011, -1.314, 0.006]}
        scale={0.593}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_38_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1050.36, 265.468, 7750.33]}
        rotation={[0.002, -0.733, 0.002]}
        scale={0.632}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_39_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1194.546, 263.256, 7956.448]}
        rotation={[0.006, -0.798, 0.003]}
        scale={0.684}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_40_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1406.164, 261.599, 8003.188]}
        rotation={[3.124, -1.484, 3.118]}
        scale={0.529}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_41_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1810.375, 260.671, 7930.699]}
        rotation={[0.008, -0.103, 0.006]}
        scale={0.831}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_42_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-268.916, 265.877, 7721.222]}
        rotation={[0.001, -0.141, -0.003]}
        scale={0.544}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_43_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-116.953, 266.34, 7510.304]}
        rotation={[0.007, 0.948, -0.005]}
        scale={0.642}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_44_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-272.204, 266.434, 7542.128]}
        rotation={[-3.14, -0.876, -3.141]}
        scale={0.579}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_45_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-4279.442, 272.979, -2494.624]}
        rotation={[-0.001, -1.03, 0]}
        scale={0.605}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_46_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-4182.75, 272.231, -2738.669]}
        rotation={[0.002, 1.067, -0.001]}
        scale={0.608}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_47_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-4357.07, 274.574, -2915.865]}
        rotation={[3.141, 0.836, 3.141]}
        scale={0.552}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_48_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-4206.11, 273.958, -2933.255]}
        rotation={[0.002, 1.435, -0.004]}
        scale={0.668}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_49_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3985.534, 272.333, -2575.442]}
        rotation={[-0.001, -0.232, -0.001]}
        scale={0.772}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_50_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2753.044, 240.737, -2590.693]}
        rotation={[-2.863, -1.45, -2.827]}
        scale={0.531}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_51_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3000.528, 253.05, -2727.017]}
        rotation={[3.093, 0.771, -3.107]}
        scale={0.709}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_52_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2768.522, 183.558, -2790.478]}
        rotation={[-0.129, -0.05, -0.108]}
        scale={0.827}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_53_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2917.388, 262.139, -2550.724]}
        rotation={[-0.014, 0.043, -0.017]}
        scale={0.739}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_54_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2575.321, 243.337, -2918.885]}
        rotation={[0.027, -0.945, 0.09]}
        scale={0.541}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_55_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2354.073, 250.728, -2709.647]}
        rotation={[0.203, 1.441, -0.206]}
        scale={0.703}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_56_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1091.6, 271.197, -1083.336]}
        rotation={[-0.01, 0.184, 0.004]}
        scale={0.537}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_57_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1312.14, 270.44, -1154.833]}
        rotation={[3.119, -1.147, 3.129]}
        scale={0.69}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_58_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1395.427, 263.36, -1345.89]}
        rotation={[3.113, -0.856, 3.129]}
        scale={0.596}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_59_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-909.593, 271.128, -953.696]}
        rotation={[-0.005, -0.278, 0.003]}
        scale={0.749}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_60_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[918.301, 265.467, -484.163]}
        rotation={[-3.068, -1.356, -3.052]}
        scale={0.658}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_61_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[643.957, 269.156, -488.699]}
        rotation={[0.002, 0.761, -0.004]}
        scale={0.668}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_62_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[849.501, 265.211, -670.146]}
        rotation={[-3.138, -0.608, -3.105]}
        scale={0.763}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_63_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1228.879, 264.314, -263.399]}
        rotation={[3.107, 1.102, -3.118]}
        scale={0.54}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_64_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2642.029, 2.112, 613.245]}
        rotation={[2.909, 0.683, -2.827]}
        scale={0.789}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_65_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2657.131, 18.95, 761.451]}
        rotation={[-0.147, -0.46, -0.265]}
        scale={0.662}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_66_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2335.607, 124.941, 568.268]}
        rotation={[-0.156, -0.504, -0.264]}
        scale={0.603}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_67_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2440.406, 110.512, 767.543]}
        rotation={[-0.063, -0.166, -0.226]}
        scale={0.628}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_68_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2514.938, 22.294, 370.919]}
        rotation={[2.792, 0.88, -2.738]}
        scale={0.722}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_69_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2592.45, 71.792, 2509.605]}
        rotation={[1.2, 1.298, -1.163]}
        scale={0.715}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_70_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2494.929, 105.544, 2910.733]}
        rotation={[-0.075, -0.454, -0.273]}
        scale={0.579}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_71_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2540.413, 89.842, 2718.742]}
        rotation={[0.213, 0.573, -0.296]}
        scale={0.71}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_72_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2322.558, 155.546, 2581.513]}
        rotation={[-0.196, -0.917, -0.3]}
        scale={0.539}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_73_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2864.869, -28.74, 3451.479]}
        rotation={[3.137, 0.402, -2.868]}
        scale={0.55}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_74_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2687.381, 41.572, 3717.22]}
        rotation={[-3.017, -0.728, -2.892]}
        scale={0.732}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_75_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2687.043, 33.46, 3498.155]}
        rotation={[0.207, 0.436, -0.248]}
        scale={0.798}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_76_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1834.676, 270.063, 4910.141]}
        rotation={[-3.141, -1.031, -3.141]}
        scale={0.533}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_77_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1889.082, 270.325, 4761.654]}
        rotation={[0, 0.725, -0.002]}
        scale={0.686}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_78_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1811.63, 270.576, 4616.19]}
        rotation={[3.141, -0.656, -3.139]}
        scale={0.784}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_79_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[2065.89, 266.93, 4534.055]}
        rotation={[-0.033, -0.368, -0.054]}
        scale={0.754}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_80_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1353.23, 262.537, 6406.654]}
        rotation={[-3.126, 0.099, -3.125]}
        scale={0.627}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_81_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1111.099, 258.296, 6720.434]}
        rotation={[0.007, 0.666, -0.009]}
        scale={0.666}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_82_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1022.863, 257.126, 6938.763]}
        rotation={[-3.138, -0.536, -3.135]}
        scale={0.569}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_83_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[860.577, 260.803, 6878.807]}
        rotation={[-0.005, -0.906, -0.009]}
        scale={0.639}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_84_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1078.869, 266.13, 6480.208]}
        rotation={[-3.097, -1.241, -3.112]}
        scale={0.789}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_85_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1090.45, 268.765, 6590.877]}
        rotation={[0.01, -1.542, 0.009]}
        scale={0.69}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_86_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1379.132, 268.513, 6583.215]}
        rotation={[3.141, -1.022, 3.141]}
        scale={0.64}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_87_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1256.635, 268.613, 6624.709]}
        rotation={[0, 0.485, 0]}
        scale={0.597}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_88_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1317.508, 268.331, 6812.527]}
        rotation={[0.001, -0.663, 0.001]}
        scale={0.813}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_89_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1583.257, 267.915, 6889.985]}
        rotation={[3.14, -1.194, 3.139]}
        scale={0.74}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_90_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1464.996, 267.543, 7087.651]}
        rotation={[0.002, -0.872, 0.001]}
        scale={0.82}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_91_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1277.051, 267.769, 7085.79]}
        rotation={[-0.002, 1.36, 0.003]}
        scale={0.736}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_92_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1074.678, 267.427, 7229.303]}
        rotation={[-3.14, 1.005, 3.141]}
        scale={0.794}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_93_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6235.989, 266.955, -722.469]}
        rotation={[-0.105, 1.484, 0.107]}
        scale={0.647}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_94_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6249.309, 264.764, -991.446]}
        rotation={[0.003, -0.323, 0.011]}
        scale={0.793}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_95_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-5940.118, 270.531, -791.281]}
        rotation={[0.002, -0.06, 0.003]}
        scale={0.636}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_96_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6066.768, 268.493, -715.997]}
        rotation={[3.141, -0.72, 3.137]}
        scale={0.727}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_97_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6029.154, 270.81, -950.414]}
        rotation={[0.004, -0.6, 0.003]}
        scale={0.681}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_98_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-5902.325, 281.324, 623.945]}
        rotation={[3.069, 1.292, 3.12]}
        scale={0.541}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_99_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6041.871, 277.74, 494.982]}
        rotation={[-0.051, 0.242, 0.026]}
        scale={0.8}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_100_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6125.471, 280.699, 738.136]}
        rotation={[-0.05, -0.816, 0]}
        scale={0.638}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_101_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-6272.813, 278.35, 453.99]}
        rotation={[0.139, -0.65, -0.118]}
        scale={0.731}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_102_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-4299.433, 276.619, -1449.988]}
        rotation={[0, -0.784, 0]}
        scale={0.677}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_103_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-4437.127, 276.732, -1289.939]}
        rotation={[-0.001, 1.072, 0]}
        scale={0.692}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_104_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-4584.528, 276.07, -1567.807]}
        rotation={[-0.002, 1.158, 0.001]}
        scale={0.81}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_105_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-4682.999, 276.336, -1386.415]}
        rotation={[0.002, -1.365, 0.002]}
        scale={0.763}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_106_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-4548.53, 275.059, -1881.538]}
        rotation={[-0.001, -0.426, 0]}
        scale={0.792}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_107_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-4747.864, 275.168, -1767.498]}
        rotation={[-0.001, -0.25, 0]}
        scale={0.641}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_108_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2913.856, 271.843, -1824.057]}
        rotation={[-0.001, 0.22, -0.002]}
        scale={0.595}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_109_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2936.088, 271.103, -2010.325]}
        rotation={[-0.005, -0.809, -0.003]}
        scale={0.691}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_110_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2954.801, 269.849, -2211.789]}
        rotation={[-0.003, -0.016, -0.004]}
        scale={0.57}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_111_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3121.461, 271.42, -2125.281]}
        rotation={[-3.133, -1.4, -3.131]}
        scale={0.687}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_112_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3214.374, 273.52, -1704.914]}
        rotation={[-0.003, -0.856, -0.002]}
        scale={0.719}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_113_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3494.492, 274.455, -1725.267]}
        rotation={[-0.003, -1.078, -0.002]}
        scale={0.605}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_114_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3387.882, 273.767, -1810.579]}
        rotation={[-0.001, -0.081, -0.001]}
        scale={0.825}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_115_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3295.348, 274.387, -1553.112]}
        rotation={[3.138, 1.176, -3.138]}
        scale={0.562}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_116_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2133.114, 273.242, 226.894]}
        rotation={[3.141, -0.222, 3.14]}
        scale={0.547}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_117_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1973.071, 273.509, 291.866]}
        rotation={[3.138, -1.219, 3.138]}
        scale={0.66}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_118_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2115.378, 273.436, 382.68]}
        rotation={[0, 0.036, 0.001]}
        scale={0.535}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_119_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2253.523, 273.174, 297.98]}
        rotation={[-3.139, 1.102, 3.138]}
        scale={0.555}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_120_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1810.383, 273.552, 156.541]}
        rotation={[-0.004, 1.265, 0.003]}
        scale={0.744}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_121_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2091.382, 273.089, 75.296]}
        rotation={[-3.14, 1.044, 3.139]}
        scale={0.705}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_122_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-784.335, 272.754, -194.193]}
        rotation={[-0.001, 0.448, 0]}
        scale={0.609}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_123_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-916.07, 273.363, -22.055]}
        rotation={[-0.002, -0.776, 0]}
        scale={0.697}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_124_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-604.953, 272.069, -353.808]}
        rotation={[0, 1.207, -0.002]}
        scale={0.735}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_125_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1129.451, 271.469, -914.36]}
        rotation={[3.134, -0.629, 3.139]}
        scale={0.555}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_126_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1208.006, 271.447, -1006.841]}
        rotation={[-0.006, -0.519, 0.004]}
        scale={0.762}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_127_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-787.871, 272.277, -359.978]}
        rotation={[3.141, -1.078, -3.141]}
        scale={0.57}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_128_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-912.791, 272.769, -227.785]}
        rotation={[-0.001, 0.795, 0]}
        scale={0.55}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_129_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1050.502, 274.21, 1457.894]}
        rotation={[0.001, -0.671, 0.001]}
        scale={0.683}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_130_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1185.796, 273.887, 1563.427]}
        rotation={[3.136, -1.451, 3.135]}
        scale={0.558}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_131_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-968.299, 274.062, 1674.814]}
        rotation={[0.001, -0.858, 0.001]}
        scale={0.783}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_132_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[550.755, 271.88, 1781.544]}
        rotation={[0.005, 1.047, -0.004]}
        scale={0.674}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_133_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[391.84, 272.051, 1842.843]}
        rotation={[0.001, -0.5, -0.002]}
        scale={0.814}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_134_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[531.63, 271.525, 1950.983]}
        rotation={[0.04, 1.52, -0.038]}
        scale={0.552}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_135_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1032.674, 268.071, 2622.762]}
        rotation={[0.002, -0.557, -0.004]}
        scale={0.597}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_136_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1044.47, 268.78, 2419.906]}
        rotation={[0.001, -0.521, -0.003]}
        scale={0.588}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_137_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2411.131, 267.032, 2620.688]}
        rotation={[-3.046, 1.038, 3.064]}
        scale={0.609}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_138_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2198.719, 271.438, 2425.444]}
        rotation={[-0.002, 0.439, 0.003]}
        scale={0.795}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_139_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2314.189, 270.942, 2489.405]}
        rotation={[-0.003, 0.442, 0.004]}
        scale={0.659}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_140_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2400.854, 270.109, 2419.314]}
        rotation={[-3.134, 1.118, 3.131]}
        scale={0.737}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_141_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3179.532, 277.448, 2494.744]}
        rotation={[-0.013, 1.055, -0.081]}
        scale={0.792}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_142_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3190.542, 278.446, 2662.065]}
        rotation={[0.554, 1.475, -0.607]}
        scale={0.814}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_143_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3331.898, 277.606, 2405.536]}
        rotation={[-0.117, 0.841, -0.043]}
        scale={0.581}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_144_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2893.814, 278.152, 2690.703]}
        rotation={[0.448, -1.45, 0.295]}
        scale={0.606}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_145_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-4106, 240, 1664]}
        rotation={[0.107, 0.472, 0.03]}
        scale={0.74}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_146_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-4262, 243, 1665]}
        rotation={[-2.948, -0.216, -2.932]}
        scale={0.622}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_147_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-924.321, 273.671, 4047.664]}
        rotation={[-0.002, 0.934, 0.002]}
        scale={0.603}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_148_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-537.648, 273.251, 3381.667]}
        rotation={[-0.002, -0.082, 0.001]}
        scale={0.635}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_149_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-748.891, 272.751, 3375.758]}
        rotation={[-0.003, 0.907, 0.001]}
        scale={0.592}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_150_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-648.017, 273.11, 3420.287]}
        rotation={[-0.001, -0.317, 0.001]}
        scale={0.56}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_151_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[126.31, 272.544, 3344.321]}
        rotation={[0.016, 1.525, -0.017]}
        scale={0.721}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_152_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-11.62, 272.888, 3384.317]}
        rotation={[-0.015, -1.515, -0.013]}
        scale={0.623}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_153_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-179.55, 274.293, 4185.932]}
        rotation={[-3.141, -1.252, -3.141]}
        scale={0.566}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_154_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[507.403, 273.137, 4097.76]}
        rotation={[0.002, 1.089, -0.002]}
        scale={0.736}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_155_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1067.895, 271.496, 4310.527]}
        rotation={[0.002, 1.039, -0.003]}
        scale={0.569}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_156_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1083.311, 271.566, 4146.671]}
        rotation={[-0.036, -1.503, -0.035]}
        scale={0.704}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_157_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[1076.82, 266.167, 3389.107]}
        rotation={[0.008, 0.993, -0.017]}
        scale={0.624}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_158_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[393.663, 271.938, 3354.39]}
        rotation={[3.14, 0.767, -3.141]}
        scale={0.798}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_159_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1498.623, 270.163, 3339.929]}
        rotation={[2.946, -1.559, 2.949]}
        scale={0.59}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_160_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1415.194, 269.562, 3176.908]}
        rotation={[3.134, -1.063, 3.136]}
        scale={0.647}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_161_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-1407.282, 269.601, 2945.621]}
        rotation={[-3.081, -1.453, -3.094]}
        scale={0.607}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_162_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2078.598, 267.428, 3403.448]}
        rotation={[-0.008, 0.474, 0.006]}
        scale={0.656}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_163_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2710.929, 277.511, 4407.697]}
        rotation={[-2.624, -1.419, -2.664]}
        scale={0.784}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_164_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2835.287, 279.705, 4431.284]}
        rotation={[-3.07, -0.591, -3.037]}
        scale={0.546}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_165_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-3192.155, 284.015, 4057.745]}
        rotation={[-2.894, 0.686, -3.118]}
        scale={0.558}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_166_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2283.988, 284.717, 5296.021]}
        rotation={[2.651, -1.438, 2.577]}
        scale={0.599}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_167_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2278.726, 282.455, 5475.976]}
        rotation={[2.933, -1.312, 2.828]}
        scale={0.656}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_168_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2372.162, 279.194, 5650.465]}
        rotation={[0.118, 0.538, 0.058]}
        scale={0.55}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_169_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2443.301, 282.756, 5469.306]}
        rotation={[1.98, -1.536, 1.867]}
        scale={0.568}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_170_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2251.258, 276.911, 6147.523]}
        rotation={[-0.322, 0.97, 0.446]}
        scale={0.605}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_171_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[-2272.1, 277.8, 5144]}
        rotation={[-3.118, 0.993, 3.102]}
        scale={0.583}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_01_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-3984.6, 247, 4730.9]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_38_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-2850, -510, 7280]}
        rotation={[0, 1.556, 0]}
        scale={[1.871, 2.432, 3.01]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_End_01_4_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4030, -530, 4790]}
        rotation={[0, -1.111, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Flat_Sand_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-2970, 240, 3470]}
        rotation={[0, 0.284, 0]}
        scale={[2.136, 0.857, 3.263]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Flat_Sand_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5810, 240, 280]}
        rotation={[-Math.PI, 1.54, -Math.PI]}
        scale={[2.682, 0.857, 2.136]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_26_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-2231, 274, 4726]}
        rotation={[3.026, 1.238, -2.978]}
        scale={[0.75, 0.653, 0.75]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3120, 250, 5940]}
        rotation={[0, 1.571, 0]}
        scale={1.185}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_25_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-3294, 249, 5279]}
        rotation={[0, -0.333, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_12_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4690, -590, 3900]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Flat_Sand_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5690, 240, 750]}
        rotation={[-Math.PI, -0.796, -Math.PI]}
        scale={[2.136, 0.857, 2.136]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Flat_Sand_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3100, 240, 1470]}
        rotation={[0, 0.687, 0]}
        scale={[2.136, 0.857, 3.399]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_04_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5030, 120, 4530]}
        rotation={[Math.PI / 2, 0, -1.996]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_15_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5040, -760, 5010]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_23_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3049, 230, 2672]}
        rotation={[-Math.PI, 1.17, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Flat_Sand_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3020, 240, 4370]}
        rotation={[-Math.PI, -1.184, -Math.PI]}
        scale={[2.136, 0.857, 2.136]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3210, 260, 6050]}
        rotation={[-Math.PI, -0.55, -Math.PI]}
        scale={0.96}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_End_01_5_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6920, -530, -330]}
        rotation={[0, 1.571, 0]}
        scale={[1.06, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_11_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3880, -530, 4960]}
        rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Flat_Sand_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4440, 240, 730]}
        rotation={[0, -1.461, 0]}
        scale={[2.136, 0.857, 3.661]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_16_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6740, -530, 1210]}
        rotation={[-Math.PI, 0.785, -Math.PI]}
        scale={[1.06, 1, 1]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_02_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-3210, -510, 6920]}
        rotation={[0, 1.206, 0]}
        scale={[1.768, 2.377, 1.768]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_18_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6920, -530, 30]}
        rotation={[0, 1.571, 0]}
        scale={[1.311, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_End_01_6_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6900, -530, 1020]}
        rotation={[0, -1.222, 0]}
        scale={[1.133, 1, 1.018]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_17_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6920, -530, 680]}
        rotation={[0, -1.571, 0]}
        scale={[1.352, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_15_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6360, -530, 1600]}
        rotation={[0, -0.785, 0]}
        scale={[1.151, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_14_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3350, -530, 6230]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_12_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-3530, -530, 5310]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_43_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-1090, -340, -3480]}
        rotation={[-Math.PI, 1.335, -Math.PI]}
        scale={[1.762, 1.63, 1.762]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_09_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4820, -530, 1790]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.078, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_08_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5370, -530, 1790]}
        scale={[1.151, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_06_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4050, -530, 2030]}
        rotation={[0, 1.571, 0]}
        scale={[1.06, 1, 1]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_40_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-4230, -380, -1330]}
        rotation={[0, 1.497, 0]}
        scale={[3.022, 5.326, 3.022]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_05_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4050, -530, 2580]}
        rotation={[0, -1.571, 0]}
        scale={[1.151, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_03_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4050, -530, 3790]}
        rotation={[0, -1.571, 0]}
        scale={[1.285, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_End_01_7_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4050, -530, 4120]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Stone_Wall_Large_01_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4050, -530, 4460]}
        rotation={[0, -1.571, 0]}
        scale={[1.263, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_FishRack_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6550, -60, 4560]}
        rotation={[0, 1.152, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_11_9_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5430, -430, 3910]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_Stairs_06_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5130, -40, 3910]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_Stairs_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6080, -40, 4650]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_11_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5080, -760, 3900]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_37_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-7764, -410, -1393]}
        rotation={[-Math.PI, 0.814, -Math.PI]}
        scale={[2.532, 2.693, 2.532]}
      />
      <mesh
        geometry={
          nodes
            .SM_Prop_Shanty_BuildingAttachment_03_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-5790, 120, 4080]}
        rotation={[-Math.PI / 2, 0, -2.106]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_Stairs_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4210, 110, 4640]}
        rotation={[0, 1.571, 0]}
        scale={[0.879, 1, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_FishRack_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4280, -60, 3310]}
        rotation={[0, 1.303, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_Stairs_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4210, 110, 4300]}
        rotation={[0, 1.571, 0]}
        scale={[0.955, 1, 1]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_41_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-110, -380, 4720]}
        rotation={[0, -0.385, 0]}
        scale={[3.823, 5.307, 3.823]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_20_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6140, -760, 4660]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Dock_11_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-4340, -760, 3900]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_42_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-700, -380, 710]}
        rotation={[0, 0.862, 0]}
        scale={[3.823, 5.307, 4.691]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_68_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-2333.173, -1422.852, 6567.959]}
        rotation={[-Math.PI, 1.108, -Math.PI]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_69_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-4534.669, -1422.852, 4339.099]}
        rotation={[-Math.PI, 0.215, -Math.PI]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_70_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-6199.14, -1422.852, 80.905]}
        rotation={[-Math.PI, 0.652, -Math.PI]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_71_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-7776.054, -1422.852, -1292.03]}
        rotation={[0, -0.714, 0]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_72_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-3492.512, -1422.852, -3968.454]}
        rotation={[0, 0.191, 0]}
        scale={[5.885, 9.056, 4.118]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_73_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-65.33, -1422.852, -4136.076]}
        rotation={[-Math.PI, 0.71, -Math.PI]}
        scale={[5.885, 9.077, 4.118]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_74_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[2461.56, -1422.852, -1087.126]}
        rotation={[0, -0.714, 0]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_75_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[4037.812, -1422.852, 3612.01]}
        rotation={[-Math.PI, -1.214, -Math.PI]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_76_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[1830.269, -1422.852, 7358.506]}
        rotation={[-Math.PI, -0.211, -Math.PI]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={
          nodes
            .SM_Veh_Boat_Rowing_01_Hull_Pirate_9_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2953.878, 50, 1445.742]}
        rotation={[-1.254, -1.146, 1.832]}
      />
      <mesh
        geometry={
          nodes
            .SM_Veh_Boat_Rowing_01_Hull_Pirate_8_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3179.666, 7, 1817.502]}
        rotation={[-0.378, -0.743, 2.868]}
      />
    </group>
  );
}
