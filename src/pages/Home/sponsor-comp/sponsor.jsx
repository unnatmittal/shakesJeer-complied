import React from "react";

function Sponsor(props){
    return <div className="box">
    <img src={props.url} className="company-image" alt="company logo" height="60px" width="auto"></img>
    </div>
}

export default Sponsor;