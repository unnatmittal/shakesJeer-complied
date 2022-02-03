import React from "react";
import "./about.css";

import Teacher from "./teacher";
import Abbout from "./new_about";
import HoneyBlock from "./HoneyBlock";
import Card from "./Card";
import Heading from "../../components/Heading/heading";

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
import yash from "./assets/members_photo/yash.jpeg";
import astitva from "./assets/members_photo/astitva.jpeg";
import satyam from "./assets/members_photo/satyam.jpg";
import rv from "./assets/members_photo/rv.jpg";

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
            <HoneyBlock name="Pragati" position="Director" image={pragati} />
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
              position="Content Head"
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

            <HoneyBlock name="Raghvendra" position="Tech Head" image={rv} />
            <HoneyBlock name="Ankita" position="PR Head" image={ankita} />
            <HoneyBlock name="Satyam" position="Tech Head" image={satyam} />

            <HoneyBlock name="Adamya" position="Content Head" image={adamya} />
            <HoneyBlock name="Sarv" position="Graphics Head" image={sarv} />
          </div>
          {/* <!--col div--> */}
          <div className="comb_2">
            <HoneyBlock name="Akshat" position="Treasurer" image={akshat} />
            <HoneyBlock name="Vivek" position="Open Mic Head" image={vivek} />
            <HoneyBlock name="Naman" position="PR Head" image={naman} />
            <HoneyBlock
              name="Astitva"
              position="Content Head"
              image={astitva}
            />
            <HoneyBlock name="Aditya" position="PR Head" image={kumar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
