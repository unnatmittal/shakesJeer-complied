import React from 'react'
import './ContactUs.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaEnvelopeOpenText} from 'react-icons/fa'
import {FaPhoneAlt} from 'react-icons/fa'
import {FaMapMarkerAlt} from 'react-icons/fa'
const ContactUs = () => {
    return (
            <div className='c-section'>
                <div className="c-container">
                    <div className="c-contactinfo">
                        <div>
                            <h2>Contact Info</h2>
                            <ul className="c-info">
                                <li >
                                    <span >
                                        <div className="fas"><FaMapMarkerAlt/></div>
                                    </span>
                                    <span >
                                        Lorem ipsum dolor sit amet.<br />
                                        Lorem, ipsum.
                                    </span>
                                </li>
                                <li >
                                    <span>
                                        <div className="fas"><FaEnvelopeOpenText/></div>
                                    </span>
                                    <span >
                                        lorem@gmail.com
                                    </span>
                                </li>
                                <li >
                                    <span >
                                        <div className="fas"><FaPhoneAlt/></div>
                                    </span>
                                    <span >
                                        254-684-329
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <ul className="c-sci">
                            <li ><a href="" target="_blank" className="fab c-twitter"><FaTwitter/></a></li>
                            <li ><a href="https://www.facebook.com/ShakesJeer/"target="_blank" className="fab c-fb"><FaFacebookSquare/></a></li>
                            <li ><a href="https://in.linkedin.com/company/shakesjeer"target="_blank" className="fab c-link"><FaLinkedin/></a></li>
                            <li ><a href="https://www.youtube.com/channel/UCxjRIS5xt8nvBTT7naTxe7Q"target="_blank" className="fab c-pin"><FaYoutube/></a></li>
                            <li ><a href="https://www.instagram.com/shakesjeer.nsut/"target="_blank" className="fab c-insta"><FaInstagram/></a></li>
                        </ul>
                    </div>
                    <div className="c-contactform">
                        <h2>Send a Message</h2>
                        <div className="c-formbox">
                            <div className="c-inputbox w50">
                                <input type="c-text" required></input>
                                <span>First Name</span>
                            </div>
                            <div className="c-inputbox w50">
                                <input type="c-text" required></input>
                                <span>Last Name</span>
                            </div>
                            <div class="c-inputbox w50">
                                <input type="c-email" required></input>
                                <span>Email Address </span>
                            </div>
                            <div class="c-inputbox w50">
                                <input type="c-text" required></input>
                                <span>Mobile No.</span>
                            </div>
                            <div class="c-inputbox w100">
                                <textarea required placeholder='Write your message here...'></textarea>
                                {/* <span></span> */}
                            </div>
                            <div className="c-inputbox w100">
                                <input type="submit" value="Send" required></input>
                                {/* <span>First Name</span>  */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default ContactUs;