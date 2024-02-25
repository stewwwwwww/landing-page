import React from "react";
import cat from "../assets/cat.png";
import quote from "../assets/quote.png";
import { useState, useRef, useEffect } from "react";
import throttle from "../helpers/throttle.js";
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
      className="relative flex h-[60.625rem] w-full items-center justify-center gap-24 bg-[url('./assets/background2.jpg')] bg-cover bg-center bg-no-repeat"
      ref={eRef}
      style={{ backgroundSize: `${141 + scaleValue}% ${141 + scaleValue}%` }}
    >
      <div className="relative flex h-[43rem] w-[34.375rem] items-center justify-center">
        <div className="absolute left-0 top-0 h-[25rem] w-[25rem] bg-[#DCCA87]"></div>
        <div className="absolute bottom-0 right-0 h-[25rem] w-[25rem] bg-[#DCCA87]"></div>
        <img src={cat} alt="cat" className="absolute w-[31.25rem]" />
      </div>
      <div className="w-[34.375rem] items-center justify-start">
        <img src={quote} alt="quote" className="mb-2 w-20"></img>
        <h5 className="m-0 mb-1 text-[#fff]">Chef's Quote</h5>
        <div className="m-0 mb-8 h-[0.125rem] w-7 bg-[linear-gradient(to_right,rgba(220,202,135,1),rgba(220,202,135,1),rgba(220,202,135,0.24))]"></div>
        <h2 className="m-0 mb-10 text-[#DCCA87]">Culinary Art</h2>
        <p className="m-0 mb-6 text-[#aaa]">
          <i>
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Lorem ipsum dolor
            sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu.
            Vulputate nulla lobortis mauris eget sit. Nulla scelerisque
            scelerisque congue.
          </i>
        </p>
        <h4 className="m-0 text-[#DCCA87]">Putin Meo</h4>
        <p className="m-0 mb-6 text-[#aaa]">Head Chef</p>
        <h1 className="m-0 mb-4 font-['Yellowtail'_,_cursive] text-[#aaa]">
          Tinnn
        </h1>
      </div>
    </div>
  );
}

export default ChefQuote;
