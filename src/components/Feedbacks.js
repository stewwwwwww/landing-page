import React from "react";
import { feedbackData } from "../data/data";
import quote from "../assets/quote.png";

function Feedbacks() {
  return (
    <div className="flex h-[62.5rem] flex-col items-center justify-center">
      <h5 className="m-0 mb-2 text-[#fff]">Feedbacks</h5>
      <div className="m-0 mb-7 h-0.5 h-[2px] w-[60px] bg-[linear-gradient(_to_left,_rgba(220,_202,_135,_1),_rgba(220,_202,_135,_0.24),_rgba(220,_202,_135,_1)_)]"></div>
      <h2 className="m-0 mb-10 text-[#dcca87]">Customers' Compliments</h2>
      <div className="ap-16 grid w-[81.25rem] grid-cols-2 grid-rows-2 gap-16">
        {feedbackData.splice(0, 4).map((data, i) => (
          <div
            className="relative grid grid-cols-[1fr_2fr] grid-rows-[4fr_2fr_1fr] gap-x-7"
            key={i}
          >
            <img
              src={quote}
              alt="quote"
              className="z-1 absolute left-[9.7rem] top-[11.25rem] w-[4.375rem]"
            />
            <img
              src={data.img}
              alt="celeb"
              className="col-span-1 col-start-1 row-span-3 row-start-1 h-[14rem] w-[14rem]"
            />
            <p className="row-span- 1 col-span-1 col-start-2 row-start-1 m-0 italic text-[#aaa]">
              {data.feedback}
            </p>
            <h4 className="col-span-1 col-start-2 row-span-1 row-start-2 m-0 text-[#dcca87]">
              {data.name}
            </h4>
            <p className="col-span-1 col-start-2 row-span-1 row-start-3 m-0 text-[#f5efdb]">
              {data.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedbacks;
