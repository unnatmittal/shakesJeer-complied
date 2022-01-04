import React from "react";
import "./heading.css"
const Heading = (props) => {
  return (
      <div className="land-headingcontainer">
          <div className="land-headingbox">
              {props.name}
          </div>
      </div>
  );
}

export default Heading;
