import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import ship from "../../public/assets/models/tz_pirate_ship_recolored.gb.glb"
import { useMove } from "../contexts/movingContext"

export default function Ship(props) { 
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(ship)
  const { actions } = useAnimations(animations, group)
  const { speed } = useMove()

  useEffect(() => {
    if (speed <= 0) actions["Take 001"].stop()
    else actions["Take 001"].play()
  }, [actions, speed])

  return ( 
    <group ref={group} {...props} dispose={null} scale={.23} position={[0, 55, 0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="4615bb3e6d52406caa7564c250624490fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" position={[30.79, 3.285, -169.191]} rotation={[-3.131, 0.047, 1.68]} scale={100} />
                  <group name="group1">
                    <group name="Ship" position={[30.79, 3.285, -169.191]} rotation={[-3.131, 0.047, 1.68]} scale={100}>
                      <group name="polySurface35" />
                    </group>
                  </group>
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['Material.002']} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['Material.001']} skeleton={nodes.Object_8.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  ) 
}

