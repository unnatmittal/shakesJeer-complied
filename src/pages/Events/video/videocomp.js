import React from "react";
import "./videocomp.css";
import Heading from "../photo/heading";
const Video = () => {
  return (
    <>
      <Heading name="Video Section" />
      <div className="event-video-container">
        <div class="event-video">
          <div class="event-video1">
            <iframe
              width="500"
              height="300"
              src="https://www.youtube.com/embed/YysW1PT7YOo"
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
              src="https://www.youtube.com/embed/l5Zo2BhuxGA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="event-video">
          <div class="event-video1">
            <iframe
              width="500"
              height="300"
              src="https://www.youtube.com/embed/ylW1WL-_Mtg"
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
            <div className="videosection-seemore">
              <p>
                <a href="https://www.youtube.com/channel/UCxjRIS5xt8nvBTT7naTxe7Q" target="_blank" rel="noopener noreferrer"> See More</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
