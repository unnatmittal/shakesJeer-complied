import React from "react";
import "./photo.css";
import one from "./1.jpg";
import Heading from "../photo/heading.js"
const Photo = () => {
  return (
    <>
    <Heading name="Glimpse of Past"/>
    <div class="event-image-grid">
      {/* <!-- <a href="myphotos.htm/PicsArt_06-07-11.41.35.jpg"><img  src="myphotos.htm/PicsArt_06-07-11.41.35.jpg" alt="architecture"></a> --> */}
      <a href="1.jpg" class="event-image-grid-col-2 event-image-grid-row-2">
        <img src={one} alt="architecture" />
      </a>
      <a href="myphotos.htm/PicsArt_06-07-11.41.01.jpg">
        <img src={one} alt="architecture" />
      </a>

      <a href="myphotos.htm/PicsArt_06-07-11.41.01.jpg">
        <img src={one} alt="architecture" />
      </a>
      <a href="myphotos.htm/Flag-India.jpg">
        <img src={one} alt="architecture" />
      </a>
      <a href="myphotos.htm/Flag-India.jpg">
        <img src={one} alt="architecture" />
      </a>
      <a href="myphotos.htm/Flag-India.jpg">
        <img src={one} alt="architecture" />
      </a>
      <a href="myphotos.htm/Flag-India.jpg">
        <img src={one} alt="architecture" />
      </a>
      <a href="myphotos.htm/Flag-India.jpg" >
        <img src={one} alt="architecture" />
      </a>
      <a href="myphotos.htm/Flag-India.jpg" className="photo-seemore">
          <img src={one} alt="architecture" />
          <div className="seemore">
            <p>See More</p>
          </div>
      </a>
      </div>
      </>
  );
}

export default Photo;
