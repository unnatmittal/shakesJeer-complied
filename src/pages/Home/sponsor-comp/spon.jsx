import React from "react";
import Sponsor from "./sponsor";
import micro from "./image/micro.png";
import "./spon.css";

function Spon(){
    return <div className="spon2">
    <h1 className = "sponhead">𝑺𝒑𝒐𝒏𝒔𝒐𝒓𝒔</h1>
    <div className = "flex-box">
    <Sponsor url = {micro}/>
    <Sponsor url = {micro}/>
    <Sponsor url = {micro}/>
    <Sponsor url = {micro}/>
    
</div>
    </div>
     
}

export default Spon;