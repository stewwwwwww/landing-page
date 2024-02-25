import React from "react";
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
    }, 6000);
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
    <div
      className="flex justify-stretch overflow-hidden scroll-smooth"
      ref={containerRef}
    >
      <div className="absolute left-1/2 top-[67rem] flex translate-x-[-50%] cursor-pointer text-center">
        {introData.map((data, i) => (
          <p
            className="z-2 p-5 font-cormorant text-[1.5rem] text-[#f5efdb]"
            onClick={handleClickButton}
            key={i}
          >
            {i + 1}
          </p>
        ))}
      </div>
      {introData.map((data, i) => (
        <div
          className="grid w-screen grid-cols-[10vw_68vw_10vw] grid-rows-[50rem_6rem] justify-center px-[6vw] py-[3rem]"
          ref={(element) => (navigationRef.current[i] = element)}
          key={i}
        >
          <div className="col-span-2 col-start-1 row-span-1 row-start-1 flex items-center">
            <p className="vertical rotate-0 text-[1.25rem] text-[#fff] [writing-mode:vertical-rl]">
              #bundoumamtom
            </p>
          </div>
          <div className="row-span1 col-span-1 col-start-2 row-start-1 flex justify-between">
            <div className="flex w-[35%] flex-col items-start justify-center">
              <h5 className="m-0 mb-4 text-[#fff]">{data.quote}</h5>
              <div className="m-0 mb-6 h-0.5 w-11 bg-[linear-gradient(_to_left,_rgba(220,_202,_135,_1),_rgba(220,_202,_135,_1),_rgba(220,_202,_135,_0.24)_)]"></div>
              <h1 className="m-0 mb-4 text-[#dcca87]">{data.title}</h1>
              <p className="m-0 mb-8 text-[#aaa]">{data.description}</p>
              <button>Learn more</button>
            </div>
            <div className="relative flex w-[50%]">
              <img
                src={data.image}
                alt={data.image}
                className="absolute left-[3%] top-[3%] h-[94%] w-[94%]"
              />
              <div className="h-[27rem] w-[27rem] self-end bg-[#dcca87]"></div>{" "}
              <div className="h-[27rem] w-[27rem] bg-[#dcca87]"></div>
            </div>
          </div>
          <div className="col-span-1 col-start-3 row-span-1 row-start-1 flex flex-col items-center justify-end text-[#dcca87]">
            <div className="h-16 w-0.5 bg-[linear-gradient(_rgba(220,_202,_135,_1),_rgba(220,_202,_135,_1),_rgba(220,_202,_135,_0.24)_)]"></div>
            <p>scroll</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Intro;
