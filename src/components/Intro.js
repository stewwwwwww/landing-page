import React from "react";
import "../styles/Intro.css";
import { introData } from "../data/data.js";
import { useState, useEffect, useRef } from "react";

function Intro() {
  const [pageNum, setPageNum] = useState(0);
  const navigationRef = useRef([]);
  const containerRef = useRef(null);
  useEffect(() => {
    const changeTab = setInterval(() => {
      if (pageNum < introData.length - 1) {
        setPageNum((prev) => prev + 1);
        containerRef.current.scrollLeft =
          navigationRef.current[pageNum + 1].offsetLeft;
      } else {
        setPageNum(0);
        containerRef.current.scrollLeft = 0;
      }
    }, 5000);
    return () => {
      clearInterval(changeTab);
    };
  }, [pageNum]);
  const handleClickButton = (event) => {
    const pageIndex = event.target.innerHTML - 1;
    containerRef.current.scrollLeft =
      navigationRef.current[pageIndex].offsetLeft;
    setPageNum(pageIndex);
  };
  return (
    <div className="introContainer" ref={containerRef}>
      <div className="introNavNumbers">
        {introData.map((data, i) => (
          <p className={`introNavNumber${i + 1}`} onClick={handleClickButton} key={i}>
            {i + 1}
          </p>
        ))}
      </div>
      {introData.map((data, i) => (
        <div
          className="introGallery"
          ref={(element) => (navigationRef.current[i] = element)}
          key={i}
        >
          <div className="introHashTag">
            <p>#bundoumamtom</p>
          </div>
          <div className="introContent">
            <div className="introContentText">
              <h5>{data.quote}</h5>
              <div className="introContentLinear"></div>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <button>Learn more</button>
            </div>
            <div className="introImage">
              <img src={data.image} alt={data.image} />
              <div className="introDiv1"></div> <div className="introDiv2"></div>
            </div>
          </div>
          <div className="introScroll">
            <div className="introLinearScroll"></div>
            <p>scroll</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Intro;
