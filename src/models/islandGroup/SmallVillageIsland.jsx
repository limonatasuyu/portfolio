import PropTypes from "prop-types";
import { useCompoundBody } from "@react-three/cannon";

export default function SmallVillageIsland({ nodes, materials }) {
  
  const shapes = [
    { rotation: [0, -0.3, 0], position: [-115, 0, 130], args: [10, 10, 50] },
    { rotation: [0, 0.1, 0], position: [-90, 0, 107], args: [40, 10, 10] },
    { rotation: [0, -0.5, 0], position: [-50, 0, 115], args: [40, 10, 10] },
    { rotation: [0, 0.2, 0], position: [-40, 0, 110], args: [30, 10, 10] },
    { rotation: [0, -0.8, 0], position: [-23, 0, 115], args: [20, 10, 10] },
    { rotation: [0, -0.3, 0], position: [-20, 0, 143], args: [10, 10, 30] },
    { rotation: [0, -0.3, 0], position: [-32, 0, 145], args: [15, 10, 60] },
    { rotation: [0, 0.4, 0], position: [-35, 0, 200], args: [70, 10, 12] },
    { rotation: [0, -0.1, 0], position: [-88, 0, 215], args: [46, 10, 12] },
    { rotation: [0, 0.4, 0], position: [-115, 0, 195], args: [10, 10, 30] },
    { rotation: [0, 0.4, 0], position: [-112, 0, 174], args: [10, 10, 25] },
    { rotation: [0, -0.1, 0], position: [-127, 0, 155], args: [15, 10, 15] },
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
      position={[24394.703, -1657.335, 8863.403]}
      rotation={[0, -Math.PI / 6, 0]}
    >
      <group ref={ref} />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_47_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25110, -240, 23820]}
        rotation={[0, -1.09, 0]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Prop_LobsterPot_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26060, -40, 20850]}
      />
      <mesh
        geometry={
          nodes
            .SM_Bld_Rickety_Dock_Stairs_Curved_01_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25320, -640, 22800]}
        rotation={[-Math.PI, 1.323, -Math.PI]}
      />
      <mesh
        geometry={
          nodes
            .SM_Bld_Rickety_Dock_Stairs_Curved_02_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25361.211, -361, 22547.393]}
        rotation={[0, -1.35, 0]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24800, -230, 19620]}
        rotation={[0, -0.78, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_21_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26750, -230, 22970]}
        rotation={[-Math.PI, 0.703, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_32_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24910, -240, 19230]}
        rotation={[-Math.PI, -0.797, -Math.PI]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Vines_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20390, 1930, 19170]}
        rotation={[-Math.PI, 0.799, -Math.PI]}
        scale={[1.822, 3.887, 1.822]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_Platform_10_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23280, -750, 22840]}
        rotation={[-Math.PI, 0.851, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_House_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23402.982, -37, 22965.178]}
        rotation={[-Math.PI, 0.851, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_Platform_03_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23581.449, -750, 23104.441]}
        rotation={[-Math.PI, 0.851, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_46_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25140, -240, 23650]}
        rotation={[-Math.PI, -0.284, -Math.PI]}
        scale={1.584}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_22_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-26340, -280, 22430]}
        rotation={[-Math.PI, 1.454, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_60_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-19020, -1310, 29140]}
        rotation={[0, -0.68, 0]}
        scale={[0.709, 0.856, 0.709]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_26_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-23150, -260, 21140]}
        rotation={[0, -0.61, 0]}
        scale={1.522}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Vines_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22240, 2060, 16630]}
        rotation={[0, -0.618, 0]}
        scale={[1.822, 2.86, 1.822]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_23_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-26400, -260, 22600]}
        rotation={[0, 1.298, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Vines_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26260, 1480, 23670]}
        rotation={[-Math.PI, 0.134, -Math.PI]}
        scale={[1.822, 2.86, 1.822]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_25_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-24070, -280, 19880]}
        rotation={[-Math.PI, 0.952, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Vines_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24400, 1480, 18090]}
        rotation={[0, -1.539, 0]}
        scale={[1.822, 2.86, 1.822]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Vines_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-19090, 1380, 21120]}
        rotation={[0, -1.461, 0]}
        scale={[1.822, 3.887, 1.822]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_50_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22300, 210, 26020.002]}
        rotation={[-Math.PI, 0.915, -Math.PI]}
        scale={[3.86, 5.897, 5.164]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_27_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-21260, -930, 29200]}
        rotation={[-Math.PI, 0.952, -Math.PI]}
        scale={4.632}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Fishing_Crate_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26490, -30, 21530]}
        rotation={[0, 0.395, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_59_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-17020, -1550, 21480]}
        rotation={[-Math.PI, 1.467, -Math.PI]}
        scale={[0.949, 1.145, 0.949]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_24_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-26420.002, -260, 21830]}
        rotation={[0, 0.535, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_21_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-25240, -260, 21780]}
        rotation={[0, 0.437, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Vines_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23590, 1430, 21280]}
        rotation={[-Math.PI, 1.511, -Math.PI]}
        scale={[1.822, 2.449, 1.822]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Vines_15_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26960, 2030, 23790]}
        rotation={[-Math.PI, 0.134, -Math.PI]}
        scale={[1.822, 2.86, 1.822]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Vines_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22560, 1350, 23000]}
        rotation={[-Math.PI, -1.29, -Math.PI]}
        scale={[1.822, 2.86, 1.822]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Vines_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24370, 1570, 23380]}
        rotation={[-Math.PI, -0.684, -Math.PI]}
        scale={[1.822, 2.86, 1.822]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Vines_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20470, 1770, 25590]}
        rotation={[-Math.PI, -1.29, -Math.PI]}
        scale={[1.822, 2.86, 1.822]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_42_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26779.998, -240, 23150]}
        rotation={[0, -0.157, 0]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_Platform_02_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25550, -640, 22550]}
        rotation={[-Math.PI, -0.319, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_House_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25550, 68, 22550]}
        rotation={[-Math.PI, -0.319, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26650, -240, 22890]}
        rotation={[-Math.PI, 1.531, -Math.PI]}
        scale={1.137}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_45_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24350, -240, 23620]}
        rotation={[0, 0.896, 0]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Vines_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23680, 1930, 23160]}
        rotation={[-Math.PI, 1.426, -Math.PI]}
        scale={[1.822, 3.887, 1.822]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Vines_05_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24290, 1350, 19430]}
        rotation={[-Math.PI, 1.36, -Math.PI]}
        scale={[2.092, 3.284, 2.092]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Vines_05_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23890, 1800, 19880]}
        rotation={[0, -0.595, 0]}
        scale={[1.822, 2.86, 1.822]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Vines_05_3_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23630, 1430, 21670]}
        rotation={[-Math.PI, 1.129, -Math.PI]}
        scale={[1.822, 3.887, 1.822]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_24_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24440, -230, 23630]}
        rotation={[0, -0.045, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_23_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25120, -230, 23720]}
        rotation={[0, -0.838, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_48_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24480, -240, 23500]}
        rotation={[-Math.PI, 0.478, -Math.PI]}
        scale={1.501}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_38_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27070.002, -240, 22890]}
        rotation={[-Math.PI, -1.131, -Math.PI]}
        scale={1.501}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_44_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24500, -240, 23910]}
        rotation={[0, 0.001, 0]}
        scale={1.137}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_43_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24760, -240, 23770]}
        rotation={[-Math.PI, -1.376, -Math.PI]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_16_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27390, -230, 19260]}
        rotation={[-Math.PI, -1.545, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_22_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24580, -230, 23810]}
        rotation={[0, 0.829, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_36_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25410, -240, 19260]}
        rotation={[0, -0.285, 0]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_34_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25030, -240, 18570]}
        rotation={[-Math.PI, 1.439, -Math.PI]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_41_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26950, -240, 22750]}
        rotation={[-Math.PI, 0.636, -Math.PI]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_40_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26900, -240, 23540]}
        rotation={[0, -1.248, 0]}
        scale={1.584}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_39_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26720.002, -240, 23500]}
        rotation={[0, 0.519, 0]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_20_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26820.002, -230, 23520]}
        rotation={[0, 0.771, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_19_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26940, -230, 22840]}
        rotation={[0, 1.565, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_22_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21540, -840, 22390]}
        rotation={[-Math.PI, -0.344, -Math.PI]}
        scale={0.84}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_18_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25080, -230, 18640]}
        rotation={[0, 0.761, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_17_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25490, -230, 19200]}
        rotation={[0, -0.032, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_37_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25210, -240, 18580]}
        rotation={[-Math.PI, -0.327, -Math.PI]}
        scale={1.501}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_35_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25560, -240, 19160]}
        rotation={[-Math.PI, -1.09, -Math.PI]}
        scale={1.584}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_33_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27520.002, -240, 19260]}
        rotation={[-Math.PI, -1.545, -Math.PI]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_15_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24820, -230, 19330]}
        rotation={[-Math.PI, -0.797, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_31_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25100, -240, 19650]}
        rotation={[0, 0.954, 0]}
        scale={1.033}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_30_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24830, -240, 19540]}
        rotation={[-Math.PI, -0.342, -Math.PI]}
        scale={1.554}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_29_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24780, -240, 19710]}
        rotation={[0, -1.032, 0]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_28_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25240, -240, 19530]}
        rotation={[-Math.PI, 0.42, -Math.PI]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25180, -230, 19670]}
        rotation={[0, 0.013, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_Platform_07_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26350, -750, 21720]}
        rotation={[-Math.PI, -1.552, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_Platform_01_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25130, -570, 22370]}
        rotation={[0, -1.168, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_Platform_08_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25490, -90, 22900]}
        rotation={[0, -1.31, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_House_02_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25490, 618, 22900]}
        rotation={[0, -1.31, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_Platform_04_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25970.002, -610, 23510]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_House_03_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25983.002, 103, 23335]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_Platform_03_1_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25970.002, -610, 23109.002]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26740, -230, 20020]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_Platform_11_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22100, -750, 21670]}
        rotation={[0, 0.441, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_House_03_2_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22186.434, -37, 21517.281]}
        rotation={[0, 0.441, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_Platform_03_2_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22271.115, -750, 21307.342]}
        rotation={[0, 0.441, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_Platform_05_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24350, -740, 21170]}
        rotation={[-Math.PI, -0.934, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_House_02_2_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24350, -32, 21170]}
        rotation={[-Math.PI, -0.934, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_Platform_06_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24660, -660, 21860]}
        rotation={[0, -1.179, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Tower_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24330, -260, 24290]}
        rotation={[0, 1.437, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_28_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23150, -890, 16220]}
        rotation={[-Math.PI, 0.828, -Math.PI]}
        scale={[0.856, 1.033, 0.856]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_15_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24410, -280, 18790]}
        rotation={[0, -0.081, 0]}
        scale={0.86}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23730, -130, 23780]}
        rotation={[0, -0.891, 0]}
        scale={0.86}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_34_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-23520, -760, 27460]}
        rotation={[0, -0.219, 0]}
        scale={[4.918, 2.376, 3.504]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_33_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-22110, -760, 16220]}
        rotation={[0, -0.219, 0]}
        scale={[4.918, 2.376, 3.504]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_32_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-24070, -760, 17910]}
        scale={[3.504, 2.376, 3.504]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26260, -230, 18820]}
        rotation={[-Math.PI, 0.784, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_31_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-23240, -760, 24310]}
        scale={[3.504, 2.376, 3.504]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_27_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-28010, -760, 23600]}
        scale={[3.504, 2.376, 3.504]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_27_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24130, -890, 16630]}
        rotation={[0, 1.085, 0]}
        scale={[0.58, 0.7, 0.58]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_26_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24760, -1060, 15660.001]}
        rotation={[0, -0.559, 0]}
        scale={[0.556, 0.556, 0.495]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23070, -90, 27160]}
        rotation={[-Math.PI, 1.188, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20520, 20, 25370]}
        rotation={[-Math.PI, -1.248, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-19260, 580, 22400]}
        rotation={[-Math.PI, 1.074, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20260, -150, 18870]}
        rotation={[0, -1.286, 0]}
        scale={1.375}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22050, 350, 16800]}
        rotation={[-Math.PI, 0.795, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_27_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21270, -360, 21000]}
        rotation={[-Math.PI, -0.108, -Math.PI]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_26_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21670, -360, 21210]}
        rotation={[0, 0.265, 0]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_25_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21710, -360, 21030]}
        rotation={[-Math.PI, 1.11, -Math.PI]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_24_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21470, -360, 21460]}
        rotation={[-Math.PI, -1.42, -Math.PI]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_23_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21400, -360, 21290]}
        rotation={[-Math.PI, 0.347, -Math.PI]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24130, -640, 17860]}
        rotation={[0, -1.514, 0]}
        scale={1.375}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26540, -350, 23740]}
        rotation={[0, -0.263, 0]}
        scale={1.111}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24010, -350, 23300]}
        rotation={[-Math.PI, 0.066, -Math.PI]}
        scale={1.111}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21260, -350, 21150]}
        rotation={[-Math.PI, -0.108, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-18840, -400, 21350]}
        rotation={[-Math.PI, -0.232, -Math.PI]}
        scale={1.147}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21430, -350, 21370]}
        rotation={[0, -1.47, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22550, -400, 23270]}
        rotation={[-Math.PI, 0.78, -Math.PI]}
        scale={1.147}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_25_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28040, -720, 17810]}
        rotation={[-Math.PI, -1.04, -Math.PI]}
        scale={[0.556, 0.556, 0.495]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_24_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28020.002, -550, 18670]}
        rotation={[0, -0.457, 0]}
        scale={[0.58, 0.7, 0.58]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_23_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21830, -1080, 26390]}
        rotation={[0, -1.52, 0]}
        scale={[1.007, 1.536, 1.007]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_22_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28679.998, -750, 24040]}
        rotation={[0, 1.254, 0]}
        scale={[0.764, 0.922, 0.764]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_21_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25620.002, -930, 26279.998]}
        rotation={[0, 0.077, 0]}
        scale={[1.007, 1.215, 1.007]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26190, -480, 25030]}
        rotation={[-Math.PI, -1.507, -Math.PI]}
        scale={1.912}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24800, -740, 25330]}
        rotation={[-Math.PI, -0.515, -Math.PI]}
        scale={4.197}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_20_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23840, -1170, 26229.998]}
        rotation={[-Math.PI, 1.399, -Math.PI]}
        scale={[1.259, 1.421, 1.259]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_19_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21700, -1050, 25540]}
        rotation={[-Math.PI, -0.732, -Math.PI]}
        scale={[1.592, 1.246, 1.592]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_Platform_09_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25490, -710, 22910]}
        rotation={[0, -1.382, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25800, -630, 22520]}
        rotation={[0, 0.312, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25600, -620, 22350]}
        rotation={[0, -1.289, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25360, -620, 22450]}
        rotation={[0, 0.373, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_Stairs_03_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25370, 20, 22110]}
        rotation={[0, -0.447, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26110, -620, 22750]}
        rotation={[0, -0.132, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_Stairs_02_PolygonPirates_Material_01_A_0
            .geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26070.002, 20, 22410]}
        rotation={[0, -0.134, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26020.002, -740, 22070]}
        rotation={[0, -0.072, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_25_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-25220, -410, 23060]}
        rotation={[0, -0.079, 0]}
        scale={[1.133, 0.811, 1.133]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25190, -740, 21810]}
        rotation={[0, -0.502, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26050, -740, 21690]}
        rotation={[0, 0.188, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24890, -740, 20770]}
        rotation={[-Math.PI, -0.043, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24930, -740, 21120]}
        rotation={[-Math.PI, 0.321, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25040, -760, 21460]}
        rotation={[0, -0.46, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26090, -740, 20980]}
        rotation={[-Math.PI, 0.142, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Dock_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26100, -760, 21340]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20540, -480, 21480]}
        rotation={[-Math.PI, -0.978, -Math.PI]}
        scale={3.272}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_18_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-19680, -450, 21900]}
        rotation={[-Math.PI, -0.392, -Math.PI]}
        scale={0.735}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28379.998, -240, 22440]}
        rotation={[-Math.PI, -1.168, -Math.PI]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20150, -130, 22150]}
        rotation={[0, -1.442, 0]}
        scale={[3.848, 5.263, 3.848]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-19950, 710, 23350]}
        rotation={[-Math.PI, -0.536, -Math.PI]}
        scale={[3.86, 5.897, 5.164]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_17_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-19130, -1150, 23180]}
        rotation={[-Math.PI, -0.392, -Math.PI]}
        scale={[1.343, 1.563, 1.343]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_16_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20240, -1050, 23860]}
        rotation={[0, -1.458, 0]}
        scale={[1.343, 1.621, 1.343]}
      />
      <mesh
        geometry={
          nodes.SM_Bld_Rickety_Tower_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24390, -260, 22250]}
        rotation={[-Math.PI, -0.581, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_22_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27040, -240, 18650]}
        rotation={[-Math.PI, -0.357, -Math.PI]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25670.002, -230, 18170]}
        rotation={[0, 0.188, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_21_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27150, -240, 18860]}
        rotation={[-Math.PI, -0.785, -Math.PI]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_20_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24110, -250, 21960]}
        rotation={[-Math.PI, -0.305, -Math.PI]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24300, -230, 19430]}
        rotation={[0, 0.524, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25050, -230, 18870]}
        rotation={[-Math.PI, 1.507, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_19_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23780, -250, 22350]}
        rotation={[0, -1.07, 0]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28270.002, -230, 22230]}
        rotation={[-Math.PI, 0.54, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_18_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25750, -240, 18140]}
        rotation={[-Math.PI, 0.678, -Math.PI]}
        scale={0.999}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24650, -230, 22820]}
        rotation={[-Math.PI, 0.762, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_17_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25580, -240, 18300]}
        rotation={[0, 0.696, 0]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27079.998, -230, 18810]}
        rotation={[0, 0.924, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_16_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26120.002, -240, 19940]}
        rotation={[0, -0.455, 0]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Roots_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26079.998, -230, 19860]}
        rotation={[0, 1.564, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26740, -240, 20150]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_15_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26029.998, -240, 19780]}
        rotation={[0, 1.312, 0]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26329.998, -240, 18780]}
        rotation={[-Math.PI, -0.157, -Math.PI]}
        scale={0.999}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24400, -240, 19330]}
        rotation={[-Math.PI, -0.157, -Math.PI]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24360, -240, 19530]}
        rotation={[0, -1.218, 0]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24920, -240, 18880]}
        rotation={[0, 0.806, 0]}
        scale={1.137}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-25200, -240, 18970]}
        rotation={[0, -0.96, 0]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23980, -240, 20100]}
        rotation={[-Math.PI, 1.206, -Math.PI]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24720, -240, 22720]}
        rotation={[-Math.PI, 0.599, -Math.PI]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28279.998, -240, 22050]}
        rotation={[0, 1.548, 0]}
        scale={1.035}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24570, -240, 22820]}
        rotation={[-Math.PI, -1.168, -Math.PI]}
        scale={1.21}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-27229.998, -230, 19090]}
        rotation={[-Math.PI, -0.906, -Math.PI]}
        scale={1.372}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_15_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21310, -1050, 18010]}
        rotation={[0, 0.705, 0]}
        scale={[1.343, 1.621, 1.343]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-22500, -1150, 17470]}
        rotation={[0, -0.586, 0]}
        scale={[1.343, 1.563, 1.343]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21900, 710, 18050]}
        rotation={[0, -0.442, 0]}
        scale={[3.86, 5.897, 5.164]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-24060, -350, 19570]}
        rotation={[-Math.PI, 1.262, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Large_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23570, -120, 21500]}
        rotation={[0, -1.241, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23060, 260, 19130]}
        rotation={[0, -0.706, 0]}
        scale={[2.827, 3.229, 2.827]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23250, -450, 18640]}
        rotation={[0, -0.586, 0]}
        scale={0.735}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-23120, -480, 19590]}
        scale={3.272}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_108_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-18867.414, -1422.852, 22501.67]}
        rotation={[0, -1.422, 0]}
        scale={[5.885, 8.736, 3.799]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Mangrove_Tree_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-28150, -240, 22310]}
        scale={1.567}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_26_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-23870, -950, 21730]}
        rotation={[0, -1.132, 0]}
        scale={[6.424, 5.185, 6.289]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_106_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26313.193, -1422.852, 26670.449]}
        rotation={[-Math.PI, 0.469, -Math.PI]}
        scale={[5.885, 8.736, 3.799]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_07_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-24410, -380, 19190]}
        rotation={[-Math.PI, 0.668, -Math.PI]}
        scale={1.133}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_107_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-20513.98, -1422.852, 26703.445]}
        rotation={[-Math.PI, -0.624, -Math.PI]}
        scale={[5.885, 8.736, 3.799]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_03_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-23960, -370, 22230]}
        rotation={[-Math.PI, -1.377, -Math.PI]}
        scale={[1.133, 0.811, 1.133]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_04_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-21910, -370, 22210]}
        rotation={[0, -0.635, 0]}
        scale={1.133}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_29_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-25829.998, -760, 19980]}
        rotation={[0, 0.977, 0]}
        scale={[5.275, 4.251, 4.513]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_109_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-21052.885, -1422.852, 16552.793]}
        rotation={[-Math.PI, 0.624, -Math.PI]}
        scale={[5.885, 8.736, 3.799]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_19_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[-27529.998, -240, 20080]}
        rotation={[0, -1.211, 0]}
        scale={[1.133, 0.317, 1.133]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_110_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-26261.838, -1422.852, 16244.035]}
        rotation={[0, 0.631, 0]}
        scale={[5.885, 8.736, 3.799]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Beach_111_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[-29661.865, -1422.852, 20455.453]}
        rotation={[0, 1.494, 0]}
        scale={[6.85, 8.736, 3.799]}
      />
    </group>
  );
}
