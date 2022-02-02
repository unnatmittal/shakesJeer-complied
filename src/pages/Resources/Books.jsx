import React,{useState} from "react";
import "./Resources.css";
import "./sem.css";
import "./reso.css";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { StreamData } from "./StreamData";

const Books = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [stream, setStream] = useState(0);
  
    const showModal = (index) => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    console.log({props});
    const data= props.data;

  return (
    <>
      <div
        className="res_book-item small-12 medium-6 columns"
        // key={index}
        // data-color="#370d59"
      >
        <div className="res_bk-img">
          <div className="res_bk-wrapper">
            <div className="res_bk-book res_bk-bookdefault">
              <div className="res_bk-front">
                <div
                  className="res_bk-cover"
                  style={{ backgroundColor: `${data.color}` }}
                ></div>
              </div>
              <div
                className="res_bk-left"
                style={{ backgroundColor: `${data.color}` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="res_item-details">
          <h2 className="res_book-item_title">{data.course}</h2>
          <p className="res_book-item_content">{data.content}</p>
          <button
            className="res_button"
            onClick={() => {
              showModal(data.id);
            }}
            style={{ backgroundColor: data.color }}
            // onPointerOver={() => setHover(true)}
            // onPointerOut={() => setHover(false)}
          >
            {" "}
            Details{data.id}
          </button>
        </div>
        <Modal
          title={null}
          mask={false}
          footer={null}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          // maskStyle={{
          //   // background: "rgba(255, 255, 255, 0.3)",
          //   backdropFilter: "blur(4px)",
          // }}
          // bodyStyle={{
          //   width: "100%",
          //   height: "100%",
          //   marginTop: "100px",
          // }}
          style={{
            borderRadius: "5px",
          }}
        >
          <div className="res_button-effect">
            <h2>Choose Your Semester!</h2>
            <a
              className="res_effect res_effect-1 "
              href={StreamData[data.id].links.sem1}
              title="Sem-1"
              target="_blank"
            >
              1
            </a>
            <a
              className="res_effect res_effect-1"
              href={data.links.sem2}
              title="Sem-2"
              target="_blank"
            >
              2
            </a>
            <a
              className="res_effect res_effect-1 lock"
              href={data.links.sem3}
              title="Sem-3"
              target="_blank"
            >
              3
              <div className="res_lock">
                <i
                  class="fas fa-lock"
                  style={{
                    color: "grey",
                    transform: "scale(1)",
                    marginTop: "13px",
                  }}
                ></i>
              </div>
            </a>
            <a
              className="res_effect res_effect-1 lock"
              href={data.links.sem4}
              title="Sem-4"
              target="_blank"
            >
              4
              <div className="res_lock">
                <i
                  class="fas fa-lock"
                  style={{
                    color: "grey",
                    transform: "scale(1)",
                    marginTop: "13px",
                  }}
                ></i>
              </div>
            </a>
            <a
              className="res_effect res_effect-1 lock"
              href={data.links.sem5}
              title="Sem-5"
              target="_blank"
            >
              5
              <div className="res_lock">
                <i
                  class="fas fa-lock"
                  style={{
                    color: "grey",
                    transform: "scale(1)",
                    marginTop: "13px",
                  }}
                ></i>
              </div>
            </a>
            <a
              className="res_effect res_effect-1 lock"
              href={data.links.sem6}
              title="Sem-6"
              target="_blank"
            >
              6
              <div className="res_lock">
                <i
                  class="fas fa-lock"
                  style={{
                    color: "grey",
                    transform: "scale(1)",
                    marginTop: "13px",
                  }}
                ></i>
              </div>
            </a>
            <a
              className="res_effect res_effect-1 lock"
              href={data.links.sem7}
              title="Sem-7"
              target="_blank"
            >
              7
              <div className="res_lock">
                <i
                  class="fas fa-lock"
                  style={{
                    color: "grey",
                    transform: "scale(1)",
                    marginTop: "13px",
                  }}
                ></i>
              </div>
            </a>
            <a
              className="res_effect res_effect-1 lock"
              href={data.links.sem8}
              title="Sem-8"
              target="_blank"
            >
              8
              <div className="res_lock">
                <i
                  class="fas fa-lock"
                  style={{
                    color: "grey",
                    transform: "scale(1)",
                    marginTop: "13px",
                  }}
                ></i>
              </div>
            </a>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Books;
