import React from "react";
import Sponsor from "./sponsor";
import micro from "./image/micro.png";
import Heading from "./heading";
import "./spon.css";

function Spon(){
    return <div className="spon2">
    {/* <h1 className = "land-sponhead">𝑺𝒑𝒐𝒏𝒔𝒐𝒓𝒔</h1> */}
    <Heading name="Sponsors" className="land-spon-heading"/>
    <div className = "land-flex-box">
    <Sponsor url = {micro}/>
    <Sponsor url = {micro}/>
    <Sponsor url = {micro}/>
    <Sponsor url = {micro}/>
    
</div>
    </div>
     
}

export default Spon;