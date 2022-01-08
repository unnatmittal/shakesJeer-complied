import React, { Component } from "react";
//import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import logo from "./logo.png";
import "./footer.css";
import { Link } from "react-router-dom";
const mapStyles = {
  width: "100%",
  height: "100%",
  boxSizing: `border-box`,
};
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col">
            <img src={logo} alt="incorrect address" className="footer-logo" />
            <h3>
              About us
              <div className="underline">
                <span />
              </div>
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              quis nesciunt, quasi quaerat consequuntur dignissimos ratione
              culpa? Quaerat repudiandae aperiam, Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div>
          <div className="col">
            <h3>
              Contact Us
              <div className="underline">
                <span />
              </div>
            </h3>
            <p>Lorem</p>
            <p>lipsum</p>
            <p>New Delhi</p>
            <p>Pincode :-0092,India</p>
            <p className="email-id">
              <i className="far fa-envelope" />
              Email-id :- shakesjeer@nsutac.in
            </p>
            <h4 className="phone_text">
              <i class="fas fa-phone"></i> 011 - 5151515
            </h4>
          </div>
          <div className="col">
            <h3>
              Quick Links
              <div className="underline">
                <span />
              </div>
            </h3>
            <ul>
              <li className="quicklinks">
                
                  <i className="fas fa-home" />
                  <Link to="/"className="quicklink_text">Home</Link>
                
              </li>
              <li className="quicklinks">
                  <i className="fas fa-users" />
                  <Link to="/about" className="quicklink_text">About Us</Link>
              </li>
              <li className="quicklinks">
                  <i className="fas fa-newspaper" />
                  <Link to="/shakesjournal"className="quicklink_text">Journal</Link>
              </li>
              <li className="quicklinks">
                  <i className="fas fa-tv" />
                  <Link to="/events"className="quicklink_text">Event</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>
              Follow Us On
              <div className="underline">
                <span />
              </div>
            </h3>
            <div className="social-icons">
              <ul>
                <li>
                  <a href="https://www.facebook.com/ShakesJeer/">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/shakesjeer.nsut/?hl=en">
                    <i className="fa fa-instagram"> </i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCxjRIS5xt8nvBTT7naTxe7Q">
                    <i className="fa fa-youtube"> </i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/shakesjeer/?originalSubdomain=in">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            {/* <h3 className="location">
              Location
              <div className="underline">
                <span />
              </div>
            </h3>
            <div className=" mapContainer">
              <Map
                google={this.props.google}
                zoom={13}
                style={mapStyles}
                initialCenter={{ lat: 28.618, lng: 77.038 }}
              >
                <Marker position={{ lat: 28.61, lng: 77.038 }} />
              </Map>
            </div> */}
          </div>
        </div>
        <hr />
        <p className="copyright">
          Shakesjeer Website © 2021- All Rights Reserved{" "}
        </p>
      </footer>
    );
  }
}
export default Footer;
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCp5-779C4C8F7eOrUmLyZ64FRXXi8IhCA",
// })(Footer);
