import React from "react";
import "./journal.css";
import Hover from "./hover.js";
import NewSlider from "./slider.js";
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
