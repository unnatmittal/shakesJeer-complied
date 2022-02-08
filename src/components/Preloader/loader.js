import "./loader.css";
import React from "react";
import logo from "./lightblue_darkbg.png";

var links = [
  "https://c.tenor.com/jYf-GX3yMy0AAAAM/shahid-kapoor-jabba.gif",
  "https://c.tenor.com/zF0k07v-v_kAAAAC/vasooli-golmaal3.gif",
  "https://c.tenor.com/iSedznQcBR4AAAAC/hindustani-bhau-ruko-zara.gif",
  "https://c.tenor.com/mwUeIHAOF-AAAAAC/kejriwal-toh-kar-na.gif",
  "https://c.tenor.com/trMAOZq1aJsAAAAM/haan-ye-karlo-pehle.gif",
  "https://c.tenor.com/dNDdOSIa434AAAAC/aisa-thodi-hota-hai-daya-bhabhi.gif",
  "https://c.tenor.com/ekUcLfSGNAQAAAAM/abhi-maza-aayega-na-bhidu-johnny-lever.gif",
  "https://c.tenor.com/XRaqIsw6SgcAAAAd/rahul-gandhi-khatam.gif",
  "https://c.tenor.com/oglfsM16Wj8AAAAC/wait-jetha.gif"
];

// var links = [
//   "Mai kya karu job chor du...",
//   "Jaa maloom hai apne baap ko mat sikha....",
//   "https://c.tenor.com/iSedznQcBR4AAAAC/hindustani-bhau-ruko-zara.gif",
//   "https://c.tenor.com/mwUeIHAOF-AAAAAC/kejriwal-toh-kar-na.gif",
//   "https://c.tenor.com/trMAOZq1aJsAAAAM/haan-ye-karlo-pehle.gif",
//   "https://c.tenor.com/dNDdOSIa434AAAAC/aisa-thodi-hota-hai-daya-bhabhi.gif",
//   "https://c.tenor.com/ekUcLfSGNAQAAAAM/abhi-maza-aayega-na-bhidu-johnny-lever.gif",
//   "https://c.tenor.com/XRaqIsw6SgcAAAAd/rahul-gandhi-khatam.gif",
//   "https://c.tenor.com/oglfsM16Wj8AAAAC/wait-jetha.gif"
// ];


var comments = [
    "loader hai yeh",   
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
]

var random = Math.floor(Math.random() * 9);

function Loader() {
  return (
      
      <div className="loader">
      <div className="App">
      <div className="loader-img">
      <img src={logo} alt=""></img>
      </div>
      <div className="loader-head">
        <p>ShakesJeer Presenting...</p>
      </div>
      
      
      <div className="loader-loading">
        <div class="loading-progress">
          <div class="loading-color"></div>
        </div>
      </div>
    </div>
    
      </div>
    
  );
}

export default Loader;

// import React from 'react';
// import './loader.css';

// function Loader(){
//     return (
//         <div>
//         <div className="loaderBackground loaderbackground0"></div>
//         <div className="loaderBackground loaderbackground1"></div>
//         <div className="loaderBackground loaderbackground2"></div>
//         <div className="loaderBackground loaderbackground3"></div>
//         <div className="loaderBackground loaderbackground4"></div>
//         <div className="loaderBackground loaderbackground5"></div>
//         <div className="loaderBackground loaderbackground6"></div>
//         <div className="loaderBackground loaderbackground7"></div>
//         <div className="loadercriterion">
//           <div className="loadertext loadertext0">SH </div>
//           <div className="loadertext loadertext1">AK</div>
//           <div className="loadertext loadertext2">ES</div>
//           <div className="loadertext loadertext3">JE</div>
//           <div className="loadertext loadertext4">ER</div>
//           <div className="loadertext loadertext5">NS</div>
//           <div className="loadertext loadertext6">UT</div>
//           <div className="loadertext loadertext7">:)</div>
//           <div className="frame frame0"></div>
//           <div className="frame frame1"></div>
//           <div className="frame frame2"></div>
//           <div className="frame frame3"></div>
//           <div className="frame frame4"></div>
//           <div className="frame frame5"></div>
//           <div className="frame frame6"></div>
//           <div className="frame frame7"></div>
//           <div className="loaderparticle loaderparticle00"></div>
//           <div className="loaderparticle loaderparticle01"></div>
//           <div className="loaderparticle loaderparticle02"></div>
//           <div className="loaderparticle loaderparticle03"></div>
//           <div className="loaderparticle loaderparticle04"></div>
//           <div className="loaderparticle loaderparticle05"></div>
//           <div className="loaderparticle loaderparticle06"></div>
//           <div className="loaderparticle loaderparticle07"></div>
//           <div className="loaderparticle loaderparticle08"></div>
//           <div className="loaderparticle loaderparticle09"></div>
//           <div className="loaderparticle loaderparticle010"></div>
//           <div className="loaderparticle loaderparticle011"></div>
//           <div className="loaderparticle loaderparticle10"></div>
//           <div className="loaderparticle loaderparticle11"></div>
//           <div className="loaderparticle loaderparticle12"></div>
//           <div className="loaderparticle loaderparticle13"></div>
//           <div className="loaderparticle loaderparticle14"></div>
//           <div className="loaderparticle loaderparticle15"></div>
//           <div className="loaderparticle loaderparticle16"></div>
//           <div className="loaderparticle loaderparticle17"></div>
//           <div className="loaderparticle loaderparticle18"></div>
//           <div className="loaderparticle loaderparticle19"></div>
//           <div className="loaderparticle loaderparticle110"></div>
//           <div className="loaderparticle loaderparticle111"></div>
//           <div className="loaderparticle loaderparticle20"></div>
//           <div className="loaderparticle loaderparticle21"></div>
//           <div className="loaderparticle loaderparticle22"></div>
//           <div className="loaderparticle loaderparticle23"></div>
//           <div className="loaderparticle loaderparticle24"></div>
//           <div className="loaderparticle loaderparticle25"></div>
//           <div className="loaderparticle loaderparticle26"></div>
//           <div className="loaderparticle loaderparticle27"></div>
//           <div className="loaderparticle loaderparticle28"></div>
//           <div className="loaderparticle loaderparticle29"></div>
//           <div className="loaderparticle loaderparticle210"></div>
//           <div className="loaderparticle loaderparticle211"></div>
//           <div className="loaderparticle loaderparticle30"></div>
//           <div className="loaderparticle loaderparticle31"></div>
//           <div className="loaderparticle loaderparticle32"></div>
//           <div className="loaderparticle loaderparticle33"></div>
//           <div className="loaderparticle loaderparticle34"></div>
//           <div className="loaderparticle loaderparticle35"></div>
//           <div className="loaderparticle loaderparticle36"></div>
//           <div className="loaderparticle loaderparticle37"></div>
//           <div className="loaderparticle loaderparticle38"></div>
//           <div className="loaderparticle loaderparticle39"></div>
//           <div className="loaderparticle loaderparticle310"></div>
//           <div className="loaderparticle loaderparticle311"></div>
//           <div className="loaderparticle loaderparticle40"></div>
//           <div className="loaderparticle loaderparticle41"></div>
//           <div className="loaderparticle loaderparticle42"></div>
//           <div className="loaderparticle loaderparticle43"></div>
//           <div className="loaderparticle loaderparticle44"></div>
//           <div className="loaderparticle loaderparticle45"></div>
//           <div className="loaderparticle loaderparticle46"></div>
//           <div className="loaderparticle loaderparticle47"></div>
//           <div className="loaderparticle loaderparticle48"></div>
//           <div className="loaderparticle loaderparticle49"></div>
//           <div className="loaderparticle loaderparticle410"></div>
//           <div className="loaderparticle loaderparticle411"></div>
//           <div className="loaderparticle loaderparticle50"></div>
//           <div className="loaderparticle loaderparticle51"></div>
//           <div className="loaderparticle loaderparticle52"></div>
//           <div className="loaderparticle loaderparticle53"></div>
//           <div className="loaderparticle loaderparticle54"></div>
//           <div className="loaderparticle loaderparticle55"></div>
//           <div className="loaderparticle loaderparticle56"></div>
//           <div className="loaderparticle loaderparticle57"></div>
//           <div className="loaderparticle loaderparticle58"></div>
//           <div className="loaderparticle loaderparticle59"></div>
//           <div className="loaderparticle loaderparticle510"></div>
//           <div className="loaderparticle loaderparticle511"></div>
//           <div className="loaderparticle loaderparticle60"></div>
//           <div className="loaderparticle loaderparticle61"></div>
//           <div className="loaderparticle loaderparticle62"></div>
//           <div className="loaderparticle loaderparticle63"></div>
//           <div className="loaderparticle loaderparticle64"></div>
//           <div className="loaderparticle loaderparticle65"></div>
//           <div className="loaderparticle loaderparticle66"></div>
//           <div className="loaderparticle loaderparticle67"></div>
//           <div className="loaderparticle loaderparticle68"></div>
//           <div className="loaderparticle loaderparticle69"></div>
//           <div className="loaderparticle loaderparticle610"></div>
//           <div className="loaderparticle loaderparticle611"></div>
//           <div className="loaderparticle loaderparticle70"></div>
//           <div className="loaderparticle loaderparticle71"></div>
//           <div className="loaderparticle loaderparticle72"></div>
//           <div className="loaderparticle loaderparticle73"></div>
//           <div className="loaderparticle loaderparticle74"></div>
//           <div className="loaderparticle loaderparticle75"></div>
//           <div className="loaderparticle loaderparticle76"></div>
//           <div className="loaderparticle loaderparticle77"></div>
//           <div className="loaderparticle loaderparticle78"></div>
//           <div className="loaderparticle loaderparticle79"></div>
//           <div className="loaderparticle loaderparticle710"></div>
//           <div className="loaderparticle loaderparticle711"></div>
//           <div className="loaderparticle loaderparticle81"></div>
//           <div className="loaderparticle loaderparticle82"></div>
//           <div className="loaderparticle loaderparticle83"></div>
//           <div className="loaderparticle loaderparticle84"></div>
//           <div className="loaderparticle loaderparticle85"></div>
//           <div className="loaderparticle loaderparticle86"></div>
//           <div className="loaderparticle loaderparticle87"></div>
//           <div className="loaderparticle loaderparticle87"></div>
//           <div className="loaderparticle loaderparticle89"></div>
//           <div className="loaderparticle loaderparticle810"></div>
//           <div className="loaderparticle loaderparticle811"></div>
//         </div>
//         </div>
//     );
// }

// export default Loader;