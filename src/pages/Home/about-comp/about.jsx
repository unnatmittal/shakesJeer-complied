import React from "react";
import "./about.css";
import Counter from "./counter.jsx";
import pic from "./images/finalfinal.svg";

const Aboutsection = () => {
  return (
    <div className="containers">
      <div className="box2">
        <span class="text1 ">𝓢𝓱𝓪𝓴𝓮𝓼</span>
        <span className="text12">𝓙𝓮𝓮𝓻</span>
        <span class="line">𝑻𝒉𝒆 𝑶𝒑𝒆𝒏 𝑴𝒊𝒄 𝑺𝒐𝒄𝒊𝒆𝒕𝒚</span>
      </div>
      <div className="box3">
        <div className="box3first">
          <div className="box3firstcontent">
            ShakesJeer is a group of exceptionally driven students who are
            dedicated to our mission of giving opportunities and a platform for
            NSUT students to express themselves creatively through various open
            mics, allowing them to showcase their humor and wit.
          </div>
        </div>
        <div className="box3second">
          <img src={pic} alt="mic image" />
        </div>
      </div>
      <div class="animation-area">
        {/* <ul class="land-box-area">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul> */}
      </div>
      <div className="land-flex-box2">
        <Counter start="0" end="6" dura="2" title="Open Mic" />
        <Counter start="0" end="3" dura="2" title="Venue" />
        <Counter start="0" end="53" dura="2" title="Members" />
        {/* <Counter start="0" end="52" dura="2" title="Vlogs" /> */}
        <div className="land-counter-set">
          <Counter start="0" end="6" dura="2" title="Vlogs" />
        </div>
      </div>
    </div>
  );
};
export default Aboutsection;
