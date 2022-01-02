import React from "react";
import "./heading.css"
const Heading = (props) => {
  return (
      <div className="event-headingcontainer">
          <div className="event-headingbox">
              {props.name}
          </div>
      </div>
  );
}

export default Heading;
