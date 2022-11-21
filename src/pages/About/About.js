import React from "react";
import "./about.css";

import Teacher from "./teacher";
import Abbout from "./new_about";
import HoneyBlock from "./HoneyBlock";
import Card from "./Card";
import Heading from "../../components/Heading/heading";
import maanyta from "./assets/members_photo/maanyta.jpeg";
import unnat from "./assets/members_photo/unnat.jpg";
import neha from "./assets/members_photo/neha.jpeg";
import akshat from "./assets/members_photo/akshat.jpeg";
import adamya from "./assets/members_photo/adamya.jpeg";
import sarv from "./assets/members_photo/sarv.jpeg";
import ankita from "./assets/members_photo/ankita.jpeg";
import yash from "./assets/members_photo/yash.jpeg";
import satyam from "./assets/members_photo/satyam.jpg";
import rv from "./assets/members_photo/rv.jpg";
import abhishek from "./assets/members_photo/abhishek.jpg";
import vansh from "./assets/members_photo/vansh.jpg";
import deepanshu from "./assets/members_photo/Deepanshu .jpg";
import vidur from "./assets/members_photo/Vidur.JPG";
import harsh from "./assets/members_photo/Harsh.jpg";
import niraj from "./assets/members_photo/Niraj.jpg";
import harshal from "./assets/members_photo/Harshal .jpeg";
import aditya from "./assets/members_photo/Aditya.jpg";
import preetish from "./assets/members_photo/Preetish .jpg";
import siddharth from "./assets/members_photo/siddharth .jpg";
import ananya from "./assets/members_photo/ananaya.jpg"

const About = () => {
  return (
    <div className="about-full">
      <Abbout />
      <div>
        <Heading name="Faculty Incharge" />
        <Teacher />
        <Heading name="Departments" />
        <Card />
        <Heading name="Our Team" />
        <div className="honey">
          {/* <!--col div--> */}
          <div className="comb_0">
            <HoneyBlock name="Neha" position="President" image={neha} />
          </div>

          {/* <!--col div--> */}
          <div className="comb_3">
            <HoneyBlock name="Satyam" position="Vice-President" image={satyam} />
            <HoneyBlock name="Unnat" position="General Sec." image={unnat} />
          </div>
          {/* <!--col div--> */}
          <div className="comb_2">
          <HoneyBlock
              name="Akshat"
              position="Administrative Dir."
              image={akshat}
            />
            <HoneyBlock
              name="Adamya"
              position="Joint Sec."
              image={adamya}
            />
            <HoneyBlock name="Maanyta" position="Managing Dir." image={maanyta} />
            <HoneyBlock name="Raghvendra" position="Tech Dir." image={rv} />

            <HoneyBlock
              name="Ankita"
              position="Marketing Dir."
              image={ankita}
            />

            <HoneyBlock
              name="Yash"
              position="Executive Dir."
              image={yash}
            />
            <HoneyBlock
              name="Sarv"
              position="Creative Designer"
              image={sarv}
            />
          </div>
          {/* <!--col div--> */}
          <div className="comb_3">
            <HoneyBlock name="Vidur" position="Performace Head" image={vidur} />

            <HoneyBlock name="Deepanshu" position="Performace Head" image={deepanshu} />
            <HoneyBlock name="Abhishek" position="Tech Head" image={abhishek} />
            <HoneyBlock name="Vansh" position="Tech Head" image={vansh} />

            <HoneyBlock name="Niraj" position="PR Head" image={niraj} />
            <HoneyBlock name="Harsh" position="PR Head" image={harsh} />
          </div>
          {/* <!--col div--> */}
          <div className="comb_2">
            <HoneyBlock name="Harshal" position="GD Head" image={harshal} />
            <HoneyBlock name="Siddharth" position="GD Head" image={siddharth} />
            <HoneyBlock name="Aditya" position="Chief Editor" image={aditya} />
            <HoneyBlock
              name="Ananya"
              position="Content Head"
              image={ananya}
            />
            <HoneyBlock name="Preetish" position="Content Head" image={preetish} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
