import React from "react";
import "./teacher.css";
import pic from "./asthamaam.jpeg";
import { FaFacebook } from "react-icons/fa";

const Teacher = () => {
  return (
    <>
      <div className="tcontainer">
        <div className="tbox1">
          <img className="teacher-pic" src={pic} alt="" />
          <div className="tbox1-content">
            <div className="tbox1-content-cont">
              <h3 className="ttitle">Ms. Astha Verma</h3>
              <span className="tpost">
                FIC
                <ul className="tsocial">
                  {/* <li>
                  <a
                    href="https://www.facebook.com/ShakesJeer/"
                    target="_blank"
                    className="fab c-fb"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="www.google.com">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="www.google.com">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li> */}
                  {/* <li><a href="www.google.com"><i className="fa fa-instagram"></i></a></li> */}
                  <li>
                    <a href="mailto:aastha178@gmail.com">
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
        <div className="tbox2">
          <p>
            {" "}
            The faculty in charge of ShakesJeer is Ms. Astha Verma from the
            management department. She is a dedicated and hardworking woman who
            strives to make us better every day. She aspires to be perfect and
            is always willing to lend a hand to those who require her guidance.
            As a part of the management department, she adds tremendous value to
            our society and guides us toward a brighter future.
          </p>
        </div>
      </div>
    </>
  );
};

export default Teacher;
