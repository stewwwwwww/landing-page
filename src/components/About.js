import React from "react";
import "../styles/About.css";
import fries from "../assets/fries.png";
import { useState, useEffect, useRef } from "react";
import throttle from "../helpers/throttle.js";
function About() {
  const [scaleValue, setScaleValue] = useState(1);
  const eRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", throttle(handleScroll, 15));

    return () => {
      window.removeEventListener("scroll", throttle(handleScroll, 15));
    };
  }, []);
  const handleScroll = () => {
    const newValue =
      (window.scrollY -
        eRef.current.offsetTop -
        eRef.current.offsetHeight / 4) /
      24;
    if (
      window.scrollY >=
        eRef.current.offsetTop + eRef.current.offsetHeight / 4 &&
      window.scrollY <= eRef.current.offsetTop + eRef.current.offsetHeight
    ) {
      setScaleValue(newValue);
    } else {
      setScaleValue(1);
    }
  };
  return (
    <div
      className="aboutContainer"
      ref={eRef}
      style={{ backgroundSize: `${141 + scaleValue}% ${141 + scaleValue}%` }}
    >
      <div className="aboutHistory">
        <h2>Our History</h2>
        <div className="linear1"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button>Learn More</button>
      </div>
      <img src={fries} alt="fries" className="fries"></img>
      <div className="aboutAbout">
        <h2>About us</h2>
        <div className="linear2"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.z
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default About;
