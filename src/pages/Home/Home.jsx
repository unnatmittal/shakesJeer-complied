import React from "react";
import Aboutsection from "./about-comp/about.jsx";
import Spon from "./sponsor-comp/spon.jsx";
import "./Home.css";
import Event from "./event-compo/event.jsx";
import Video from "./Video-comp/Video.jsx";
import NewSlider from "./slider/slider.js";
// import Slider from "./Slider.jsx";

function App() {
  return (
    <div className="home10">
      {/* <Slider /> */}

      {/* <div style={{height: "1000px"}}></div> */}
      <NewSlider />
      <Aboutsection />
      <Event />
      <Video />
      <Spon />
    </div>
  );
}

export default App;
