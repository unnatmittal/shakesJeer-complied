import React from "react";
import "./new_about.css";
import top from "./assets/top.gif";

const Abbout = () => {
  return (
    <div className="ab-container">
      <div className="ab-image">
        <img src={top} alt=" " />
      </div>
      {/* <div className="ab-heading">ShakesJeer</div> */}
      <div className="ab-heading ab-quote">
        Stand-up comedy is mine: it's my entity; it's my brand; I own it. I do
        it when I want to do it. <br />- Kevin Hart
      </div>
      <div className="ab-box">
        <div className="ab-box1">
          We're a highly motivated team of talented undergrads of NSUT who are
          all commited to the cause : proliferate more involvement of students
          in the open mics as we provide a platform for the talent that is
          concealed within the students in abundance! The open mic covers Stand
          Ups, Raps and Poetry with a special limelight on the art of comedy and
          wit.
        </div>
        <div className="ab-box1">
          ShakesJeer also specialises in serving palatable content to avid
          readers, curators or anyone who's just looking for a light hearted
          read as we release our magazine Shakesjournal annually, starting from
          the year 2021. We envision a stage full of opportunities not only for
          the students of NSUT but for any person, student or not, across the
          country with the right passion and the will to participate.
        </div>
      </div>
    </div>
  );
};

export default Abbout;

// import React from 'react'
// import './new_about.css'
// // import pic from '../assets/himanshi.jpg'
// const Abbout = () => {
//     return (
//         <div className='ab-container'>
//             <div className="ab-image">
//             </div>
//             <div className="ab-heading">
//                 ShakesJeer
//             </div>
//             <div className="ab-heading ab-quote">
//             Stand-up comedy is mine: it's my entity; it's my brand; I own it. I do it when I want to do it.
//             - Kevin Hart
//             </div>
//             <div className="ab-box">
//                 <div className="ab-box1">
//                     We're a highly motivated team of talented undergrads of NSUT who are
//                     all commited to the cause : proliferate more involvement of students
//                     in the open mics as we provide a platform for the talent that is
//                     concealed within the students in abundance! The open mic covers
//                     Stand Ups, Raps and Poetry with a special limelight on the art of
//                     comedy and wit.
//                 </div>
//                 <div className="ab-box1">
//                     ShakesJeer also specialises
//                     in serving palatable content to avid readers, curators or anyone
//                     who's just looking for a light hearted read as we release our
//                     magazine Shakesjournal annually, starting from the year 2021. We
//                     envision a stage full of opportunities not only for the
//                     students of NSUT but for any person, student or not, across the
//                     country with the right passion and the will to participate.
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Abbout
