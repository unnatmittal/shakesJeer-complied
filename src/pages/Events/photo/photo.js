import React from "react";
import { useState } from "react";
import { Modal } from "antd";
import "./photo.css";
import "antd/dist/antd.css";
import one from "./1.jpg";
import Heading from "../photo/heading.js"
const Photo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
    <Heading name="Glimpse of Past"/>
    <div class="event-image-grid">
      <a class="event-image-grid-col-2 event-image-grid-row-2">
        <img src={one} alt="architecture" onClick={showModal} class="event-image-grid-col-2 event-image-grid-row-2"/>
      </a>
      <img src={one} onClick={showModal} alt="architecture" />
      <img src={one} onClick={showModal} alt="architecture" />
      <img src={one} onClick={showModal} alt="architecture" />
      <img src={one} onClick={showModal} alt="architecture" />
      <img src={one} onClick={showModal} alt="architecture" />
      <img src={one} onClick={showModal} alt="architecture" />
      <img src={one} onClick={showModal} alt="architecture" />
      <div className="photo-seemore">
          <img src={one} alt="architecture" />
          <div className="seemore">
            <p>See More</p>
          </div>
        </div>
        {/* <Modal
          title={null}
          mask={false}
          footer={null}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          maskStyle={{
            backdropFilter: "blur(10px)",
          }}
          width={500}
          height={700}
          style={{
            borderRadius: "5px"
          }}
        >
          <div className="photo-modal">
            <img src={one} alt="architecture" width={300} />
          </div>
        </Modal> */}
    </div>
    </>
  );
}

export default Photo;
