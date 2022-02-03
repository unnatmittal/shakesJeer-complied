import "./Resources.css";
import "./sem.css";
import "./reso.css";
import React, { useState } from "react";

import "antd/dist/antd.css";
import { StreamData } from "./StreamData";
import Books from "./Books";

function Resources() {
  console.log(StreamData);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="res_app">
      <div
        id="res_main-container"
        className="res_main-container res_nav-effect-1"
        style={{ filter: isModalVisible ? "blur(20px)" : "blur(0px)" }}
      >
        <div className="res_main res_clearfix">
          <div className="res_page-container">
            <div>
              <p className="res_resources-heading">University Resources</p>
              <p className="res_resources-details">
                "ShakesJeer has volunteered to assist NSUT students by providing
                study materials and tools to aid students with their semester
                exams. This also helps us in forming a community of people who
                are willing to help and care for one another"
              </p>
            </div>
            <section id="res_book_list">
              <div className="res_grid-shuffle">
                <div id="res_grid" className="res_column">
                  {StreamData.map((data) => (
                    <Books index={data.index} data={data} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
