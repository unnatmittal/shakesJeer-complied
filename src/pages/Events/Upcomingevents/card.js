import React from "react";
import "./card.css";
import First from './images/event-1.png';
import Second from './images/revent.png';

// const card = ({ menuData }) => {
//   return (
//     <div className="event-container">
//       {menuData.map((curElem) => {
//         return (
//           <div className="event-card1" style={{ backgroundColor: "#fdc912;" }}>
//             <div className="event-Maintitle">
//               <table>
//                 <tr>
//                   <td>
//                     <div className="month">{curElem.month}</div>
//                     <div className="month-date-devider"></div>
//                     <div className="date">{curElem.date}</div>
//                   </td>
//                   <td className="event-title">
//                     <img
//                       src={curElem.imgUrl}
//                       alt=""
//                       className="event-thumbnail"
//                     />
//                   </td>
//                 </tr>
//               </table>
//             </div>
//             <div className="event-title">
//               <h3>{curElem.title}</h3>
//             </div>
//             <div className="event-id">
//               <div className="event-location">{curElem.venue}</div>
//               <div className="event-time"> {curElem.time}</div>
//             </div>
//             <div className="event-quote">{curElem.quote}</div>
//             <div className="event-form">
//               <a href="www.google.com" className="event-formlink">
//                 Book Your Tickets
//               </a>
//             </div>
//             {/* <div className="eventsection-seemore">
//               <p>
//                 <div target="_blank" rel="noopener noreferrer">
//                   {" "}
//                   <i
//                     class="fas fa-lock"
//                     style={{
//                       color: "grey",
//                       transform: "scale(2)",
//                     }}
//                   ></i>
//                 </div>
//               </p>
//             </div> */}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

function card(){
  return(
    <div>
      <div className="event-container">
          <div className="event-card1" style={{ backgroundColor: "#fdc912;" }}>
            <div className="event-Maintitle">
              <table>
                <tr>
                  <td>
                    <div className="month">feb</div>
                    <div className="month-date-devider"></div>
                    <div className="date">25</div>
                  </td>
                  <td className="event-title">
                    <img
                      src={Second}
                      alt=""
                      className="event-thumbnail"
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div className="event-title">
              <h3>COMEDY KNIGHT</h3>
            </div>
            <div className="event-id">
              <div className="event-location">Main Auditorium</div>
              <div className="event-time"> 6:30 pm onwards</div>
            </div>
            <div className="event-quote"></div>
            {/* <div className="event-form">
              <a href="www.google.com" className="event-formlink">
                Register Now
              </a>
            </div> */}
            <div className="event-button">
              <a href = "https://forms.gle/XhinfgKWkkc3dhH66"className="event-button-a" target="_blank">Register Now</a>
            </div>
            {/* <div className="eventsection-seemore">
              <p>
                <div target="_blank" rel="noopener noreferrer">
                  {" "}
                  <i
                    class="fas fa-lock"
                    style={{
                      color: "grey",
                      transform: "scale(2)",
                    }}
                  ></i>
                </div>
              </p>
            </div> */}
          </div>
          <div className="event-card1" style={{ backgroundColor: "#fdc912;" }}>
            <div className="event-Maintitle">
              <table>
                <tr>
                  <td>
                    <div className="month">feb</div>
                    <div className="month-date-devider"></div>
                    <div className="date">xx</div>
                  </td>
                  <td className="event-title">
                    <img
                      src={First}
                      alt=""
                      className="event-thumbnail"
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div className="event-title">
              <h3>COMING SOON!</h3>
            </div>
            <div className="event-id">
              <div className="event-location">XX Cafe</div>
              <div className="event-time"> At 3:00pm</div>
            </div>
            <div className="event-quote"></div>
            {/* <div className="event-form">
              <a href="# " className="event-formlink">
                Book Your Tickets
              </a>
            </div> */}
            <div className="event-button">
              <a href = "# "className="event-button-a">Register Now</a>
            </div>
            <div className="eventsection-seemore">
              <p>
                <div target="_blank" rel="noopener noreferrer">
                  {" "}
                  <i
                    class="fas fa-lock"
                    style={{
                      color: "grey",
                      transform: "scale(2)",
                    }}
                  ></i>
                </div>
              </p>
            </div>
          </div>
    </div>
    </div>
  );
}

export default card;
