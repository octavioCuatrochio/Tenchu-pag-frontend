/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/model.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[-0.47, 0.69, -2.45]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={100}>
            <mesh geometry={nodes['PSX_Jewel_Case_5521_playstation-one-psx-prev_0'].geometry} material={materials['5521_playstation-one-psx-prev']} />
            <mesh geometry={nodes.PSX_Jewel_Case_Black_0.geometry} material={materials.Black} />
            <mesh geometry={nodes.PSX_Jewel_Case_CDTExt_0.geometry} material={materials.CDTExt} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model.glb')
