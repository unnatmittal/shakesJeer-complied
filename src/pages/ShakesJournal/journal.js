import React from "react";
import "./journal.css";
import Hover from "./hover.js";
import NewSlider from "./slider.js";
import About from "./about.jsx";
// import Quote from "./quote_journal";
import JournalCard from "./journal-card";

function Journal() {
  return (
    <div className="jr">
      <div className="jr_slidercomponents">
        <NewSlider />
      </div>
      <div className="j-css">
        <About />
        <div className="ab-quote">
          At the height of laughter, the universe is flung into a kaleidoscope
          of new possibilities
          <br /> - Louis L' Amour{" "}
        </div>

        <div className="jr_components">
          <Hover />
        </div>
        <JournalCard />
      </div>
    </div>
  );
}

export default Journal;
