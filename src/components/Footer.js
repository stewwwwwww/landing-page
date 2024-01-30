import React from "react";
import "../styles/Footer.css";
import mLogo from "../assets/mLogo.png";
import tiktok from "../assets/tiktok.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
function Footer() {
  return (
    <div className="footerContainer">
      <div className="supscription">
        <h5>Get in Touch</h5>
        <div className="linear10"></div>
        <h2>Receive new our updates</h2>
        <p>Don't miss out on us</p>
        <form>
          <input type="text"></input>
          <button>Subscribe</button>
        </form>
      </div>
      <div className="contactContainer">
        <div className="contactItem">
          <h4>Working Hours</h4>
          <p>Tuesday-Friday</p>
          <p>09:00AM - 10:00PM</p>
          <p>
            <br></br>
          </p>
          <p>Saturday-Monday</p>
          <p>11:00AM - 00:00AM</p>
        </div>
        <div className="contactItem">
          <img src={mLogo} className="footerLogo"></img>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing, consectetur
            adipiscing{" "}
          </h5>
          <div className="linear10"></div>
          <div className="socialIcons">
            <img src={instagram} alt="social" />
            <img src={tiktok} alt="social" />
            <img src={facebook} alt="social" />
          </div>
          <p>2023 Duc Do. </p>
        </div>
        <div className="contactItem">
          <h4>Contact Us</h4>
          <p>9909 Yonge St, Toronto ON</p>
          <p>
            <br></br>
          </p>
          <p>+1(123)-456-7890</p>

          <p>mcdcompany@mcdco.ca</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
