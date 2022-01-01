import React from "react";
import "./journal.css";
import Leftcomponent from "./left.js";
import RightComponent from "./right.js";
import NewSlider from "./slider.js";
import "./left.css";
import About from "./about.jsx";

function Journal() {
  return (
    <>
      <div className="components">
        <NewSlider />
      </div>
      <About />

      <div className="components">
        <Leftcomponent />
      </div>

      <div className="components">
        <RightComponent />
      </div>
      <div className="components">
        <Leftcomponent />
      </div>

      <div className="components lastcomponent">
        <RightComponent className="lastcomponent" />
      </div>
    </>
  );
}

export default Journal;
