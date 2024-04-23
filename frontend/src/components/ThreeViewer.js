import React, { useState } from "react";
import "./App.css";
import Check from "./3d/polo";
import Tshirts from "./3d/Tshirts";
// import Draggable from "react-draggable";

function ThreeViewer() {
  const [selectedComponent, setSelectedComponent] = useState("Tshirt");

  const toggleComponent = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className=" h-[50rem]">
      <h1 className="text-5xl bg-gray-300 shadow-xl mx-80 mt-12 rounded-sm text-orange-600 text-center font-semibold  py-2">
        3D Viewer
      </h1>
      <div>
        {selectedComponent === "Tshirt" ? (
          <Tshirts toggle={() => toggleComponent("Polo")} />
        ) : (
          <Check toggles={() => toggleComponent("Tshirt")} />
        )}
        {/* <div>
        <Draggable>
        <div>
        hi you can move me now
        </div>
        </Draggable>
      </div> */}
      </div>
    </div>
  );
}

export default ThreeViewer;
