import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone as fasPhone } from "@fortawesome/free-solid-svg-icons"; // Import the faPhone icon from solid icons

const FooterComponent = () => {
  return (
    <footer
      className="footer-container"
      style={{ backgroundImage: "url('/images/pngwing1.png')" }}
    >
      <div className="footer-inner">
        <div className="footer-hotel-info">
          <p>
            <strong>Apesech Hotel & Restaurant</strong>
            <br />
            <br />
            Address: Apesech Hotel & Restaurant, Matale, Sri Lanka.
            <br />
            Phone: <FontAwesomeIcon icon={fasPhone} /> 0775990104
            <br />
          </p>
          <br />
          <p>
            Enjoy luxury accommodations and exquisite dining at Apesech Hotel &
            Restaurant. Experience comfort and culinary excellence amidst
            Matale's lush landscapes.
          </p>
        </div>
        <div className="footer-social-links">
          <h3>Connect with us on social media:</h3>
          <div>
            <a href="https://web.facebook.com/apesechHotel/?_rdc=1&_rdr">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="[Insert Instagram Profile URL Here]">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="[Insert Twitter Profile URL Here]">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="tel:0775990104">
              <FontAwesomeIcon icon={fasPhone} />
            </a>
          </div>
        </div>
        <span className="footer-text">
          Apesech Hotel & Restaurant | All Rights Reserved &copy;{" "}
          {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default FooterComponent;
