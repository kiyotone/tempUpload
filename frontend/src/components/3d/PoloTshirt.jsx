import React, { useRef, useState, useEffect } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { primitive } from "@react-three/fiber";
import * as THREE from "three";

const GLTF_URL_POLO = "/polos.glb";

const gltfLoader = new GLTFLoader();

const PoloTshirt = ({ showPolo }) => {


  const poloGltf = useRef();

  useEffect(() => {
    if (showPolo) {
      if (!poloGltf.current) {
        gltfLoader.load(GLTF_URL_POLO, (loadedGltf) => {
          poloGltf.current = loadedGltf;
          const poloObject = poloGltf.current.scene;
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
  }, [showPolo]);

  return (
    <div>
      {/* Render the Bootstrap card */}

      {showPolo && poloGltf.current && (
        <primitive object={poloGltf.current.scene} scale={[9, 9, 9]} dispose={null} />
      )}
    </div>
  );
};

export default PoloTshirt;
