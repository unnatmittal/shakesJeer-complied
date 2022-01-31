import "./Resources.css";
import "./sem.css";
import "./reso.css";
import React, { useState } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { StreamData } from "./StreamData";

function Resources() {
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
    <div className="res_app">
      <div
        id="res_main-container"
        className="res_main-container res_nav-effect-1"
        style={{ filter: isModalVisible ? "blur(20px)" : "blur(0px)" }}
      >
        <div className="res_main res_clearfix">
          <div className="res_page-container">
            <div>
              <p className="res_resources-heading">University Resources</p>
              <p className="res_resources-details">
                "ShakesJeer has volunteered to assist NSUT students by providing
                study materials and tools to aid students with their semester
                exams. This also helps us in forming a community of people who
                are willing to help and care for one another"
              </p>
            </div>
            <section id="res_book_list">
              <div className="res_grid-shuffle">
                <ul id="res_grid" className="res_column">
                  {StreamData.map((data, index) => {
                    // const buttonStyle = ({ hover }) => ({
                    //   // borderRadius: '6px',
                    //   // border: '1px solid',
                    //   // borderColor: hover ? 'black' : 'red',
                    //   backgroundColor: !hover ? data.color : "black",
                    // });
                    return (
                      <li
                        className="res_book-item small-12 medium-6 columns"
                        key={index}
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
                          <p className="res_book-item_content">
                            {data.content}
                          </p>
                          <button
                            className="res_button"
                            onClick={showModal}
                            style={{ backgroundColor: data.color }}
                            // onPointerOver={() => setHover(true)}
                            // onPointerOut={() => setHover(false)}
                          >
                            {" "}
                            Details
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
                              href={data.links.sem1}
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
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
