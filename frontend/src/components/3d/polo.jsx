import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import * as THREE from "three";
import { Box } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import "../App.css";

const GLTF_URL_Check = "/polos.glb";
const gltfLoader = new GLTFLoader();

const Check = ({toggles}) => {
  const [frontColor, setFrontColor] = useState("#e66465");
  const [backColor, setBackColor] = useState("#f6b73c");
  const [buttonColor, setButtonColor] = useState("#f6b73c");
  const [neckColor, setNeckColor] = useState("#f6b73c");
  const [sleeveesColor, setsleeveesColor] = useState("#f6b73c");
  const [sleeveColor, setSleeveColor] = useState("#f6b73c");
  const [buttonsColor, setButtonsColor] = useState("#f6b73c");
  const [sborderColor, setSborderColor] = useState("#f6b73c");
  const [sbordersColor, setSbordersColor] = useState("#f6b73c");
  const [lbordersColor, setLbordersColor] = useState("#f6b73c");
  const [lborderColor, setLborderColor] = useState("#f6b73c");
  const [showPoloColorPicker, setShowPoloColorPicker] = useState(false);
  const [uploadedLogo, setUploadedLogo] = useState(null);

  const cgltf = useRef();
  extend({ Box });
  const logoMesh = useRef();
  const cameraRef = useRef();

  useEffect(() => {
    
    gltfLoader.load(GLTF_URL_Check, (loadedGltf) => {
      cgltf.current = loadedGltf;
      const PObject = cgltf.current.scene;
      PObject.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
          });
        }
      });
    });
  }, []);

  useEffect(() => {
    // ...
  
    if (cgltf.current && cgltf.current.scene) {
      const PObject = cgltf.current.scene;
  
      // Set the camera target to the center of the model
      const boundingBox = new THREE.Box3().setFromObject(PObject);
      const modelCenter = boundingBox.getCenter(new THREE.Vector3());
      cameraRef.current.lookAt(modelCenter);
    }
  }, []);

  const changePartColor = (partName, newColor) => {
    if (cgltf.current && cgltf.current.scene) {
      const PObject = cgltf.current.scene;
      PObject.traverse((child) => {
        if (child.isMesh && child.name === partName) {
          child.material.color.set(newColor);
        }
      });
    }
  };

  const Showcolor = () => {
    setShowPoloColorPicker(true);
  };

  const hidepolo = () => {
    setShowPoloColorPicker(false);
  };
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const logoURL = URL.createObjectURL(file);
      setUploadedLogo(logoURL);
      if (logoMesh.current) {
        // Set the logo texture to the 3D model using a custom material
        logoMesh.current.material = new THREE.MeshStandardMaterial({
          map: new THREE.TextureLoader().load(logoURL),
        });
      }
    }
  };



  return (
    <>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div
                className="card"
                style={{ margin: "20px", marginTop: "150px" }}
              >
                <div className="card-body">
                  <h2 className="text-center">Customize Yourself</h2>
                  <h4 className="mx-2">Choose Dress</h4>
                  <button
  className="btn btn-primary mx-2 mt-3 mb-2" 
  onClick={() => toggles("Tshirt")} // Switch to Tshirt component
>
  Round Neck
</button>

                  <button className="btn btn-primary mt-3 mx-2 mb-2" onClick={Showcolor}>
                    Polo
                  </button>

                  <div className="card-overlay">
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text">
                          <div className="colors">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="color"
                                  id="front"
                                  name="front"
                                  value={frontColor}
                                  onChange={(e) => {
                                    setFrontColor(e.target.value);
                                    changePartColor("front", e.target.value);
                                  }}
                                />
                                <label htmlFor="front">Front</label>
                              </div>
                            </div>
                            <div>
                              <input
                                type="color"
                                id="sleevees"
                                name="sleevees"
                                value={sleeveesColor}
                                onChange={(e) => {
                                  setsleeveesColor(e.target.value);
                                  changePartColor("sleevees", e.target.value);
                                }}
                              />
                              <label htmlFor="sleevees">Right Sleeves</label>
                            </div>
                            <div>
                              <input
                                type="color"
                                id="sleeve"
                                name="sleeve"
                                value={sleeveColor}
                                onChange={(e) => {
                                  setSleeveColor(e.target.value);
                                  changePartColor("sleeve", e.target.value);
                                }}
                              />
                              <label htmlFor="sleeve">Left Sleeves</label>
                            </div>
                            <div>
                              <input
                                type="color"
                                id="neck"
                                name="neck"
                                value={neckColor}
                                onChange={(e) => {
                                  setNeckColor(e.target.value);
                                  changePartColor("neck", e.target.value);
                                }}
                              />
                              <label htmlFor="neck">Neck</label>
                            </div>
                            <div>
                              <input
                                type="color"
                                id="back"
                                name="back"
                                value={backColor}
                                onChange={(e) => {
                                  setBackColor(e.target.value);
                                  changePartColor("back", e.target.value);
                                }}
                              />
                              <label htmlFor="back">Back</label>
                            </div>
                            <div>
                              <input
                                type="color"
                                id="button"
                                name="button"
                                value={buttonColor}
                                onChange={(e) => {
                                  setButtonColor(e.target.value);
                                  changePartColor("button", e.target.value);
                                }}
                              />
                              <label htmlFor="button">Button</label>
                            </div>
                            <div>
                              <input
                                type="color"
                                id="buttons"
                                name="buttons"
                                value={buttonsColor}
                                onChange={(e) => {
                                  setButtonsColor(e.target.value);
                                  changePartColor("buttons", e.target.value);
                                }}
                              />
                              <label htmlFor="buttons">Button Holder</label>
                            </div>
                            <div>
                              <input
                                type="color"
                                id="sborder"
                                name="sborder"
                                value={sborderColor}
                                onChange={(e) => {
                                  setSborderColor(e.target.value);
                                  changePartColor("sborder", e.target.value);
                                }}
                              />
                              <label htmlFor="sborder">L-sleeves border</label>
                            </div>
                            <div>
                              <input
                                type="color"
                                id="sborders"
                                name="sborders"
                                value={sbordersColor}
                                onChange={(e) => {
                                  setSbordersColor(e.target.value);
                                  changePartColor("sborders", e.target.value);
                                }}
                              />
                              <label htmlFor="sborders">R-sleeves border</label>
                            </div>
                            <div>
                              <input
                                type="color"
                                id="lborders"
                                name="lborders"
                                value={lbordersColor}
                                onChange={(e) => {
                                  setLbordersColor(e.target.value);
                                  changePartColor("lborders", e.target.value);
                                }}
                              />
                              <label htmlFor="lborders">
                                Front lower border
                              </label>
                            </div>
                            <div>
                              <input
                                type="color"
                                id="lborder"
                                name="lborder"
                                value={lborderColor}
                                onChange={(e) => {
                                  setLborderColor(e.target.value);
                                  changePartColor("lborder", e.target.value);
                                }}
                              />
                              <label htmlFor="lborder">Back lower border</label>
                            </div>
                            {/* Include the rest of the color pickers here */}
                          </div>
                        </p>
                      </div>
                    </div>
                    <h4 className="mx-2">Upload Logo</h4>
                          <input
                            type="file"
                            accept=".png, .jpg, .jpeg"
                            onChange={handleLogoUpload}
                          />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="product-canvas">
                <Canvas
                  style={{
                    background: "white",
                    borderRadius: "40px",
                    height: "50vh",
                    width: "100%",
                    marginTop: "70px",
                  }}
                  camera={{ position: [0, 0, 5] }}
                  ref={cameraRef}
                >
                  {cgltf.current && (
                    <primitive
                      object={cgltf.current.scene}
                      scale={[9, 9, 9]}
                      dispose={null}
                    />
                    
                  )}
                 {uploadedLogo && (
                  <Box
                    ref={logoMesh}
                    args={[1, 1, 0.05]}
                    position={[0, 0, 1.43]}
                    rotation={[0, 0, 20]}
                  />
                )}
                  <OrbitControls />
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[10, 10, 10]} intensity={1} />

                </Canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Check;
