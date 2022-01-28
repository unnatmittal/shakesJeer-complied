import React from "react";
import { render } from "react-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

import e1 from "./images/e1.png";
import e2 from "./images/e2.png";
import e3 from "./images/e3.png";

const content = [
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: e1,
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png",
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    image: e2,
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: e3,
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
  // {
  //   title: "Phasellus volutpat metus",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
  //   button: "Buy now",
  //   image:
  //     "https://images.pexels.com/photos/842567/pexels-photo-842567.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   user: "Bruno Vizovskyy",
  //   userProfile: "https://i.imgur.com/4KeKvtH.png"
  // }
];

const NewSlider = () => (
  <div className="jr-sliderMain">
    <Slider className="journal-slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="journal-slider-content"
          // style={{ background: `url('${item.image}') no-repeat center center`, width:"100%", height:"70vh" }}
        >
          <img src={item.image} alt=" " />
          {/* <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div> */}
        </div>
      ))}
    </Slider>
  </div>
);

render(<NewSlider />, document.getElementById("root"));
export default NewSlider;
