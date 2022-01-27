import React from "react";
import "./journal.css";
import Hover from "./hover.js";
import NewSlider from "./slider.js";
import About from "./about.jsx";
import Quote from "./quote_journal";
import JournalCard from "./journal-card";

function Journal() {
  return (
    <>
      <div className="jr_slidercomponents">
        <NewSlider />
      </div>
      <div className="j-css">
        <About />
        <div className="ab-quote">
          Stand-up comedy is mine: it's my entity; it's my brand; I own it. I do
          it when I want to do it. <br />- Kevin Hart
        </div>

        <div className="jr_components">
          <Hover />
        </div>
        <JournalCard />
      </div>
    </>
  );
}

export default Journal;
