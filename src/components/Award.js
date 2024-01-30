import React from "react";
import "../styles/Award.css";
import dining from "../assets/finedining.jpg";
import throttle from "../helpers/throttle.js";
import { awardData } from "../data/data.js";
import { useState, useRef, useEffect } from "react";
function Award() {
  const [scaleValue, setScaleValue] = useState(1);
  const [animation, setAnimation] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", throttle(handleScrollAnimation, 15));
    return () => {
      window.removeEventListener("scroll", throttle(handleScrollAnimation, 15));
    };
  }, []);
  const handleScrollAnimation = () => {
    const newValue =
      (window.scrollY -
        containerRef.current.offsetTop -
        containerRef.current.offsetHeight / 4) /
      24;
    if (
      window.scrollY >=
      containerRef.current.offsetTop + containerRef.current.offsetHeight / 4 &&
      window.scrollY <= containerRef.current.offsetTop + containerRef.current.offsetHeight
    ) {
      setScaleValue(newValue);
    } else if (
      window.scrollY >=
      containerRef.current.offsetTop - containerRef.current.offsetHeight / 4 &&
      window.scrollY <= containerRef.current.offsetTop + containerRef.current.offsetHeight &&
      animation === false
    ) {
      setAnimation(true);
    } else {
      setScaleValue(1);
    }
  };
  useEffect(() => {
    if (animation) {
      handleAwardAnimation()
    }
  }, [animation])
  const handleAwardAnimation = () => {
    document.getElementsByClassName("awardContent")[0].style.cssText = "animation: scale 2s forwards ease-in;"
    awardData.forEach((data, dataIndex) => {
      Array.from(document.getElementsByClassName("awardTitle")[dataIndex].querySelectorAll("*")).forEach((item, itemIndex) => {
        item.style.cssText = `animation: fade-in 0.8s ${itemIndex / 3 + 1}s forwards cubic-bezier(0.11, 0, 0.5, 0);`;
      })
      Array.from(document.getElementsByClassName("awardDescription")[dataIndex].querySelectorAll("*")).forEach((item, itemIndex) => {
        item.style.cssText = `animation: fade-in 0.8s ${itemIndex / 3 + 1}s forwards cubic-bezier(0.11, 0, 0.5, 0);`;
      })
    })
  }
  return (
    <div
      className="awardContainer"
      ref={containerRef}
      style={{ backgroundSize: `${141 + scaleValue}% ${141 + scaleValue}%` }}
    >
      <div className="awardContent">
        <h5 className="awardText">Awards</h5>
        <div className="linear5"></div>
        <h2>Our Certifications</h2>
        <div className="awardList">
          {awardData.map((award, index) => (
            <div className="awardItem" key={index}>
              <img className="awardIcon" src={award.awardImg} alt="award" />
              <h5 className="awardTitle" value={award.title}>
                {award.title.split(" ").map(item => <span className="awardAnimatedText">{item}</span>)}
              </h5>
              <div value={award.description} className="awardDescription">
                {award.description.split(" ").map(item => <span className="awardAnimatedText">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src={dining} alt={dining} className="AwardImg" />
      <h1 className="awardSignature">mcD</h1>
    </div>
  );
}

export default Award;
