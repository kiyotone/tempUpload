import React, { useState } from "react";
import Tshirts from "./Tshirts.jsx";
import Check from "./polo.jsx";

const Main = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {/* Left-side column with fixed buttons in a row */}
          <div className="card h-100 p-3 shadow">
            <div className="d-flex flex-row">
              <div className="overflow-auto">
                <h2 className="text-center">Customize Yourself</h2>
                <p>Choose T-Shirts Type</p>
                <button className="btn btn-primary mx-2">Round Neck</button>
                <button className="btn btn-primary mx-2">Polo</button>
                <button className="btn btn-primary mx-2">V-Neck</button>
                <button className="btn btn-primary mx-2">Full Sleeves</button>
                <button className="btn btn-primary mx-2">Half Sleeves</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {/* Right-side column with equal width */}
          <div className="card h-100 p-3 shadow">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
