import React from "react";

const Videocard = ({ menuData }) => {
  return (
    <div className="Video">
      <div className="containerVideo">
        {menuData.map((curElem) => {
          return (
            <div className="boxVideo" key={curElem.id}>
              <div className="imgBox">
                <img src={curElem.imgUrl} alt="" />
              </div>
              <div className="contentBox">
                <div className="content">
                  <h2>{curElem.head}</h2>
                  <p>{curElem.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videocard;
