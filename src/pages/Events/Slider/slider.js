import React from "react";
import Slider from "react-animated-slider";
import Image1 from "./images/1.png";
import Image2 from "./images/2.png";
import Image3 from "./images/3.png";
import Image4 from "./images/4.png";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

const content = [
  {
    index:1,
    image:Image4,
    position:  ``
  },
  {
    index:2,
    image: Image3,
    position:  ``
  },
  {
    index:3,
    image:Image1,
    position:  `center`
  },
  {
    index:4,
    image:Image2,
    position:  `center`
  }
];

const NewSlider = () => (
  <div className="jr-sliderMain">
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{
            background: `url('${item.image}') no-repeat ${item.position}`, width: "100%", height: "70vh"  }}
        >
        </div>
      ))}
    </Slider>
  </div>
);

export default NewSlider;
