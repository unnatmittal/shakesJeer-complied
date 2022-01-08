import React, { useState } from 'react';
import './contact.css'
import emailjs from 'emailjs-com'
export default function Contact() {
    // const form = useRef();
    const [status,setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_fl1uc26', 'template_cki2rch', e.target, 'user_o7bRL2JlmvfEfaIv5l2z1')
            .then((result) => {
                console.log(result.text);
                setStatus('SUCCESS');
            },
             (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div className='c-section'>
            <div className="c-container">
            
                <div className="c-contactinfo">
                    <div>
                        <h2>Contact Info</h2>
                        <ul className="c-info">
                            <li >
                                <span >
                                    <div className="fas fa-map-marker-alt"></div>
                                </span>
                                <span >
                                    Lorem ipsum dolor sit amet.<br />
                                    Lorem, ipsum.
                                </span>
                            </li>
                            <li >
                                <span>
                                    <div className="fas fa-envelope-open-text"></div>
                                </span>
                                <span >
                                    lorem@gmail.com
                                </span>
                            </li>
                            <li >
                                <span >
                                    <div className="fas fa-phone-volume"></div>
                                </span>
                                <span >
                                    254-684-329
                                </span>
                            </li>
                        </ul>
                    </div>
                    <ul className="c-sci">
                        <li ><a href="" target="_blank" className="fab c-twitter fa-twitter"></a></li>
                        <li ><a href="https://www.facebook.com/ShakesJeer/" target="_blank" className="fab c-fb fa-facebook"></a></li>
                        <li ><a href="https://in.linkedin.com/company/shakesjeer" target="_blank" className="fab c-link fa-linkedin"></a></li>
                        <li ><a href="https://www.youtube.com/channel/UCxjRIS5xt8nvBTT7naTxe7Q" target="_blank" className="fab c-pin fa-youtube"></a></li>
                        <li ><a href="https://www.instagram.com/shakesjeer.nsut/" target="_blank" className="fab c-insta fa-instagram"></a></li>
                    </ul>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eos autem sequi quam repellat, voluptate maxime ad? Aut ipsam ab maiores perspiciatis quaerat.
                </p>
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
                                <textarea required placeholder='Write your message here...' name="message" />
                                {/* <span></span> */}
                            </div>
                            <div className="c-inputbox w100">
                                <input type="submit" value="Send" required />
                                {/* <span>First Name</span>  */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}
const renderAlert = () => (
<div className="c-received">
    <p className="c-receivepara">
        Message send successfully
    </p>
</div>
)