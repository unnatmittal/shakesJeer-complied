import React from "react";
import Sponsor from "./sponsor";
// import micro from "./image/micro.png";
import cn from "./image/cn.png";
import fm from "./image/fm.png";
import pp from "./image/pp.png";
import ved from "./image/ved.jpg";
import "./spon.css";
import Heading from "../../../components/Heading/heading.js";

function Spon() {
  return (
    <div className="spon2">
      {/* <h1 className = "land-sponhead">πΊπππππππ</h1> */}
      <Heading name="Sponsors" />
      <div className="land-flex-box">
        <Sponsor url={cn} />
        <Sponsor url={fm} />
        <Sponsor url={pp} />
        <Sponsor url={ved} />
      </div>
    </div>
  );
}

export default Spon;
