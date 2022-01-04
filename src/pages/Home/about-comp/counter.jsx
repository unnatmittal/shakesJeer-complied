import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
 
function Counter(props){
 return(
  <div className="land-outer-counter" >
     <div className = "land-counter"><CountUp start= {props.start} end={props.end} duration = {props.dura} redraw={true}>
         {({ countUpRef, start }) => (
             <VisibilitySensor onChange={start} delayedCall>
                 <span className = "dimag-kharab" ref={countUpRef} />
             </VisibilitySensor>
         )}
     </CountUp>
     </div>
     <div className ="counter-title">{props.title}</div>
 </div>
 );
 }
export default Counter;


