import React from "react";
import "./journal.css";
import Hover from "./hover.js";
import NewSlider from "./slider.js";
import About from "./about.jsx";
import Quote from "./quote_journal";

function Journal() {
  return (
    <>
      <div className="jr_slidercomponents">
        <NewSlider />
      </div>

      <About />
      <Quote />
      <div className="jr_components">
        <Hover />
      </div>
    </>
  );
}

export default Journal;
