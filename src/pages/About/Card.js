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
                <h4>Niraj Tiwari & Harsh vardhan</h4>
                <p>
                 Samyak Jain, Pradyumn Bagry, Shaurya, Sahil Ahlawat, Abhay Mishra, Ishaan Chadha, Harsh Mishra, Yashwani, Shruti Arya, Taran Mahaja
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
                 Abhishek Singhal, Himanshi, Vansh Jain
                </h4>
                <p>
                 Devansh khandelwal, Shweta Ranjan Anand, Mehul Garg, Swati Sharma, Vaishali Aggarwal, Mayank Kumar Choudhary, Ayush Ahlawat, Anvesha Riya, Mohini Chauhan, Arth
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
                <h4>Aditya Gupta, Siddharth Majumdar, Harshal Arya</h4>
                <p>Niyati Nandita, Ayush Rathore, Jhanvi, Anuj omer, Harsh Jangid, Mayank Anant, Aryan Suman, Vatsal Srivastava, Ayush Sinha, Vaibhav Gupta, Mridul Singla, Aman Muhal, Ojas, Pratyush Singh</p>
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
                  Preetish Bhakne, Anannya Mishra
                </h4>
                <p>
                  Shikhar Sharma, Aditya Gupta, Mishthi Jain, Rahul Prasad, Siddharth, Kartikeya Gupta, Diya Singhal, Rajaryan Mishra, Akshi Singhal, Anvesha Riya, Ishita Harish, Kush Budhiraja, Naman chaturvedi, Nischay mahamana, Rashi Agarwal, Nishil, Rajaryan Mishra, Sakshi
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
                <h4>Deepanshu Yadav, Vidur</h4>
                <p>
                 Manav Grover, Harshal Arya Prasad, Shivam Kumar,Akshit Kumar,Preetish Bhakne,Vanshika, Ashwarya Agarwal, Jayaditya Agrawal, Prashant Kumar, Ishaan Chadha, Nipun, Naman Chaturvedi, Utkarsh Tripathy, Aryan Sinha, Ravneet Singh, Aditya Singh, Shilpy Choudhary, Gaurav Nagpal, Kush Budhiraja, Divyansh Tanwar, Rashi Agarwal, Tanmay Nagori, Nishil, Naman Chaturvedi, Nischay mahamana, Akshi Singhal, Vatsal Juneja, Shreya Versma, Adhaar Jain, Dhruv Gupta, Priyanshu Pannu. Anurag Juyal
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
