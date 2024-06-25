import { useCompoundBody } from "@react-three/cannon";

export default function SmallIslands({ nodes, materials }) {
  
  const shapes = [
    { rotation: [0, 0, 0], position: [49, 0, 265], args: [23, 10, 23] },    
    { rotation: [0, 0, 0], position: [274, 0, 240], args: [23, 10, 23] },    
    { rotation: [0, 0, 0], position: [29, 0, -295], args: [23, 10, 23] },    
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
    <group position={[22494.703, -13357.335, -9436.597]}>
      
      <group ref={ref} />
      <group
        position={[4958.314, 11188.479, 33552.273]}
        rotation={[0, -1.169, 0]}
        scale={[2.964, 1.337, 2.964]}
      >
        <mesh
          geometry={
            nodes.SM_Env_Beach_19_1_PolygonPirates_Material_01_A_0.geometry
          }
          material={materials.PolygonPirates_Material_01_A}
        />
        <mesh
          geometry={
            nodes.SM_Env_PalmTree_08_1_PolygonPirates_Material_01_A_0.geometry
          }
          material={materials.PolygonPirates_Material_01_A}
          position={[-64.108, 306.589, 101.223]}
          rotation={[-Math.PI, -1.282, -Math.PI]}
          scale={[0.337, 0.748, 0.337]}
        />
        <mesh
          geometry={
            nodes.SM_Env_PalmTree_06_1_PolygonPirates_Material_01_A_0.geometry
          }
          material={materials.PolygonPirates_Material_01_A}
          position={[-67.482, 306.589, 0]}
          rotation={[-Math.PI, 0.532, -Math.PI]}
          scale={[0.337, 0.748, 0.337]}
        />
        <mesh
          geometry={
            nodes.SM_Env_PalmTree_05_1_PolygonPirates_Material_01_A_0.geometry
          }
          material={materials.PolygonPirates_Material_01_A}
          position={[-16.871, 306.589, 37.115]}
          scale={[0.386, 0.856, 0.386]}
        />
        <mesh
          geometry={
            nodes.SM_Env_Beach_67_PolygonPirates_Material_01_A_0.geometry
          }
          material={materials.PolygonPirates_Material_01_A}
          position={[64, -720, -70]}
          rotation={[0, 0.738, 0]}
          scale={[1.351, 5.944, 1.389]}
        />
      </group>
      <group
        position={[-19631.686, 11228.479, -20227.729]}
        rotation={[0, 1.533, 0]}
        scale={[2.964, 1.337, 2.964]}
      >
        <mesh
          geometry={
            nodes.SM_Env_Beach_18_1_PolygonPirates_Material_01_A_0.geometry
          }
          material={materials.PolygonPirates_Material_01_A}
        />
        <mesh
          geometry={
            nodes.SM_Env_PalmTree_08_2_PolygonPirates_Material_01_A_0.geometry
          }
          material={materials.PolygonPirates_Material_01_A}
          position={[-64.108, 306.589, 101.223]}
          rotation={[-Math.PI, -1.282, -Math.PI]}
          scale={[0.337, 0.748, 0.337]}
        />
        <mesh
          geometry={
            nodes.SM_Env_PalmTree_06_2_PolygonPirates_Material_01_A_0.geometry
          }
          material={materials.PolygonPirates_Material_01_A}
          position={[-67.482, 306.589, 0]}
          rotation={[-Math.PI, 0.532, -Math.PI]}
          scale={[0.337, 0.748, 0.337]}
        />
        <mesh
          geometry={
            nodes.SM_Env_PalmTree_05_2_PolygonPirates_Material_01_A_0.geometry
          }
          material={materials.PolygonPirates_Material_01_A}
          position={[-16.871, 306.589, 37.115]}
          scale={[0.386, 0.856, 0.386]}
        />
        <mesh
          geometry={
            nodes.SM_Env_Beach_67_1_PolygonPirates_Material_01_A_0.geometry
          }
          material={materials.PolygonPirates_Material_01_A}
          position={[64, -720, -70]}
          rotation={[0, 0.738, 0]}
          scale={[1.351, 5.944, 1.389]}
        />
      </group>
      <group
        position={[-17471.686, 11228.479, 36052.273]}
        scale={[2.964, 1.337, 2.964]}
      >
        <mesh
          geometry={
            nodes.SM_Env_Beach_17_PolygonPirates_Material_01_A_0.geometry
          }
          material={materials.PolygonPirates_Material_01_A}
        />
        <mesh
          geometry={
            nodes.SM_Env_PalmTree_08_3_PolygonPirates_Material_01_A_0.geometry
          }
          material={materials.PolygonPirates_Material_01_A}
          position={[-64.108, 306.589, 101.223]}
          rotation={[-Math.PI, -1.282, -Math.PI]}
          scale={[0.337, 0.748, 0.337]}
        />
        <mesh
          geometry={
            nodes.SM_Env_PalmTree_06_3_PolygonPirates_Material_01_A_0.geometry
          }
          material={materials.PolygonPirates_Material_01_A}
          position={[-67.482, 306.589, 0]}
          rotation={[-Math.PI, 0.532, -Math.PI]}
          scale={[0.337, 0.748, 0.337]}
        />
        <mesh
          geometry={
            nodes.SM_Env_PalmTree_05_3_PolygonPirates_Material_01_A_0.geometry
          }
          material={materials.PolygonPirates_Material_01_A}
          position={[-16.871, 306.589, 37.115]}
          scale={[0.386, 0.856, 0.386]}
        />
        <mesh
          geometry={
            nodes.SM_Env_Beach_67_2_PolygonPirates_Material_01_A_0.geometry
          }
          material={materials.PolygonPirates_Material_01_A}
          position={[64, -720, -70]}
          rotation={[0, 0.738, 0]}
          scale={[1.351, 5.944, 1.389]}
        />
      </group>
    </group>
  );
}