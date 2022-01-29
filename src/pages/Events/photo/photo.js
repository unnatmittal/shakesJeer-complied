import React from "react";
import "./photo.css";
import p1 from "./1.jpeg";
import p2 from "./2.jpeg";
import p3 from "./3.jpeg";
import p4 from "./4.jpeg";
import p5 from "./5.jpeg";
import p6 from "./6.jpeg";
import p7 from "./7.jpeg";
import p8 from "./8.jpeg";
// import p9 from "./9.jpeg";
// import p10 from "./10.jpeg";
import p11 from "./11.jpeg";
import Heading from "../photo/heading.js";
const Photo = () => {
  return (
    <>
      <Heading name="Glimpse of Past" />
      <div class="event-image-grid">
        <a class="event-image-grid-col-2 event-image-grid-row-2" href="//">
          <img
            src={p11}
            alt="architecture"
            class="event-image-grid-col-2 event-image-grid-row-2"
          />
        </a>
        <img src={p1} alt="architecture" />
        <img src={p2} alt="architecture" />
        <img src={p4} alt="architecture" />
        <img src={p5} alt="architecture" />
        <img src={p3} alt="architecture" />
        <img src={p8} alt="architecture" />
        <img src={p6} alt="architecture" />
        <div className="photo-seemore">
          <img src={p7} alt="architecture" />
          <a href="https://www.instagram.com/shakesjeer.nsut/" >
            <div className="seemore">
              <p>See More</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Photo;
