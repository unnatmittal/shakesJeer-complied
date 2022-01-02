import React from "react";
import "./left.css";
import panther from "./images/panther.png";

const contentLeft = [
  {
    title: "Border Gavaskar",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with",
    image:
      "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/Vd3bj2jPe/videoblocks-serious-businessman-analyzing-financial-graphs-on-laptop-screen-in-office-interior-happy-professional-looking-at-laptop-positive-business-man-working-on-laptop-computer-at-home-office_rtaxpt7zw_thumbnail-1080_01.png",
  },
  {
    title: "Riddles",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with",
    image:
      "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/Vd3bj2jPe/videoblocks-serious-businessman-analyzing-financial-graphs-on-laptop-screen-in-office-interior-happy-professional-looking-at-laptop-positive-business-man-working-on-laptop-computer-at-home-office_rtaxpt7zw_thumbnail-1080_01.png",
  },
];

function LeftComponent() {
  return (
    <div className="jr_cardLeft">
      <h2>Border Gavaskar </h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's stanwith the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with
      </p>
      <img src={panther} className="jr_logoLeft" alt="jr_logoLeft" />
    </div>
  );
}

export default LeftComponent;
