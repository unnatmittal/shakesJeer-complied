import React from "react";
import "./journal.css";
import Leftcomponent from "./left.js";
import Hover from "./hover.js";
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
        <Hover />
      </div>
    </>
  );
}

export default Journal;
