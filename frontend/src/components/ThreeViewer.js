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
    <div className=" h-[20rem] absolute pointer-events-none">
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
  );
}

export default ThreeViewer;
