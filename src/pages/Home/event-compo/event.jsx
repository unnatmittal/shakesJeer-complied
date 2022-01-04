import React from "react";
import "./Event.css";
import Trans from "./Transhead";
import Trans2 from "./Transimg";
import Trans3 from "./Transpara";

function Event() {
  return (
    <div className="land-top">
      {/* <div className="set">
      <img className="vari" src={graphic} alt=""></img>
      </div> */}
      <div>
      <section className = "land-overlay">
        <div className="land-container">
          <Trans2/>
          <div className="land-right">
            <div className="land-content">
              <h1 id="heading10" ><Trans/></h1>
              <p><Trans3/></p>
              
              <a href="#null" className="btn">Click Me</a>
            </div>
          </div>
        </div>
      </section>
      </div>
      
    </div>
  );
}

export default Event;
