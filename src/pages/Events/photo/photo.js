import React,{useState} from "react";
import "./photo.css";
import p1 from "./1.jpeg";
import p2 from "./2.jpeg";
import p3 from "./3.jpeg";
import p4 from "./4.jpeg";
import p5 from "./5.jpeg";
import p6 from "./6.jpeg";
import p7 from "./7.jpeg";
import p8 from "./8.jpeg";
import p11 from "./11.jpeg";
import Heading from "../../../components/Heading/heading";

const Photo = () => {
  const [Imagetoshow, setImage] = useState("");
  function ModalOpen(image) {
    setImage(image);
    setModalopen(true);
  }
  function ModalClose() {
    setImage("");
    setModalopen(false);
  }
  const [isModalopen, setModalopen] = useState(false);
  return (
    <>
      <Heading name="Our Gallery" />
      <div class="event-image-grid">
          <img src={p11} alt="architecture" className="event-image-grid-col-2 event-image-grid-row-2" onClick={() => { ModalOpen(p11) }}
          />
        <img src={p1} alt="architecture" onClick={()=>{ModalOpen(p1)}} />
        <img src={p2} alt="architecture" onClick={()=>{ModalOpen(p2)}} />
        <img src={p5} alt="architecture" onClick={()=>{ModalOpen(p5)}}/>
        <img src={p4} alt="architecture" onClick={()=>{ModalOpen(p4)}}/>
        <img src={p3} alt="architecture" onClick={()=>{ModalOpen(p3)}}/>
        <img src={p8} alt="architecture" onClick={()=>{ModalOpen(p8)}}/>
        <img src={p6} alt="architecture" onClick={()=>{ModalOpen(p6)}}/>
        <div className="photo-seemore">
          <img src={p7} alt="architecture" />
          <a href="https://www.instagram.com/shakesjeer.nsut/" >
            <div className="seemore">
              <p>See More</p>
            </div>
          </a>
        </div>
      </div>
      <div class={isModalopen ? "modal appear" : "modal"}>
        <div className="ModalSection">
          <div className="modalContent">
            <span className="close"><i className="fas fa-times" onClick={ModalClose}></i></span>
            <img src={Imagetoshow} alt = "Photo of modal"className="modalImg"/>
          </div>
        </div>
    </div>
    </>
  );
};

export default Photo;
