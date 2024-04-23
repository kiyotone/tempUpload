import React, { useRef, useState, useEffect } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { primitive } from "@react-three/fiber";
import * as THREE from "three";

const GLTF_URL_Sleeves = "/f.glb";

const gltfLoader = new GLTFLoader();

const Fsleeves = ({ showFsleeves }) => {
    
  const FsleevesGltf = useRef();

  useEffect(() => {
    if (showFsleeves) {
      if (!FsleevesGltf.current) {
        gltfLoader.load(GLTF_URL_Sleeves, (loadedGltf) => {
            FsleevesGltf.current = loadedGltf;
          const poloObject = FsleevesGltf.current.scene;
          poloObject.traverse((child) => {
            if (child.isMesh) {
              child.material = new THREE.MeshPhongMaterial({
                color: 0xffffff,
              });
            }
          });
        });
      }
    }
  }, [showFsleeves]);

  return (
    showFsleeves && FsleevesGltf.current && (
      <primitive object={FsleevesGltf.current.scene} scale={[8, 8, 8]} dispose={null} />
    )
  );
};

export default Fsleeves;
