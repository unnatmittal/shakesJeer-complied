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
      <div id="res_main-container" className="res_main-container res_nav-effect-1">
        <div
          className="res_main res_clearfix"
          style={{ filter: isModalVisible ? "blur(20px)" : "blur(0px)" }}
        >
          <div className="res_page-container">
            <div>
              <p className="res_resources-heading">University Resources</p>
              <p className="res_resources-details">
              Get stuck in your studies or don't have the proper material! No worries, we are right here to help you out. We came up with a one-stop solution for all your problems.
Resource Hub
Here you will find your subject Notes, Books and Lecture videos to assist your way out.

If you don't find your subject here, you can mail all those subject names to the mail address given on the website.
We will add all those subjects to the resource hub as soon as possible.
              </p>
            </div>
            <section id="res_book_list">
              <div className="res_grid-shuffle">
                <ul id="res_grid" className="res_column">
                  {StreamData.map((data, index) => {
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
                          <p className="res_book-item_content">{data.content}</p>
                          <button className="res_button" onClick={showModal}>
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
                          maskStyle={{
                            // background: "rgba(255, 255, 255, 0.3)",
                            backdropFilter: "blur(4px)",
                          }}
                          bodyStyle={{
                            width: "100%",
                            height: "100%",
                            marginTop: "100px",
                          }}
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
                            >
                              1
                            </a>
                            <a
                              className="res_effect res_effect-1 "
                              href={data.links.sem2}
                              title="Sem-2"
                            >
                              2
                            </a>
                            <a
                              className="res_effect res_effect-1 "
                              href={data.links.sem3}
                              title="Sem-3"
                            >
                              3
                            </a>
                            <a
                              className="res_effect res_effect-1 "
                              href={data.links.sem4}
                              title="Sem-4"
                            >
                              4
                            </a>
                            <a
                              className="res_effect res_effect-1 "
                              href={data.links.sem5}
                              title="Sem-5"
                            >
                              5
                            </a>
                            <a
                              className="res_effect res_effect-1 "
                              href={data.links.sem6}
                              title="Sem-6"
                            >
                              6
                            </a>
                            <a
                              className="res_effect res_effect-1 "
                              href={data.links.sem7}
                              title="Sem-7"
                            >
                              7
                            </a>
                            <a
                              className="res_effect res_effect-1 "
                              href={data.links.sem8}
                              title="Sem-8"
                            >
                              8
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
