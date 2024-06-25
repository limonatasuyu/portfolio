import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import island from "/assets/models/chicken_gun_pirateislands.glb";
import { useCompoundBody } from "@react-three/cannon";

export default function Model(props) {
  
  const shapes = [
    // Big Village Island
    { rotation: [0, 0.4, 0], position: [-90, 0, -25], args: [40, 10, 22] },
    { rotation: [0, 0.1, 0], position: [-102, 0, -48], args: [10, 10, 27] },
    { rotation: [0, -0.5, 0], position: [-108, 0, -70], args: [40, 10, 22] },
    { rotation: [0, 0.9, 0], position: [-88, 0, -82], args: [20, 10, 12] },
    { rotation: [0, -0.3, 0], position: [-98, 0, -115], args: [35, 10, 36] },
    { rotation: [0, 0.8, 0], position: [-55, 0, -130], args: [30, 10, 22] },
    { rotation: [0, 0.4, 0], position: [5, 0, -108], args: [100, 10, 80] },
    { rotation: [0, 1.5, 0], position: [-4, 0, -150], args: [42, 10, 22] },
    { rotation: [0, 1.5, 0], position: [-4, 0, -150], args: [42, 10, 22] },
    { rotation: [0, 0.4, 0], position: [40, 0, -70], args: [42, 10, 20] },
    { rotation: [0, -0.8, 0], position: [-10, 0, -55], args: [5, 10, 20] },
    { rotation: [0, 0.5, 0], position: [-10, 0, -50], args: [3.5, 10, 20] },
    { rotation: [0, 0.11, 0], position: [-12, 0, -40], args: [3.5, 10, 20] },
    { rotation: [0, -0.8, 0], position: [-10, 0, -55], args: [5, 10, 20] },
    { rotation: [0, -0.8, 0], position: [-20, 0, -25], args: [5, 10, 20] },
    { rotation: [0, 0.1, 0], position: [-35, 0, -17], args: [20, 10, 5] },
    { rotation: [0, -0.4, 0], position: [-53, 0, -20], args: [25, 10, 5] },
    { rotation: [0, 0.5, 0], position: [-23.6, 0, -21.2], args: [3.6, 10, 20] },
    { rotation: [0, 0.5, 0], position: [-38, 0, -17], args: [3.6, 10, 25] },
    { rotation: [0, -0.5, 0], position: [55, 0, -45], args: [15, 10, 35] },
    { rotation: [0, 0.3, 0], position: [-130, 0, -21], args: [22, 10, 22] },
    { rotation: [0, 0.3, 0], position: [-58, 0, -158], args: [22, 10, 22] },
    // Castle Island
    { rotation: [0, -0.8, 0], position: [330, 0, -110], args: [150, 10, 130] },
    { rotation: [0, -1, 0], position: [290, 0, -10], args: [20, 10, 60] },
    { rotation: [0, -1, 0], position: [237, 0, -90], args: [20, 10, 20] },
    { rotation: [0, -1.6, 0], position: [295, 0, -210], args: [33, 10, 15] },
    // City Island
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
    // Farm Island
    { rotation: [0, 0.5, 0], position: [150, 0, -245], args: [50, 10, 80] },
    { rotation: [0, 0.5, 0], position: [180, 0, -270], args: [43, 10, 60] },
    { rotation: [0, 0.5, 0], position: [170, 0, -208], args: [15, 10, 15] },
    { rotation: [0, 0.5, 0], position: [125, 0, -280], args: [45, 10, 5] },
    { rotation: [0, 0.5, 0], position: [115, 0, -250], args: [5, 10, 35] },
    // Shipwreck
    { rotation: [0, -0.5, 0], position: [360, 0, 160], args: [80, 10, 40] },
    { rotation: [0, 0.2, 0], position: [400, 0, 130], args: [20, 10, 80] },
    { rotation: [0, 0.2, 0], position: [417, 0, 112], args: [14, 10, 16] },
    { rotation: [0, 0.8, 0], position: [438, 0, 100], args: [14, 10, 35] },
    { rotation: [0, -0.2, 0], position: [317, 0, 115], args: [14, 10, 37] },
    // Small Islands
    { rotation: [0, 0, 0], position: [49, 0, 265], args: [23, 10, 23] },
    { rotation: [0, 0, 0], position: [274, 0, 240], args: [23, 10, 23] },
    { rotation: [0, 0, 0], position: [29, 0, -295], args: [23, 10, 23] },
    // Small Village Island
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

  const { nodes, materials } = useGLTF(island)
  

  return (
    <group {...props} dispose={null}>
      <group position={[-2950, -11.7, -2950]} scale={0.36}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.PolygonPirates_Material_02_A} />
        <mesh geometry={nodes.mesh_0_1.geometry} material={materials.PolygonPirates_Material_01_A} />
        <mesh geometry={nodes.mesh_0_2.geometry} material={materials.PolygonPirates_Material_04_A} />
        <mesh geometry={nodes.mesh_0_3.geometry} material={materials.PolygonPirates_Material_03_A} />
        <mesh geometry={nodes.mesh_0_6.geometry} material={materials.Cloud} />
        <mesh geometry={nodes.mesh_0_7.geometry} material={materials.PolygonPirates_Material_01_A} />
      </group>
    </group>
  )
}
