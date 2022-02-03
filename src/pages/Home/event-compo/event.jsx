import React from "react";
import { Link } from "react-router-dom";
import "./Event.css";
import Trans from "./Transhead";
import Trans2 from "./Transimg";
import Trans3 from "./Transpara";

function Event() {
  return (
    <div className="land-top">
      <div>
        <section className="land-overlay">
          <div className="land-container">
            <Trans2 />
            <div className="land-right">
              <div className="land-content">
                <h1 id="heading10">
                  <Trans />
                </h1>
                <p>
                  <Trans3 />
                </p>

                <div className="land-button-set">
                  <Link to="/events" className="btn">
                    To Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Event;
