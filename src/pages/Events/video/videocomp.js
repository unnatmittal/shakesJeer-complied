import React from "react";
import "./videocomp.css";
import Heading from "../photo/heading"
const Video = () => {
  return (
    <>
      <Heading name="Video Section"/>
          <div className="event-video-container">
      {/* <div class="heading">
        <div class="headingSec">
          <h1>ShakesJeer</h1>
          <h2>
            Open Mic Series <code>2021</code>
          </h2>
        </div>
      </div> */}

      <div class="event-video">
        <div class="event-video1">
          <iframe
            width="500"
            height="300"
            src="https://www.youtube.com/embed/gVvtrOtpdjg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br />
        <div class="event-video1">
          <iframe
            width="500"
            height="300"
            src="https://www.youtube.com/embed/gVvtrOtpdjg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        </div>
      </div>
    </>
  );
}

export default Video;
