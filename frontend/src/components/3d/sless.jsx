import React, { useRef, useState, useEffect } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { primitive } from "@react-three/fiber";
import * as THREE from "three";

const GLTF_URL_Sl = "/sl.glb";

const gltfLoader = new GLTFLoader();

const Fsleeves = ({ showSl }) => {
    
  const SlGltf = useRef();

  useEffect(() => {
    if (showSl) {
      if (!SlGltf.current) {
        gltfLoader.load(GLTF_URL_Sl, (loadedGltf) => {
            SlGltf.current.current = loadedGltf;
          const slObject = SlGltf.current.current.scene;
          slObject.traverse((child) => {
            if (child.isMesh) {
              child.material = new THREE.MeshPhongMaterial({
                color: 0xffffff,
              });
            }
          });
        });
      }
    }
  }, [showSl]);

  return (
    showSl && SlGltf.current && (
      <primitive object={SlGltf.current.scene} scale={[2.5, 2.5, 2.5]} dispose={null} />
    )
  );
};

export default Fsleeves;
