import React from "react";
import "./photo.css";
import one from "./1.jpg";

const Photo = () => {
  return (
    <div class="image-grid">
      {/* <!-- <a href="myphotos.htm/PicsArt_06-07-11.41.35.jpg"><img  src="myphotos.htm/PicsArt_06-07-11.41.35.jpg" alt="architecture"></a> --> */}
      <a href="1.jpg" class="image-grid-col-2 image-grid-row-2">
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
    </div>
  );
}

export default Photo;
