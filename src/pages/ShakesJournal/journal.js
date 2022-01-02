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
      <div className="jr_slidercomponents">
        <NewSlider />
      </div>
      <About />

      <div className="jr_components">
        <Leftcomponent />
      </div>

      <div className="jr_components">
        <RightComponent />
      </div>
      <div className="jr_components">
        <Leftcomponent />
      </div>

      <div className="jr_components lastcomponent">
        <RightComponent className="lastcomponent" />
      </div>
    </>
  );
}

export default Journal;
