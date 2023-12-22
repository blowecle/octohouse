import React, { Suspense, useState, useEffect } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import model from './octopusHouse.glb';

const Model = ({ setCameras }) => {
  const gltf = useLoader(GLTFLoader, model);

  useEffect(() => {
    if (gltf.cameras && gltf.cameras.length > 0) {
      setCameras(gltf.cameras);
    }
  }, [gltf, setCameras]);

  return <primitive object={gltf.scene} />;
};

const CameraSwitcher = ({ cameras, cameraIndex }) => {
  const { camera } = useThree();

  useEffect(() => {
    if (cameras.length > 0 && cameraIndex < cameras.length) {
      const selectedCamera = cameras[cameraIndex];
      camera.copy(selectedCamera);
      camera.updateProjectionMatrix();
    }
  }, [cameras, cameraIndex, camera]);

  return null;
};

const ThreeScene = ({ cameraIndex }) => {
  const [cameras, setCameras] = useState([]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas>
        <Suspense fallback={null}>
          <Model setCameras={setCameras} />
          <CameraSwitcher cameras={cameras} cameraIndex={cameraIndex} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
