import React from "react";
import "./photo.css";
import one from "./1.jpg";
import pic1 from "./1.1.jpg";
import pic2 from "./1.2.jpg";
import pic3 from "./1.3.jpeg";
import pic4 from "./1.4.jpeg";
import Heading from "../photo/heading.js";
const Photo = () => {
  return (
    <>
      <Heading name="Glimpse of Past" />
      <div class="event-image-grid">
        <a class="event-image-grid-col-2 event-image-grid-row-2">
          <img
            src={pic1}
            alt="architecture"
            class="event-image-grid-col-2 event-image-grid-row-2"
          />
        </a>
        <img src={pic2} alt="architecture" />
        <img src={pic3} alt="architecture" />
        <img src={one} alt="architecture" />
        <img src={one} alt="architecture" />
        <img src={one} alt="architecture" />
        <img src={one} alt="architecture" />
        <img src={one} alt="architecture" />
        <div className="photo-seemore">
          <img src={one} alt="architecture" />
          <div className="seemore">
            <p>See More</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photo;
