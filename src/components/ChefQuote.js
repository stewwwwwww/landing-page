import React from "react";
import "../styles/ChefQuote.css";
import cat from "../assets/cat.png";
import quote from "../assets/quote.png";
import { useState, useRef, useEffect } from "react";
import throttle from "../helpers/throttle.js"
function ChefQuote() {
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
      className="chefContainer"
      ref={eRef}
      style={{ backgroundSize: `${141 + scaleValue}% ${141 + scaleValue}%` }}
    >
      <div className="chefImg">
        <div className="colorCont1"></div>
        <div className="colorCont2"></div>
        <img src={cat} alt="cat" />
      </div>
      <div className="chefContent">
        <img src={quote} alt="quote"></img>
        <h5>Chef's Quote</h5>
        <div className="linear7"></div>
        <h2>Culinary Art</h2>
        <p>
          <i>
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Lorem ipsum dolor
            sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu.
            Vulputate nulla lobortis mauris eget sit. Nulla scelerisque
            scelerisque congue.
          </i>
        </p>
        <h4>Putin Meo</h4>
        <p>Head Chef</p>
        <h1>Tinnn</h1>
      </div>
    </div>
  );
}

export default ChefQuote;
