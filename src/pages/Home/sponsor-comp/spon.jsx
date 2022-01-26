import React from "react";
import Sponsor from "./sponsor";
import micro from "./image/micro.png";
import cn from "./image/cn.png";
import fm from "./image/fm.png";
import Heading from "./heading";
import "./spon.css";

function Spon() {
  return (
    <div className="spon2">
      {/* <h1 className = "land-sponhead">𝑺𝒑𝒐𝒏𝒔𝒐𝒓𝒔</h1> */}
      <Heading name="Sponsors" />
      <div className="land-flex-box">
        <Sponsor url={cn} />
        <Sponsor url={fm} />
        <Sponsor url={micro} />
        <Sponsor url={micro} />
      </div>
    </div>
  );
}

export default Spon;
