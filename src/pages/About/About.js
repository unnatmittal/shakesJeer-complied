import React from "react";
import "./style/about.css";
import "./style/bubble.css";
import logo from "./assets/logo.png";
import logo2 from "./assets/logo2.png";
import Teacher from "./teacher";
import Heading from "./heading";
import Abbout from "./new_about";

import HoneyBlock from "./HoneyBlock";
// import DepartMentBook from "./DepartMentBook";
import Card from "./Card";
// import Description from "./description";

import vivek from "./assets/members_photo/vivek.jpg";
import amol from "./assets/members_photo/amol.jpg";
import naman from "./assets/members_photo/naman.jpeg";
import shreyash from "./assets/members_photo/shreyash.jpeg";
import pragati from "./assets/members_photo/pragati.jpg";
import kumar from "./assets/members_photo/kumar.jpg";
import maanyta from "./assets/members_photo/maanyta.jpeg";
import aman from "./assets/members_photo/aman.jpeg";
import unnat from "./assets/members_photo/unnat.jpg";
import neha from "./assets/members_photo/neha.jpeg";
import divyanshu from "./assets/members_photo/divyanshu.jpeg";
import akshat from "./assets/members_photo/akshat.jpeg";
import adamya from "./assets/members_photo/adamya.jpeg";
import sarv from "./assets/members_photo/sarv.jpeg";
import ankita from "./assets/members_photo/ankita.jpeg";
import yash from "./assets/members_photo/yash.PNG";
import astitva from "./assets/members_photo/astitva.jpeg";
import satyam from "./assets/members_photo/satyam.jpg";
import rv from "./assets/members_photo/rv.jpg";

// import amol from '../assets/members_photo/amol.jpeg'

const About = () => {
  return (
    <div data-aos="fade-up" data-aos-offset="20" className="about-full">
      <Abbout />
      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        <Heading name="Faculty Incharge" />
        <Teacher />
        <Heading name="Departments" />
        <Card />
        <Heading name="Our Team" />
        <div className="honey">
          {/* <!--col div--> */}
          <div className="comb_0">
            <HoneyBlock name="Amol" position="President" image={amol} />
          </div>

          {/* <!--col div--> */}
          <div className="comb_1">
            <HoneyBlock
              name="Pragati"
              position="Director Of Operations"
              image={pragati}
            />
            <HoneyBlock name="Aman" position="President" image={aman} />
          </div>
          {/* <!--col div--> */}
          <div className="comb_2">
            <HoneyBlock
              name="Divyanshu"
              position="Vice-President"
              image={divyanshu}
            />
            <HoneyBlock name="Neha" position="Graphics Head" image={neha} />
            <HoneyBlock name="Unnat" position="Tech Head" image={unnat} />

            <HoneyBlock
              name="Maanyta"
              position="Editor in Chief"
              image={maanyta}
            />

            <HoneyBlock
              name="Shreyash"
              position="Vice-President"
              image={shreyash}
            />
          </div>
          {/* <!--col div--> */}
          <div className="comb_3">
            <HoneyBlock name="Yash" position="Open Mic Head" image={yash} />

            <HoneyBlock name="Raghavendra" position="Webd Head" image={rv} />
            <HoneyBlock
              name="Ankita"
              position="PR & EM Manager"
              image={ankita}
            />
            <HoneyBlock name="Satyam" position="Webd Head" image={satyam} />

            <HoneyBlock
              name="Adamya"
              position="Editor in Chief"
              image={adamya}
            />
            <HoneyBlock name="Sarv" position="Graphics Head" image={sarv} />
          </div>
          {/* <!--col div--> */}
          <div className="comb_2">
            <HoneyBlock
              name="Akshat"
              position="Logistic Head + Treasurer"
              image={akshat}
            />
            <HoneyBlock name="Vivek" position="Open Mic Head" image={vivek} />
            <HoneyBlock name="Naman" position="PR & EM Manager" image={naman} />
            <HoneyBlock
              name="Astitva"
              position="Editor in Chief"
              image={astitva}
            />
            <HoneyBlock
              name="Aditya"
              position="Advisory Board Head"
              image={kumar}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

/* <div id="section_logo" style={{ width: "100%" }}> */
/* <div className="drop"> */
/* <img src={logo2} alt="" /> */
/* style={{ width: "450px", height: "450px",backgroundColor:"red", borderRadius:"50%" }} */
/* </div> */
/* <div
          className="about-box"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="800"
        >
          <span></span>
          <p>
            We're a highly motivated team of talented undergrads of NSUT who are
            all commited to the cause : proliferate more involvement of students
            in the open mics as we provide a platform for the talent that is
            concealed within the students in abundance! The open mic covers
            Stand Ups, Raps and Poetry with a special limelight on the art of
            comedy and wit. ShakesJeer is not confined to the aforementioned
            performances as we believe in augmentation by inculcating new ideas
            and activities pertaining to open mics. ShakesJeer also specialises
            in serving palatable content to avid readers, curators or anyone
            who's just looking for a light hearted read as we release our
            magazine Shakesjournal annually, starting from the year 2021. We
            envision success and a stage full of opportunities not only for the
            students of NSUT but for any person, student or not, across the
            country with the right passion and the will to participate.
          </p>
        </div> */
/* </div> */

/* <div id="department" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
            <DepartMentBook
               department ="Tech Team"
               image={tech}
               teamMember="Unnat Mittal, Raghvendra Singh, Satyam Sharma, Lovkesh Patel, Saksham Saini, Abhishek Singhal, Karan Kumar, Himanshi, Yash Sharma, Vansh Jain, Hardik Chhabra, Devansh khandelwal, Aditya Bhalla   "
               head="Unnat Mittalt"
               description="Department of the Shakesjeer society enables and assists the people to explore in the field of web, UX, UI designing and a lot more. In this Tech- friendly world"
            />
            <DepartMentBook
               department="PR/EM Team"
               image={pr}
               teamMember="Manasvi Jain, Ankita, Kamesh Aggarwal, Naman Agarwal, Harsh Vardhan, Atishai Sharma, Hirdanshu Yadav, Shikhar Sharma, Aman Maan, Samyak Jain, Divyansh Tanwar, Chhavi Talwar, Utkarsh Gupta, Anannya Mishra, Aditya Bhalla    "
               head="Manasvi Jain & Naman Agarwal & Ankita"
               description="As a society whose motive is to give a platform for the creative minds of NSUT, it is essential to have a team that promotes the effortless functioning of society and provides a platform for its members."
            />
         </div>
         <div className="dept"> */
/* <DepartMentBook
               department="Graphic Design"
               image={gra}
               teamMember="Neha, Sarva Yadav, Harsh Vardhan, Harshal Arya,Aman Maan, Vedansh Arun, Chhavi Talwar, Aditya Bhalla, Aditya Gupta, Siddharth      "
               head="Neha & Sarva Yadav"
               description="Graphic Design is the most exciting and imaginative field. We have the opportunity to experiment with numerous softwares in order to appeal to various tastes and audiences."
            />
         </div> */
/* <div id="department" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
         <DepartMentBook
               department="Content Department"
               image={cont}
               teamMember="Adamya Garg, Mayank Yadav, Mohak, Preetish Bhakne, Shikhar Sharma, Chhavi Talwar, Aditya Gupta, Anannya Mishra, Siddharth, Kartikeya Gupta, Maanyta         "
               head="Maanyta & Adamya Garg & Astitva Rai "
               description="Content Department plays a vital part in the efficient functioning of Shakesjeer - whether be it captions and posts on Social Media handles, Invitations to artists and performers"
            />
            <DepartMentBook
               // style={{marginLeft:"200px"}}
               department="Performers"
               image={performer}
               teamMember="Yash Agarwal, Vivek Soni, Kumar Aditya, Deepanshu Yadav, Manav Grover, Anurag Juyal, Harshal Arya, Vidur Rajpal, Shivam Parashar    "
               head="Yash Agarwal"
               description="The Very Core of an open-mic Society is based on the fact that it's performers are able to put forward their views openly along with exceptional Wit and Satire, so that the audience"
            />
            </div> */

/* <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div> */
