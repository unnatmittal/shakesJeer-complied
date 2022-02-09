import React from "react";
//import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import logo from "./logo.png";
import "./footer.css";
import { Link } from "react-router-dom";
// const mapStyles = {
//   width: "100%",
//   height: "100%",
//   boxSizing: `border-box`,
// };
var date = new Date();
var yr = date.getFullYear();
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
              ShakesJeer commences this trip with the sole intention of leaving
              the world a happier place than it would have been without us.
            </p>
          </div>
          <div className="col">
            <h3>
              Contact Us
              <div className="underline">
                <span />
              </div>
            </h3>
            <p>Sector-3, Dwarka Road</p>
            <p>Dwarka, New Delhi</p>
            <p>Pincode :-110078, India</p>
            <p className="email-id">
              <i className="far fa-envelope" />
              <a href="mailto:shakesjeer.nsutd@gmail.com">
                shakesjeer.nsutd@gmail.com
              </a>
            </p>
            <h4 className="phone_text">
              <i class="fas fa-phone"></i> +91-9315911429
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
                <Link to="/" className="quicklink_text">
                  Home
                </Link>
              </li>
              <li className="quicklinks">
                <i className="fas fa-users" />
                <Link to="/about" className="quicklink_text">
                  About Us
                </Link>
              </li>
              <li className="quicklinks">
                <i className="fas fa-newspaper" />
                <Link to="/shakesjournal" className="quicklink_text">
                  Journal
                </Link>
              </li>
              <li className="quicklinks">
                <i className="fas fa-tv" />
                <Link to="/events" className="quicklink_text">
                  Event
                </Link>
              </li>
              <li className="quicklinks">
                <i className="fas fa-book" />
                <Link to="/resources" className="quicklink_text">
                  Resources
                </Link>
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
                  <a
                    href="https://www.facebook.com/ShakesJeer/"
                    target="_blank"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/shakesjeer.nsut/?hl=en"
                    target="_blank"
                  >
                    <i className="fa fa-instagram"> </i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCxjRIS5xt8nvBTT7naTxe7Q"
                    target="_blank"
                  >
                    <i className="fa fa-youtube"> </i>
                  </a>
                </li>
                <br />
                <li>
                  <a
                    href="https://www.linkedin.com/company/shakesjeer/?originalSubdomain=in"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/shakesjeer?s=20&t=XmKHsCGm9AzJ8K91zxkYcQ"
                    target="_blank"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://discord.com/invite/AgjMh6CR" target="_blank">
                    <i className="fa fa-discord" />
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
        <p className="copyright">ShakesJeer {yr} - Made with 😂😁😜</p>
      </footer>
    );
  }
}
export default Footer;
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCp5-779C4C8F7eOrUmLyZ64FRXXi8IhCA",
// })(Footer);
