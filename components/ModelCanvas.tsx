"use client";

import React, { useRef, useEffect, Suspense } from "react";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { images } from "@/constants";

interface Model3DProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

// Camera controller component
function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    // Set initial camera position to see the entire model from a corner angle
    camera.position.set(8, 8, 15);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
}

// Loading fallback component
function ModelLoader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#6366f1" />
    </mesh>
  );
}

const Model3D = ({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: Model3DProps) => {
  const meshRef = useRef<THREE.Group>(null);

  // Load the GLTF model
  const { scene } = useGLTF(modelPath);

  // Clone the scene to avoid issues with multiple instances
  const clonedScene = scene.clone();

  // Apply transformations
  clonedScene.scale.setScalar(scale);
  clonedScene.position.set(...position);
  clonedScene.rotation.set(...rotation);

  // Center the model by computing its bounding box
  useEffect(() => {
    if (clonedScene && meshRef.current) {
      const box = new THREE.Box3().setFromObject(clonedScene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      // Adjust position to center the model
      clonedScene.position.sub(center);

      // Scale to fit in viewport if needed
      const maxDim = Math.max(size.x, size.y, size.z);
      if (maxDim > 5) {
        const scaleFactor = 5 / maxDim;
        clonedScene.scale.multiplyScalar(scaleFactor);
      }
    }
  }, [clonedScene]);

  return <primitive ref={meshRef} object={clonedScene} />;
};

export default function Model3DCanvas() {
  return (
    <Canvas
      camera={{ position: [8, 8, 15], fov: 25 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={<ModelLoader />}>
        <CameraController />

        <Model3D
          modelPath={images.pokemonModel}
          scale={1.2}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        />

        <OrbitControls
          enableZoom={true}
          enablePan={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          minDistance={3}
          maxDistance={15}
          target={[0, 0, 0]}
          zoomToCursor={true}
          enableDamping={true}
          dampingFactor={0.05}
        />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}

export { ModelLoader };
