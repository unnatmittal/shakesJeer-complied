import React from "react";
import "./heading.css"
const Heading = (props) => {
  return (
      <div className="about-headingcontainer">
          <div className="about-headingbox">
              {props.name}
          </div>
      </div>
  );
}

export default Heading;
