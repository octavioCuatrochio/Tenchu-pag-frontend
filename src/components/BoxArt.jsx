import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

function BoxArt(props) {
  return (
    <Canvas
      camera={{ position: [-5, -5, props.distance], fov: 10 }}
      style={{
        backgroundColor: props.bg_color,
        width: props.width + "vw",
        height: props.height + "vh",
      }}
    >
      <ambientLight intensity={1.25} />
      {/* <ambientLight intensity={0.1} /> */}
      {/* <directionalLight intensity={0.4} /> */}
      <Suspense fallback={null}>
        <Model position={[0, 0, 0]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default BoxArt;
