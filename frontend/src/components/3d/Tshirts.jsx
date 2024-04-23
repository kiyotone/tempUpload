import React, { useRef, useState, useEffect } from "react";
import "../App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import * as THREE from "three";
import { TextureLoader } from "three";


const GLTF_URL = "./hea.glb";

const gltfLoader = new GLTFLoader();

const Tshirts = ({ toggle }) => {
  const [bodyColor, setBodyColor] = useState("#e66465");
  const [sleeveesColor, setSleeveesColor] = useState("#f6b73c");
  const [sleeveeColor, setSleeveeColor] = useState("#f6b73c");
  const [neckColor, setNeckColor] = useState("#f6b73c");
  const [backColor, setBackColor] = useState("#f6b73c");
  const [showRoundNeck, setShowRoundNeck] = useState(false);
  const [showRoundNeckColorPicker, setShowRoundNeckColorPicker] =
    useState(false);
  const [cameraPosition, setCameraPosition] = useState([0, 0, 10]);
  const [cameraRotation, setCameraRotation] = useState([0, 0, 0]);
  const [logoSize, setLogoSize] = useState(1);
  const [text, setText] = useState("");
  const [imageTexture, setImageTexture] = useState(null);
  const [textTexture, setTextTexture] = useState(null);
  const [selectedPart, setSelectedPart] = useState("front");
  const [joystickMovement, setJoystickMovement] = useState({ x: 0, y: 0 });

  const gltf = useRef();
  const logoMesh = useRef();
  const modelScene = useRef();

  useEffect(() => {
    gltfLoader.load(GLTF_URL, (loadedGltf) => {
      gltf.current = loadedGltf;
      const tshirtObject = gltf.current.scene;
      tshirtObject.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
          });
        }
      });
      modelScene.current.add(tshirtObject);
    });
  }, []);

  const handleImageChange = (logoDataURL) => {
    const textureLoader = new TextureLoader();
    let texture;
  
    textureLoader.load(logoDataURL, (loadedTexture) => {
      texture = loadedTexture;
      texture.minFilter = THREE.LinearFilter;
  
      if (selectedPart === "front" && gltf.current && gltf.current.scene) {
        gltf.current.scene.traverse((child) => {
          if (child.isMesh && child.name === "front") {
            // Create a new material for the front mesh
            const frontMaterial = new THREE.MeshPhongMaterial({
              map: texture,
              side: THREE.DoubleSide,
            });
  
            // Apply the new material to the front mesh
            child.material = frontMaterial;
          }
        });
      }
    });
  };
  

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        handleImageChange(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const frontMaterial = new THREE.MeshBasicMaterial({
    map: imageTexture,
    transparent: true,
    alphaTest: 1.20, // Adjust the alphaTest value as needed
    side: THREE.DoubleSide,
  });

  const changePartColor = (partName, newColor) => {
    if (gltf.current && gltf.current.scene) {
      const tshirtObject = gltf.current.scene;
      tshirtObject.traverse((child) => {
        if (child.isMesh && child.name === partName) {
          // Check if the material has a map (texture) applied
          const hasTexture = child.material.map !== null;

          // Create a new material with color and texture if available
          const newMaterial = new THREE.MeshPhongMaterial({
            color: newColor,
            map: hasTexture ? child.material.map : null,
            side: THREE.DoubleSide,
          });

          child.material = newMaterial;
        }
      });
    }
  };

  const showRoundNeckShirt = () => {
    setShowRoundNeck(true);
    setShowRoundNeckColorPicker(true);
  };
  const shirtDimensions = {
    width: 0.8, // Width of the front part of the shirt
    height: 2, // Height of the front part of the shirt
  };

  const handleLogoSizeChange = (e) => {
    setLogoSize(parseFloat(e.target.value));
  };

  const createTextTexture = (text, textColor) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Set canvas size based on shirt dimensions
    canvas.width = shirtDimensions.width * 100;
    canvas.height = shirtDimensions.height * 100;

    // Set font and text properties
    context.font = "20px Arial";
    context.fillStyle = textColor || "black";
    context.textAlign = "center";
    context.textBaseline = "middle";

    // Draw the text on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    // Create a texture from the canvas
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;

    return texture;
  };

  const handleTextChange = () => {
    const newTextTexture = createTextTexture(text);
    setTextTexture(newTextTexture);

    if (selectedPart === "front" && gltf.current && gltf.current.scene) {
      // Apply text texture to the UV-mapped front part
      const frontMaterial = new THREE.MeshPhongMaterial({
        map: newTextTexture,
      });
      gltf.current.scene.traverse((child) => {
        if (child.isMesh && child.name === "front") {
          child.material = frontMaterial;
        }
      });
    }
  };

  const handleJoystickButtonClick = (direction) => {
    setJoystickMovement((prevMovement) => {
      switch (direction) {
        case "up":
          return { x: prevMovement.x, y: prevMovement.y + 0.1 };
        case "down":
          return { x: prevMovement.x, y: prevMovement.y - 0.1 };
        case "left":
          return { x: prevMovement.x - 0.1, y: prevMovement.y };
        case "right":
          return { x: prevMovement.x + 0.1, y: prevMovement.y };
        default:
          return prevMovement;
      }
    });
  };

  const updateLogoPosition = () => {
    if (logoMesh.current) {
      logoMesh.current.position.x = joystickMovement.x;
      logoMesh.current.position.y = joystickMovement.y;
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 color-customizer" style={{ width: "50%" }}>
            <div
              className="card"
              style={{ margin: "20px", marginTop: "150px" }}
            >
              <div className="card-body" style={{ marginTop: "0px" }}>
                <h2 className="card-title text-center">Customize Yourself</h2>

                <h4 className="mx-2">Choose Dress</h4>
                <div className="btn">
                  <button
                    className="btn btn-primary mx-2 mt-3"
                    onClick={showRoundNeckShirt}
                  >
                    Round Neck
                  </button>
                  <button
                    className="btn btn-primary mx-2 mt-3"
                    onClick={() => toggle("Polo")} // Switch to Polo component
                  >
                    Polo
                  </button>
                </div>
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
                                value={bodyColor}
                                onChange={(e) => {
                                  setBodyColor(e.target.value);
                                  changePartColor("front", e.target.value);
                                }}
                              />
                              <label htmlFor="body" style={{ padding: "4px" }}>
                                Front
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="color"
                                id="sleeves"
                                name="sleevees"
                                value={sleeveesColor}
                                onChange={(e) => {
                                  setSleeveesColor(e.target.value);
                                  changePartColor("sleevees", e.target.value);
                                }}
                              />
                              <label
                                htmlFor="sleeves"
                                style={{ padding: "4px" }}
                              >
                                Right Sleeves
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="color"
                                id="sleeves"
                                name="sleevee"
                                value={sleeveeColor}
                                onChange={(e) => {
                                  setSleeveeColor(e.target.value);
                                  changePartColor("sleevee", e.target.value);
                                }}
                              />
                              <label
                                htmlFor="sleevee"
                                style={{ padding: "4px" }}
                              >
                                Left Sleeves
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
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
                              <label htmlFor="neck" style={{ padding: "4px" }}>
                                Neck
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
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
                              <label
                                htmlFor="bottom"
                                style={{ padding: "4px" }}
                              >
                                Back
                              </label>
                            </div>
                          </div>

                          <input
                            type="file"
                            accept=".png, .jpg, .jpeg"
                            onChange={handleLogoUpload}
                          />
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="selectPart">Select Part:</label>
                            <select
                              id="selectPart"
                              name="selectPart"
                              value={selectedPart}
                              onChange={(e) => setSelectedPart(e.target.value)}
                            >
                              <option value="front">Front</option>
                              <option value="back">Back</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="logoSize">Logo Size:</label>
                            <input
                              type="range"
                              id="logoSize"
                              name="logoSize"
                              min="0.5"
                              max="2"
                              step="0.1"
                              value={logoSize}
                              onChange={handleLogoSizeChange}
                            />
                            <span>{logoSize}</span>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="textInput">Text:</label>
                            <input
                              type="text"
                              id="textInput"
                              name="textInput"
                              value={text}
                              onChange={(e) => setText(e.target.value)}
                            />
                          </div>
                          <button
                            className="btn btn-primary mx-2 mt-3"
                            onClick={handleTextChange}
                          >
                            Apply Text
                          </button>
                        </div>
                        <div className="joystick-container">
                          <button
                            onClick={() => handleJoystickButtonClick("up")}
                          >
                            Up
                          </button>
                          <button
                            onClick={() => handleJoystickButtonClick("down")}
                          >
                            Down
                          </button>
                          <button
                            onClick={() => handleJoystickButtonClick("left")}
                          >
                            Left
                          </button>
                          <button
                            onClick={() => handleJoystickButtonClick("right")}
                          >
                            Right
                          </button>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 canvas-container" style={{ width: "50%" }}>
            <div className="product-canvas" id="canvas-container">
              <Canvas
                style={{
                  background: "white",
                  borderRadius: "40px",
                  height: "50vh",
                  width: "100%",
                  marginTop: "70px",
                }}
                camera={{
                  position: cameraPosition,
                  rotation: cameraRotation,
                }}
                onCreated={({ camera }) => {
                  camera.lookAt(0, 0, 0);
                }}
              >
                {showRoundNeck && gltf.current && (
                  <primitive
                    object={gltf.current.scene}
                    scale={[9, 9, 9]}
                    position={[0, 0, 0]}
                  />
                )}
                {imageTexture && selectedPart === "front" && (
                  <primitive
                    object={gltf.current.scene.clone()} // Clone the scene to avoid modifying the original model
                    scale={[9, 9, 9]}
                    position={[0, 0, 0]}
                  >
                    <meshPhongMaterial
                      map={imageTexture}
                      side={THREE.DoubleSide}
                    />
                  </primitive>
                )}

                {textTexture && selectedPart === "front" && (
                  <primitive
                    object={gltf.current.scene.clone()} // Clone the scene to avoid modifying the original model
                    scale={[9, 9, 9]}
                    position={[0, 0, 0]}
                  >
                    <meshPhongMaterial
                      map={textTexture}
                      side={THREE.DoubleSide}
                    />
                  </primitive>
                )}
                <OrbitControls />
                <ambientLight intensity={0.9} />
                <directionalLight position={[15, 15, 15]} intensity={0.5} />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
      <canvas
        id="decalCanvas"
        width={1436}
        height={1296}
        style={{
          display: "block",
          width: "718px",
          height: "648px",
          touchAction: "none",
        }}
      ></canvas>
    </>
  );
};

export default Tshirts;
