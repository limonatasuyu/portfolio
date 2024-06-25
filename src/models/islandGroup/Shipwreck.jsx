import PropTypes from 'prop-types';
import { useCompoundBody } from "@react-three/cannon";

export default function Shipwreck({ nodes, materials }) {
  
  const shapes = [
    { rotation: [0, -.5, 0], position: [360, 0, 160], args: [80, 10, 40] },
    { rotation: [0, .2, 0], position: [400, 0, 130], args: [20, 10, 80] },
    { rotation: [0, .2, 0], position: [417, 0, 112], args: [14, 10, 16] },
    { rotation: [0, .8, 0], position: [438, 0, 100], args: [14, 10, 35] },
    { rotation: [0, -.2, 0], position: [317, 0, 115], args: [14, 10, 37] },
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
      position={[35894.703, -1658, -9536.597]}
      rotation={[0, -0.349, 0]}
    >
      <group ref={ref} />
      <group
        position={[8298.929, 161.8, 23776.039]}
        rotation={[-Math.PI, -0.661, -Math.PI]}
      >
        <mesh
          geometry={
            nodes.SM_Prop_Chest_01_PolygonPirates_Material_01_A_0.geometry
          }
          material={materials.PolygonPirates_Material_01_A}
        />
        <mesh
          geometry={
            nodes.SM_Prop_Chest_Lid_01_PolygonPirates_Material_01_A_0.geometry
          }
          material={materials.PolygonPirates_Material_01_A}
          position={[-0.003, 46.811, -29.42]}
        />
        <mesh
          geometry={
            nodes.SM_Prop_Chest_Treasure_01_PolygonPirates_Material_01_A_0
              .geometry
          }
          material={materials.PolygonPirates_Material_01_A}
          position={[0.391, 41.192, 0.727]}
        />
      </group>
      <group
        position={[10348.903, 234, 21540.455]}
        rotation={[2.765, -0.649, 2.83]}
      >
        <mesh
          geometry={
            nodes.SM_Prop_Shipwreck_03_PolygonPirates_Material_01_A_0.geometry
          }
          material={materials.PolygonPirates_Material_01_A}
        />
        <mesh
          geometry={
            nodes.SM_Prop_Shipwreck_03_Sails_PolygonPirates_Material_01_A_0
              .geometry
          }
          material={materials.PolygonPirates_Material_01_A}
        />
      </group>
      <group
        position={[11399.555, -56, 22706.678]}
        rotation={[-2.518, -0.514, -2.748]}
      >
        <mesh
          geometry={
            nodes.SM_Prop_Shipwreck_02_PolygonPirates_Material_01_A_0.geometry
          }
          material={materials.PolygonPirates_Material_01_A}
        />
        <mesh
          geometry={
            nodes.SM_Prop_Shipwreck_02_Sails_PolygonPirates_Material_01_A_0
              .geometry
          }
          material={materials.PolygonPirates_Material_01_A}
        />
      </group>
      <mesh
        geometry={
          nodes.SM_Prop_Debris_05_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8090.794, 2.5, 22342.063]}
        rotation={[-0.097, 0.193, -0.013]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Debris_04_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9331.696, -162.7, 21369.814]}
        rotation={[2.645, -0.473, 2.961]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Debris_03_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9103.641, -26, 21876.092]}
        rotation={[-0.072, -0.064, -0.186]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Debris_02_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9467.016, -51, 21707.818]}
        rotation={[-0.205, 0.501, 0.257]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Debris_01_2_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9811.464, -12.8, 21582.605]}
        rotation={[-0.221, 0.23, 0.075]}
      />
      <mesh
        geometry={
          nodes.SM_Prop_Campfire_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[7847.854, 3, 22373.023]}
        rotation={[0, 0.349, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_Tall_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11061, -60, 18691]}
        rotation={[0, -0.375, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_Tall_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2924, -56, 19995]}
        rotation={[-Math.PI, 0.483, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8407, 150, 23481]}
        rotation={[0, -1.304, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8097, 150, 23848]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Vines_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11024, -389, 20203]}
        rotation={[-Math.PI, -0.349, 0]}
        scale={[0.829, 0.585, 0.829]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Vines_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11367, -389, 19713]}
        rotation={[0, -0.46, -Math.PI]}
        scale={[0.829, 0.585, 0.829]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Vines_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10518, -389, 20181]}
        rotation={[0, -0.062, -Math.PI]}
        scale={[0.829, 0.503, 0.829]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Tree_Vines_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10225, -389, 20358]}
        rotation={[-Math.PI, -0.56, 0]}
        scale={[0.829, 0.503, 0.829]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_Tall_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9797, -171, 24329]}
        rotation={[0, 0.009, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_Tall_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8093, 4, 23898]}
        rotation={[-Math.PI, -1.247, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_Tall_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8653, -45, 23791]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_11_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[4621, -482, 21937]}
        rotation={[-Math.PI, -0.452, -Math.PI]}
        scale={1.85}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_16_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[8439, 164, 23952]}
        rotation={[0, -1.02, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_48_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8419, 143, 23910]}
        rotation={[-Math.PI, -1.066, -Math.PI]}
        scale={1.1}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_15_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[8159.9, 164, 23514]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_50_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8306, 123, 23602]}
        rotation={[0, -0.228, 0]}
        scale={1.1}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_49_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8169, 124, 23525]}
        rotation={[0, 1.536, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_13_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[1839, -540, 22016]}
        rotation={[0, 0.873, 0]}
        scale={2.396}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_14_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[5080, -690, 26690]}
        rotation={[0, 0.185, 0]}
        scale={[0.556, 0.556, 0.495]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_36_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11259, -486, 26079.998]}
        rotation={[-Math.PI, 0.443, -Math.PI]}
        scale={1.808}
      />
      <mesh
        geometry={
          nodes.SM_Env_GroundLeaves_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8453, 16, 22682]}
      />
      <mesh
        geometry={nodes.SM_Env_Bush_02_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[7423.4, -8.6, 23138.699]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_14_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[11566, -599, 26985]}
        rotation={[0, 0.873, 0]}
        scale={2.396}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_12_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[6990, -540, 20320]}
        rotation={[0, -0.188, 0]}
        scale={2.754}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_10_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[5035, -379, 23988]}
        rotation={[0, -1.298, 0]}
        scale={1.555}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_35_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3551, -390, 20308]}
        rotation={[-Math.PI, 0.069, -Math.PI]}
        scale={1.464}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_09_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[3538, -329, 22885]}
        rotation={[-Math.PI, -1.295, -Math.PI]}
        scale={1.555}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_08_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[3480, -114, 22201]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_13_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[3579, -467, 19779]}
        rotation={[-Math.PI, 0.718, -Math.PI]}
        scale={[0.422, 0.422, 0.376]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[2796, -657, 22364]}
        rotation={[0, -1.196, 0]}
        scale={[0.422, 0.422, 0.376]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_24_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[8296, 11, 23744]}
        scale={[0.729, 1.235, 0.729]}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_14_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[7845, 6, 24421]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_34_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[6200, 224, 22352]}
        rotation={[0, 1.367, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_33_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[6372, -346, 22093]}
        rotation={[-Math.PI, 0.336, -Math.PI]}
        scale={[1.008, 1.207, 1.225]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[6243, -270, 23443]}
        rotation={[-Math.PI, 1.264, -Math.PI]}
        scale={[0.46, 0.46, 0.409]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[6736, -233, 22839]}
        scale={[0.422, 0.422, 0.376]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_23_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[5443, -441, 23115]}
        scale={[1.252, 1.603, 1.252]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_32_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9376, -412, 20866]}
        rotation={[0, -0.997, 0]}
        scale={[0.44, 0.286, 0.76]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_31_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10008, -412, 20771]}
        rotation={[-Math.PI, 1.384, -Math.PI]}
        scale={[0.44, 0.382, 0.76]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_30_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10464, -412, 20561]}
        rotation={[0, -1.072, 0]}
        scale={[0.44, 0.279, 0.76]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_29_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10377, -412, 19228]}
        rotation={[0, 0.246, 0]}
        scale={[0.548, 0.561, 0.548]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Seaweed_12_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11150, -396, 20407]}
        rotation={[-Math.PI, -0.597, -Math.PI]}
        scale={[1, 0.563, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Seaweed_11_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11511, -396, 19633]}
        rotation={[-Math.PI, -0.597, -Math.PI]}
        scale={[1, 0.563, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Seaweed_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10474, -396, 20344]}
        rotation={[0, -1.39, 0]}
        scale={[0.854, 0.481, 0.854]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Seaweed_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10563, -396, 20378]}
        rotation={[0, -0.129, 0]}
        scale={[0.797, 0.448, 0.797]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Seaweed_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11400, -396, 19690]}
        rotation={[0, -0.129, 0]}
        scale={[0.846, 0.476, 0.846]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Seaweed_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11020, -396, 20217]}
        rotation={[0, 0.558, 0]}
        scale={[1, 0.563, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Seaweed_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10238, -396, 20480]}
        rotation={[0, 1.107, 0]}
        scale={[1, 0.563, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Seaweed_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10204, -396, 20409]}
        rotation={[-Math.PI, 1.397, -Math.PI]}
        scale={[0.776, 0.437, 0.776]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Seaweed_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10171, -396, 20504]}
        rotation={[-Math.PI, 0.656, -Math.PI]}
        scale={[0.836, 0.47, 0.836]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Seaweed_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10954, -396, 20301]}
        rotation={[0, -1.392, 0]}
        scale={[0.742, 0.417, 0.742]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Seaweed_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10501, -396.1, 20427]}
        scale={[1, 0.563, 1]}
      />
      <mesh
        geometry={
          nodes.SM_Env_GroundLeaves_10_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8905, 16, 24536]}
        rotation={[0, -0.871, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_47_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[7921, 7, 24296]}
        rotation={[0, 1.523, 0]}
        scale={1.1}
      />
      <mesh
        geometry={
          nodes.SM_Env_GroundLeaves_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[7299, 16, 24126]}
        rotation={[0, -1.346, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_GroundLeaves_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9668, 16, 23701]}
        rotation={[0, 0.85, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_GroundLeaves_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[7553, 16, 22705]}
        rotation={[-Math.PI, 1.492, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_GroundLeaves_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8684, 10, 24553]}
      />
      <mesh
        geometry={
          nodes.SM_Env_GroundLeaves_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9230, 10, 23397]}
      />
      <mesh
        geometry={
          nodes.SM_Env_GroundLeaves_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[7372, 10, 24153]}
      />
      <mesh
        geometry={
          nodes.SM_Env_GroundLeaves_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[7526, 10, 23289]}
      />
      <mesh
        geometry={
          nodes.SM_Env_GroundLeaves_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8198, 10, 22604]}
      />
      <mesh
        geometry={nodes.SM_Env_Bush_04_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[8535, -9, 22756]}
        rotation={[0, -0.574, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Bush_03_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[8977, -4, 23426]}
        rotation={[0, -0.648, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Bush_01_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[7185, -4, 24137]}
      />
      <mesh
        geometry={nodes.SM_Env_Fern_03_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[8565, 0.4, 22877]}
        rotation={[0, -0.057, 0]}
        scale={1.533}
      />
      <mesh
        geometry={nodes.SM_Env_Fern_02_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[7284, -11, 22341]}
        rotation={[0, -0.057, 0]}
        scale={1.533}
      />
      <mesh
        geometry={nodes.SM_Env_Fern_01_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[7287, -4, 22869]}
        rotation={[0, -0.868, 0]}
        scale={1.533}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_13_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[10607, -33, 17828]}
        rotation={[0, -0.786, 0]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_12_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[11041, -45.4, 18795]}
        rotation={[-Math.PI, 0.993, -Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_11_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[10173, 4, 21789]}
        rotation={[0, 1.176, 0]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_08_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[7749, 4, 22846]}
        rotation={[-Math.PI, 0.323, -Math.PI]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_07_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[7299, 4, 23365]}
        rotation={[0, -1.122, 0]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_06_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[9136, 4, 23202]}
        rotation={[0, -1.122, 0]}
        scale={0.75}
      />
      <mesh
        geometry={nodes.SM_Env_Grass_05_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[8890, 4, 24893]}
        rotation={[0, -1.122, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_220_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[7116, 4, 24331]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_04_1_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[7496, 9, 23031]}
        rotation={[0, -0.934, 0]}
        scale={0.75}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9516, 5, 23823]}
        rotation={[0, -1.086, 0]}
        scale={1.16}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9853.7, 5, 24676]}
        rotation={[-Math.PI, -0.531, -Math.PI]}
        scale={1.16}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8844, 5, 24694]}
        rotation={[-Math.PI, -0.277, -Math.PI]}
        scale={1.16}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[6910, 5, 24284]}
        rotation={[-Math.PI, -0.277, -Math.PI]}
        scale={1.16}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8941, 5.2, 23221]}
        rotation={[-Math.PI, -0.965, -Math.PI]}
        scale={1.16}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8822, 6, 22324]}
        rotation={[-Math.PI, -0.965, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8415, 6, 22624]}
        rotation={[-Math.PI, -1.286, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Plants_01_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[7397.8, 5.8, 22824.801]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmBush_05_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8930, -6, 24684]}
        rotation={[-Math.PI, -0.719, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmBush_04_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8838, -6, 22383]}
        rotation={[-Math.PI, -1.514, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmBush_03_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[7436, -6, 22816]}
        rotation={[0, 0.559, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Arch_02_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[7619, -544, 25769]}
        rotation={[0, 1.254, 0]}
        scale={[1.32, 1.368, 1.32]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_07_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[12390, -149, 21507]}
        rotation={[0, -1.049, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_06_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[11301, -68, 18830]}
        rotation={[0, -0.934, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_05_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[7569, -49, 22269]}
        rotation={[-Math.PI, -1.407, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_01_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[8577, -38, 22647]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_36_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[6949, 8, 24370]}
        rotation={[-Math.PI, 0.553, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_04_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[9158, -76, 22331]}
        rotation={[-Math.PI, 1.284, -Math.PI]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_03_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[9651, -76, 23267]}
        rotation={[0, 0.75, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Rock_02_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[10541.8, -75.8, 21500.4]}
        rotation={[-Math.PI, 0.217, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_28_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[6053, -278, 24065]}
        rotation={[0, 0.219, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_09_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[7501, -657, 21677]}
        rotation={[-Math.PI, -1.109, -Math.PI]}
        scale={[0.422, 0.422, 0.376]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_46_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10606, -106, 18792]}
        rotation={[-Math.PI, -1.207, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_27_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11209, -148, 18026]}
        rotation={[-Math.PI, -0.168, -Math.PI]}
        scale={0.756}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_26_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9965, -560, 16042.999]}
        rotation={[-Math.PI, 0.632, -Math.PI]}
        scale={1.23}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_25_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10188, -390, 18549]}
        rotation={[0, 1.291, 0]}
        scale={1.329}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_24_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10136, -560, 19008]}
        rotation={[0, -0.806, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_45_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10612, -51, 17739]}
        rotation={[-Math.PI, 1.242, -Math.PI]}
        scale={0.968}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_44_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11500, -65, 18538]}
        rotation={[-Math.PI, 1.242, -Math.PI]}
        scale={0.968}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_43_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11681, -62, 18672]}
        rotation={[0, -0.968, 0]}
        scale={0.835}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_42_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9891, 10, 24769]}
        rotation={[0, -1.375, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_41_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9036, 8, 22430]}
        rotation={[-Math.PI, -0.446, -Math.PI]}
        scale={0.892}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_40_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[7193, 8, 23286]}
        rotation={[-Math.PI, -0.035, -Math.PI]}
        scale={0.892}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_39_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[7474, 7, 22918]}
        rotation={[0, 0.526, 0]}
        scale={0.968}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_38_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[7386, 7, 23323]}
        rotation={[-Math.PI, -0.093, -Math.PI]}
        scale={1.1}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_37_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8932, 7, 24917]}
        rotation={[0, -0.81, 0]}
        scale={1.1}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_35_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9031, 8, 23285]}
        rotation={[0, 0.953, 0]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_34_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[8890, 7, 23286]}
        rotation={[0, -0.81, 0]}
        scale={1.1}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_08_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[7904, -86, 25121]}
        rotation={[-Math.PI, -0.609, -Math.PI]}
        scale={0.423}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_07_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10080, -270, 22518]}
        scale={[0.422, 0.422, 0.376]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_21_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[5140, -530, 22480]}
        rotation={[-Math.PI, 0.813, -Math.PI]}
        scale={[2.902, 2.148, 2.902]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_20_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[11280, -490, 23350]}
        rotation={[0, 0.446, 0]}
        scale={[2.338, 1.377, 2.338]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_18_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10780, -600, 22080]}
        rotation={[0, 0.708, 0]}
        scale={1.739}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_18_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[8076, -538, 23771]}
        rotation={[-Math.PI, 0.312, -Math.PI]}
        scale={[2.716, 4.495, 2.259]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_33_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[5715, -60, 21787]}
        rotation={[-Math.PI, 0.54, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_32_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[5692, -80, 21903]}
        rotation={[-Math.PI, 0.79, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_PalmTree_31_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12910.001, -80, 21390]}
        rotation={[0, -0.194, 0]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_12_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[12020, -500, 16810]}
        rotation={[0, 0.378, 0]}
        scale={[2.902, 1.866, 2.902]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Huge_06_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[11270, -430, 21650]}
        rotation={[-Math.PI, -1.484, -Math.PI]}
        scale={[0.277, 0.407, 0.277]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_23_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10450, -600, 23170]}
        rotation={[0, -1.176, 0]}
        scale={1.739}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_22_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[9700, -90, 22360]}
        rotation={[-Math.PI, -1.281, -Math.PI]}
        scale={0.756}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_21_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[7381, -90, 24952]}
        rotation={[0, -0.528, 0]}
        scale={0.756}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_20_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10870, -560, 20530]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_19_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10840, -390, 20920]}
        rotation={[0, 1.072, 0]}
        scale={1.329}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_17_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[13420, -440, 21490]}
        rotation={[-Math.PI, -1.505, -Math.PI]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_16_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[12610, -610, 20360]}
      />
      <mesh
        geometry={
          nodes.SM_Env_Rock_Large_15_PolygonPirates_Material_01_A_0.geometry
        }
        material={materials.PolygonPirates_Material_01_A}
        position={[10660, -320, 24650]}
        scale={1.45}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_221_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9340.818, -55.673, 21958.939]}
        rotation={[-0.226, -0.199, -0.346]}
        scale={0.636}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_222_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9557.071, -21.831, 21911.402]}
        rotation={[1.535, -1.176, 1.402]}
        scale={0.692}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_223_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9808.256, 6.383, 21865.998]}
        rotation={[2.013, -1.383, 2.011]}
        scale={0.619}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_224_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9691.98, -1.35, 21846.754]}
        rotation={[0.672, -1.272, 0.682]}
        scale={0.591}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_225_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[10540.873, -77.899, 18754.896]}
        rotation={[-0.064, 0.507, 0.576]}
        scale={0.566}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_226_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11028.648, -34.636, 18582.078]}
        rotation={[-0.017, -1.064, -0.028]}
        scale={0.7}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_227_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[10746.643, -32.958, 18316.963]}
        rotation={[-0.003, 0.188, 0.028]}
        scale={0.592}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_228_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[10684.923, -33.881, 18202.184]}
        rotation={[-0.014, 0.359, 0.031]}
        scale={0.646}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_229_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[10857.707, -45.513, 17672.563]}
        rotation={[0.219, 1.406, -0.29]}
        scale={0.786}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_230_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[7292.04, 9.049, 22635.432]}
        rotation={[-0.036, 1.344, 0.027]}
        scale={0.837}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_231_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[7203.421, 3.787, 22471.83]}
        rotation={[3.112, 0.646, 3.133]}
        scale={0.596}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_232_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[7066.355, -1.612, 22324.508]}
        rotation={[-0.077, 0.845, 0.043]}
        scale={0.74}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_233_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[8110.413, 12.525, 22728.986]}
        rotation={[3.14, -0.651, 3.141]}
        scale={0.709}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_234_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[8023.802, 11.845, 22632.393]}
        rotation={[3.136, -1.066, 3.14]}
        scale={0.549}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_235_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[8079, 11, 22541]}
        rotation={[-0.01, 0.372, 0.002]}
        scale={0.6}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_236_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9127.851, 6.032, 22638.941]}
        rotation={[3.139, 1.394, 3.14]}
        scale={0.57}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_237_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9263.851, 1.841, 22820.299]}
        rotation={[-0.107, 0.611, 0.119]}
        scale={0.554}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_238_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9293.699, 2.016, 22680.223]}
        rotation={[-0.055, 0.211, 0.103]}
        scale={0.573}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_239_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9010.973, 10.302, 22845.338]}
        rotation={[-0.022, -1.407, -0.019]}
        scale={0.634}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_240_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9158.971, 4.332, 22513.119]}
        rotation={[0.14, 0.036, -0.126]}
        scale={0.674}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_241_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9503.389, 14.823, 23222.988]}
        rotation={[0.016, -0.88, 0.066]}
        scale={0.528}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_242_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11359.964, -2.862, 25541.732]}
        rotation={[0.102, -0.534, 0.018]}
        scale={0.629}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_243_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[11206.643, 1.303, 25409.197]}
        rotation={[0.082, -0.425, 0.012]}
        scale={0.832}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_244_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9869.132, 12.509, 24323.309]}
        rotation={[3.038, 1.266, -3.023]}
        scale={0.57}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_245_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9747.076, 14.195, 24255.543]}
        rotation={[3.118, 1.077, -3.104]}
        scale={0.682}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_246_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9695.021, 12.943, 24460.711]}
        rotation={[0.013, 0.604, 0.012]}
        scale={0.55}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_247_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[9311.885, 13.588, 24249.529]}
        rotation={[0.002, 1.21, -0.001]}
        scale={0.833}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_248_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[7558.804, 14.702, 24342.197]}
        rotation={[-3.138, 0.945, 3.138]}
        scale={0.796}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_249_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[7353.95, 14.145, 24345.533]}
        rotation={[0.004, -0.503, 0.004]}
        scale={0.552}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_250_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[6715.508, 12.75, 23658.275]}
        rotation={[3.141, -1.304, 3.141]}
        scale={0.725}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_251_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[6872.495, 12.456, 23475.57]}
        rotation={[-0.086, -1.561, -0.086]}
        scale={0.664}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_252_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[7888.672, 161.737, 23604.668]}
        rotation={[-3.115, 1.387, 3.113]}
        scale={0.716}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_253_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[7667.785, 76.416, 23515.365]}
        rotation={[-0.627, 1.182, 0.593]}
        scale={0.69}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_254_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[7685.488, 50.506, 23315.914]}
        rotation={[0.017, -0.492, 0.082]}
        scale={0.567}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_255_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[7479.209, 21.447, 23452.809]}
        rotation={[2.489, -1.483, 2.511]}
        scale={0.57}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_256_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[7556.756, 28.122, 23368.838]}
        rotation={[-3.09, 0.93, 3.049]}
        scale={0.606}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_257_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[7875.428, 144.328, 23386.176]}
        rotation={[-3.13, 0.978, 2.998]}
        scale={0.662}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_258_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[7812.063, 61.938, 23198.385]}
        rotation={[-0.036, -0.489, 0.132]}
        scale={0.766}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_259_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[7785.276, 25.449, 23072.809]}
        rotation={[-0.082, 0.052, 0.089]}
        scale={0.685}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_260_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[8374.527, 25.641, 22963.092]}
        rotation={[0.029, 1.229, -0.049]}
        scale={0.616}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_261_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[8680.875, 48.359, 23132.893]}
        rotation={[2.972, 0.353, -3.032]}
        scale={0.545}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_262_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[8854.974, 18.425, 23096.438]}
        rotation={[0.076, 1.409, -0.094]}
        scale={0.558}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_263_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[8825.45, 41.692, 23283.898]}
        rotation={[0.066, 0.572, -0.208]}
        scale={0.821}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_264_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[8301.773, 160.913, 23313.285]}
        rotation={[-0.011, -0.191, -0.005]}
        scale={0.61}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_265_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[8571.343, 162.443, 23714.363]}
        rotation={[-0.001, -1.311, -0.001]}
        scale={0.837}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_266_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[7619.279, -110.873, 22010.059]}
        rotation={[-0.202, 1.102, 0.078]}
        scale={0.671}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_267_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[7878.696, -129.116, 21976.273]}
        rotation={[-0.156, 0.154, 0.022]}
        scale={0.648}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_268_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[7875.244, -36.919, 22169.352]}
        rotation={[-0.113, -0.794, -0.007]}
        scale={0.612}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_269_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[7990, -81, 22064]}
        rotation={[-0.151, 0.096, 0.324]}
        scale={0.718}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_270_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[7346, 3, 22561]}
        rotation={[-0.022, 0.917, 0.006]}
        scale={0.571}
      />
      <mesh
        geometry={
          nodes.SM_Env_Grass_02_271_PolygonPirates_Material_03_A_0.geometry
        }
        material={materials.PolygonPirates_Material_03_A}
        position={[7730.981, -59.804, 22108.096]}
        rotation={[3.041, -0.32, 3.118]}
        scale={0.658}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_77_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[4870, -1420, 21870]}
        rotation={[-Math.PI, 0.637, -Math.PI]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_78_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[8047.462, -1422.852, 25274.586]}
        rotation={[-Math.PI, 0.296, -Math.PI]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_79_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[11550.554, -1422.852, 23477.664]}
        rotation={[-Math.PI, 0.296, -Math.PI]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_80_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[10873.519, -1422.852, 20582.898]}
        rotation={[-Math.PI, 0.296, -Math.PI]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_81_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[12920.621, -1422.852, 16663.166]}
        rotation={[0, 0.634, 0]}
        scale={[5.885, 8.736, 4.118]}
      />
      <mesh
        geometry={nodes.SM_Env_Beach_82_PolygonPirates_Material_01_A_0.geometry}
        material={materials.PolygonPirates_Material_01_A}
        position={[8489.256, -1422.852, 18526.332]}
        rotation={[-Math.PI, -0.529, -Math.PI]}
        scale={[5.885, 8.736, 4.118]}
      />
    </group>
  );
}

Shipwreck.propTypes = {
  nodes: PropTypes.any.isRequired,
  materials: PropTypes.any.isRequired
}
