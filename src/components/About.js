import React from "react";
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
      className="relative flex h-[60.625rem] w-full items-center justify-center bg-[url('./assets/background2.jpg')] bg-cover bg-center bg-no-repeat"
      ref={eRef}
      style={{ backgroundSize: `${141 + scaleValue}% ${141 + scaleValue}%` }}
    >
      <div className="right-0 flex w-[37.5rem] flex-col items-end text-end">
        <h2 className="mb-10 text-[#DCCA87]">Our History</h2>
        <div className="mb-4 h-0.5 w-[2.813rem] bg-[linear-gradient(_to_right,rgba(220,202,135,1),rgba(220,202,135,1),rgba(220,202,135,0.24)_)]"></div>
        <p className="text-[#AAA]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button className="mt-6">Learn More</button>
      </div>
      <img src={fries} alt="fries" className="h-[31.688rem] w-[27.75rem]"></img>
      <div className="right-0 flex w-[37.5rem] flex-col items-start text-start">
        <h2 className="mb-10 text-[#DCCA87]">About us</h2>
        <div className="mb-4 h-0.5 w-[2.813rem] bg-[linear-gradient(_to_left,rgba(220,202,135,1),rgba(220,202,135,1),rgba(220,202,135,0.24)_)]"></div>
        <p className="text-[#AAA]">
          10 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
          pharetra adipiscing ultrices vulputate posuere tristique. In sed odio
          nec aliquet eu proin mauris et.z
        </p>
        <button className="mt-6">Learn More</button>
      </div>
    </div>
  );
}

export default About;
