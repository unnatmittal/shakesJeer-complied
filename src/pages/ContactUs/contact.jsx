import React, { useState } from "react";
import "./contact.css";
import Lottie from "react-lottie-player";
import loading from "../../components/loading.json";
import emailjs from "emailjs-com";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
export default function Contact() {
  // const form = useRef();
  const [status, setStatus] = useState("");
  const [showLoad, setShowLoad] = useState(false);

  const sendEmail = (e) => {
    setShowLoad(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sjccwgk",
        "template_izp2wqd",
        e.target,
        "user_Ct89gE08IjzpjZ6myTyXm"
      )
      .then(
        (result) => {
          setInterval(() => {
            console.log(result.text);
            setShowLoad(false);
            setStatus("SUCCESS");
          }, 4000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      {showLoad ? (
        <Lottie
          loop
          animationData={loading}
          play
          style={{ width: "200px", height: "700px", margin: "0 auto" }}
        />
      ) : (
        <div className="c-section">
          <div className="c-container">
            <div className="c-contactinfo">
              <div>
                <h2>Contact Info</h2>
                <ul className="c-info">
                  <li>
                    <span>
                      <div className="fas">
                        <FaMapMarkerAlt />
                      </div>
                    </span>
                    <span>
                      Sector-3,Dwarka Road.
                      <br />
                      Pincode :- 110078.
                    </span>
                  </li>
                  <li>
                    <span>
                      <div className="fas">
                        <FaEnvelopeOpenText />
                      </div>
                    </span>
                    <span>shakesjeer.nsutd@gmail.com</span>
                  </li>
                  <li>
                    <span>
                      <div className="fas">
                        <FaPhoneAlt />
                      </div>
                    </span>
                    <span>+91 9315911429</span>
                  </li>
                </ul>
              </div>
              <ul className="c-sci">
                <li>
                  <a href="" target="_blank" className="fab c-twitter">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/ShakesJeer/"
                    target="_blank"
                    className="fab c-fb"
                  >
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="https://in.linkedin.com/company/shakesjeer"
                    target="_blank"
                    className="fab c-link"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCxjRIS5xt8nvBTT7naTxe7Q"
                    target="_blank"
                    className="fab c-pin"
                  >
                    <FaYoutube />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/shakesjeer.nsut/"
                    target="_blank"
                    className="fab c-insta"
                  >
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
            <div className="c-contactform">
              {status && renderAlert()}
              <h2>Send us a Message</h2>
              <form onSubmit={sendEmail}>
                <div className="c-formbox">
                  <div className="c-inputbox w50">
                    <input type="c-text" required name="first_name" />
                    <span>First Name</span>
                  </div>
                  <div className="c-inputbox w50">
                    <input type="c-text" required name="last_name" />
                    <span>Last Name</span>
                  </div>
                  <div class="c-inputbox w50">
                    <input type="c-email" required name="email" />
                    <span>Email Address </span>
                  </div>
                  <div class="c-inputbox w50">
                    <input type="c-text" required name="mobile" />
                    <span>Mobile No.</span>
                  </div>
                  <div class="c-inputbox w100">
                    <textarea
                      required
                      placeholder="Write your message here..."
                      name="message"
                    />
                    {/* <span></span> */}
                  </div>
                  <div className="c-inputbox w100 cbtn">
                    <input type="submit" value="Send" required />
                    {/* <span>First Name</span>  */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
const renderAlert = () => (
  <div className="c-received">
    <p className="c-receivepara">Message send successfully</p>
  </div>
);
