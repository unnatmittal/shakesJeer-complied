import React from "react";
import "./hover.css";
import "./articles";
import articles from "./articles";

function Hover() {
  return (
    <>
      <div className="jr_componentss">
        {articles.map((item) => (
          <div
            style={{
              backgroundColor: item.bgcolor,
              backgroundImage: item.bgimg,
            }}
            className="jr_card"
          >
            <img src={item.img} alt={item.title} />
            <div className="jr_card-body">
              <h6
                style={{
                  color: item.h_color,
                }}
              >
                {item.title}
              </h6>
              <p
                style={{
                  color: item.text_color,
                }}
              >
                {item.content}
              </p>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Hover;
