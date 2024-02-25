import React from "react";
import dining from "../assets/finedining.jpg";
import throttle from "../helpers/throttle.js";
import { awardData } from "../data/data.js";
import { useState, useRef, useEffect } from "react";
function Award() {
  const [scaleValue, setScaleValue] = useState(1);
  const [animation, setAnimation] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

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
        containerRef.current.offsetTop +
          containerRef.current.offsetHeight / 4 &&
      window.scrollY <=
        containerRef.current.offsetTop + containerRef.current.offsetHeight
    ) {
      setScaleValue(newValue);
    } else if (
      window.scrollY >=
        containerRef.current.offsetTop -
          containerRef.current.offsetHeight / 4 &&
      window.scrollY <=
        containerRef.current.offsetTop + containerRef.current.offsetHeight &&
      animation === false
    ) {
      setAnimation(true);
    } else {
      setScaleValue(1);
    }
  };
  useEffect(() => {
    if (animation) {
      handleAwardAnimation();
    }
  }, [animation]);
  const handleAwardAnimation = () => {
    contentRef.current.style.cssText = "animation: scale 2s forwards ease-in;";
    awardData.forEach((data, dataIndex) => {
      Array.from(
        document
          .getElementsByClassName("awardTitle")
          [dataIndex].querySelectorAll("*"),
      ).forEach((item, itemIndex) => {
        item.style.cssText = `animation: fade-in 0.8s ${
          itemIndex / 3 + 1
        }s forwards cubic-bezier(0.11, 0, 0.5, 0);`;
      });
      Array.from(
        document
          .getElementsByClassName("awardDescription")
          [dataIndex].querySelectorAll("*"),
      ).forEach((item, itemIndex) => {
        item.style.cssText = `animation: fade-in 0.8s ${
          itemIndex / 3 + 1
        }s forwards cubic-bezier(0.11, 0, 0.5, 0);`;
      });
    });
  };
  return (
    <div
      className="relative flex h-[60.625rem] w-full items-center justify-center bg-[url('./assets/background2.jpg')] bg-cover bg-center bg-no-repeat"
      ref={containerRef}
      style={{ backgroundSize: `${141 + scaleValue}% ${141 + scaleValue}%` }}
    >
      <style>{`@keyframes scale {
  100% {
    transform: scale(1);
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
}
}
@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}`}</style>
      <div
        className="awardContent mr-44 flex w-[42rem] scale-95 flex-col items-start justify-center opacity-0"
        ref={contentRef}
      >
        <h5 className="m-0 mb-4 text-[#ffffff]">Awards</h5>
        <div className="h-[0.125rem] w-7 bg-[linear-gradient(to_right,rgba(220,202,135,1),rgba(220,202,135,1),rgba(220,202,135,0.24))]"></div>
        <h2 className="m-0 mb-12 text-[#dcca87]">Our Certifications</h2>
        <div className="awardList grid grid-cols-[1fr_1fr] grid-rows-[1gr_1fr] gap-x-8 gap-y-8">
          {awardData.map((award, index) => (
            <div
              className="relative grid h-[9.375rem] w-[23.75rem] grid-cols-[1fr_2fr] grid-rows-[2fr_3fr] "
              key={index}
            >
              <img
                className="absolute top-[50%] col-span-1 col-start-1 row-span-2 row-start-1 h-28 w-28 -translate-y-1/2 self-center"
                src={award.awardImg}
                alt="award"
              />
              <h5
                className="awardTitle col-span-1 col-start-2 row-span-1 row-start-1 m-0 self-center text-[#dcca87]"
                value={award.title}
              >
                {award.title.split(" ").map((item) => (
                  <span className="margin-0 scale-95 p-1 opacity-0 blur-sm">
                    {item}
                  </span>
                ))}
                {}
              </h5>
              <div
                value={award.description}
                className="awardDescription b-9 col-span-1 col-start-2 row-span-1 row-start-2 flex flex-wrap self-start font-[sans-serif] text-base text-[#aaa]"
              >
                {award.description.split(" ").map((item) => (
                  <span className="margin-0 scale-94 p-1 opacity-0 blur-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex h-[40rem] w-[30rem]">
        <img src={dining} alt={dining} className="h-full w-full object-cover" />
        <h1 className="absolute bottom-[-105px] left-[-72px] font-[Yellowtail] text-[17.5rem] text-[#fafafa] opacity-85">
          mcD
        </h1>
      </div>
    </div>
  );
}

export default Award;
