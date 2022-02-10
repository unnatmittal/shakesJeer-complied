import React from "react";
import tech from "./assets/tech.gif";
import gra from "./assets/graph.gif";
import pr from "./assets/pr.gif";
import performer from "./assets/perf.gif";
import cont from "./assets/cont.gif";
import tres from "./assets/tresure.gif";
import "./card.css";

function Card() {
  return (
    <div className="main1">
      <ul className="list-members">
        <li className="member">
          <div className="member-image">
            <img src={pr} alt=".." />
          </div>
          <div className="member-info">
            <div className="before-info">
              <h3>PR/EM Department</h3>
              <h6>
                <span className="about-hideit">
                  {" "}
                  As a society whose motive is to give a platform for the
                  creative minds of NSUT, it is essential to have a{" "}
                </span>
                <span className="about-firstletter">t</span>eam that promotes
                the effortless functioning of society and provides a platform
                for its members.
              </h6>
              <div className="after-info">
                {/* <h2>Team Members</h2> */}
                <h4>Ankita & Naman Aggarwal</h4>
                <p>
                  Harsh Vardhan, Shikhar Sharma, Samyak Jain, Divyansh Tanwar,
                  Utkarsh Gupta
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="member">
          <div className="member-image">
            <img src={tech} alt=".." />
          </div>
          <div className="member-info">
            <div className="before-info">
              <h3>Tech Department</h3>
              <h6>
                <span className="about-hideit">
                  Department of the Shakesjeer society
                </span>{" "}
                <span className="about-firstletter">e</span>nables and assists
                the people to explore in the field of web, UX, UI designing and
                a lot more<span className="about-showit">.</span>
                <span className="about-hideit">
                  {" "}
                  in this Tech- friendly world.
                </span>
              </h6>
              <div className="after-info">
                {/* <h2>Team Members</h2> */}
                <h4 className="about-techhead">
                  Unnat Mittal , Raghvendra & Satyam
                </h4>
                <p>
                  Lovkesh Patel, Saksham Saini, Abhishek Singhal, Karan Kumar,
                  Himanshi, Vansh Jain, Devansh
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="member">
          <div className="member-image">
            <img src={gra} alt=".." />
          </div>
          <div className="member-info">
            <div className="before-info">
              <h3>
                Graphic <span className="about-hideit">Department</span>
                <span className="about-showit">Dept.</span>
              </h3>
              <h6>
                Graphic Design is the most exciting and imaginative field. We
                have the opportunity to experiment with numerous softwares
                <span className="about-showit">.</span>
                <span className="about-hideit">
                  in order to appeal to various tastes and audiences.
                </span>
              </h6>
              <div className="after-info">
                {/* <h2>Team Members</h2> */}
                <h4>Neha Singh & Sarv Yadav</h4>
                <p>Aditya Gupta, Siddharth , Harshal Arya, Harsh Vardhan</p>
              </div>
            </div>
          </div>
        </li>
        <li className="member">
          <div className="member-image">
            <img src={cont} alt=".." />
          </div>
          <div className="member-info">
            <div className="before-info">
              <h3>
                Content <span className="about-hideit">Department</span>
                <span className="about-showit">Dept.</span>
              </h3>
              <h6>
                <span className="about-hideit">
                  {" "}
                  Content Department plays a vital part in the efficient
                </span>
                <span className="about-firstletter"> f</span>unctioning of
                Shakesjeer - whether be it captions and posts on Social Media
                handles, Invitations to artists and performers.
              </h6>
              <div className="after-info">
                {/* <h2>Team Members</h2> */}
                <h4 className="about-techhead">
                  Maanyta, Adamya Garg & Astitva Rai
                </h4>
                <p>
                  Preetish Bhakne, Shikhar Sharma, Aditya Gupta, Anannya Mishra,
                  Kartikeya Gupta, Mishthi Jain
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="member">
          <div className="member-image">
            <img src={performer} alt=".." />
          </div>
          <div className="member-info">
            <div className="before-info">
              <h3>
                Performers <span className="about-hideit">Department</span>
                <span className="about-showit">Dept.</span>
              </h3>
              <h6>
                The Very Core of an open-mic Society is based on the fact that
                it's performers are able to put forward their views openly
                <span className="about-showit">.</span>
                <span className="about-hideit">
                  {" "}
                  along with exceptional Wit and Satire.
                </span>
              </h6>
              <div className="after-info">
                {/* <h2>Team Members</h2> */}
                <h4>Yash Agarwal</h4>
                <p>
                  Deepanshu Yadav, Manav Grover, Harshal Arya, Vidur Rajpal,
                  Shivam Parashar, Priyanshu Pannu
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="member">
          <div className="member-image">
            <img src={tres} alt=".." />
          </div>
          <div className="member-info">
            <div className="before-info">
              <h3 class="about-treasure">Management</h3>
              <h6>
                The backbone of the society which helps to run society smoothly.
              </h6>
              <div className="after-info">
                {/* <h2>Team Members</h2> */}
                <h4>Akshat Gupta, Kumar Aditya</h4>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Card;
