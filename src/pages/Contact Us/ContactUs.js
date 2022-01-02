import React from 'react';
import './ContactUs.css';
class Home extends React.Component{
    render() {
      return(
        <div className="hello_contactus_pg">
        <div className="contact-container">
          <div className="btn1 btn_success">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                {/* <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_CEyvj2.json"  background="transparent"  speed="1"  style="justify-content: center; height: 52px;" loop  autoplay></lottie-player> */}
                <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_CEyvj2.json" background="transparent" speed={1} style={{justifyContent: 'center', height: '52px'}} loop autoPlay />
              </div>
              <div className="contact-info-text">
                <h2>Address</h2>
                <span>1215 Lorem Ipsum, Ch 176080 </span> 
                <span>Bihar , INDIA</span> 
              </div>
            </div>
          </div>
          <div className="btn1 btn_info">
            <div className="contact-info-item">
              <div className="contact-info-icon">            
                {/* <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_CEyvj2.json"  background="transparent"  speed="1"  style="justify-content: center; height: 52px;" loop  autoplay></lottie-player> */}
                <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_8SdEu9.json" background="transparent" speed={1} style={{justifyContent: 'center', height: '52px'}} loop autoPlay />
              </div>
              <div className="contact-info-text">
                <h2>E-mail</h2>
                <span>info@LoremIpsum.com </span> 
              </div>
            </div>
          </div>
          <div className="btn1 btn_warning">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                {/* <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_CEyvj2.json"  background="transparent"  speed="1"  style="justify-content: center; height: 52px;" loop  autoplay></lottie-player> */}
                <lottie-player src="https://assets1.lottiefiles.com/private_files/lf30_GNPF2n.json" background="transparent" speed={1} style={{justifyContent: 'center', height: '52px'}} loop autoPlay />
              </div>
              <div className="contact-info-text">
                <h2>Contact No</h2>
                <span>011-551555</span> 
              </div>
            </div>
          </div>
        </div>


        {/* ------------------------------------------------------------ */}
        <section className="contactUs">
          <div className="container_contactUs">
            <div className="content_contactUs">
              <div className="left_contactUs">
                <div className="youtube details">
                  <a href="https://www.youtube.com/channel/UCxjRIS5xt8nvBTT7naTxe7Q"><i className="fa fa-youtube-play" /></a>
                  <div className="topic">YouTube</div>
                </div>
                <div className="phone details">
                  <a href="https://www.instagram.com/shakesjeer.nsut/"><i className="fa fa-instagram" /></a>  
                  <div className="topic">Instagram</div>
                </div>
                <div className="email details">
                  <i className="fa fa-linkedin" />
                  <div className="topic">LinkedIn</div>
                </div>
                <div className="facebook details">
                  <a href="https://www.facebook.com/ShakesJeer/"><i class="fa fa-facebook-square" /></a>  
                  <div className="topic">Facebook</div>
                </div>
                {/* <div className="twitter details">
                  <a href="https://mail.google.com/mail/u/2/#inbox/FMfcgzGmtFDpwJVppStFrjxXjtpHVplf"><i class="fa fa-twitter" /></a> 
                  <div className="topic">Twitter</div>
                </div> */}
              </div>
              <div className="right_contactUs">
                <div className="topic-text">Send us a message</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat soluta sint at nulla qui unde?</p>
                <form action="#">
                  <div className="input-box">
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div className="input-box">
                    <input type="text" placeholder="Enter your email" />
                  </div>
                  {/* single-input-field */}
                  <div className="input-box">
                    <textarea placeholder="Write Your Message" name="message" defaultValue={""} />
                  </div>
                  <div className="button_contactUs">
                    <input type="button" defaultValue="Send Now" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      );       
}
}
export default Home;