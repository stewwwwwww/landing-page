import React from "react";
import { socialData } from "../data/data.js";
function Social() {
  return (
    <div className="flex h-[84.375rem] flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h5 className="m-0 mb-8 text-[#fff]">Articles</h5>
        <p className="m-0 text-[#aaa]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <div className="m-0 mb-4 mt-4 h-0.5 w-8 bg-[linear-gradient(_to_right,_rgba(220,_202,_135,_1),_rgba(220,_202,_135,_0.24),_rgba(220,_202,_135,_1)_)]"></div>
        <h2 className="m-0 mb-8 text-[#dcca87]">Recent Articles</h2>
        <div className="flex items-center gap-6">
          {socialData.splice(0, 3).map((data, index) => (
            <div className="mb-12 grid w-[24rem] grid-cols-2 grid-rows-[8re_1fr_2fr_2fr_1fr] items-center">
              <img
                src={data.img}
                alt="socialImg"
                className="col-span-2 col-start-1 row-span-1 row-start-1 h-[32rem] w-[24rem]"
              />
              <p className="row-start-w col-span-1 col-start-1 row-span-1 m-0 mb-8 text-[#fafafa]">
                {data.date}
              </p>
              <p className="col-span-1 col-start-2 row-span-1 row-start-2 m-0 mb-8 text-end text-[#fafafa]">
                {data.author}
              </p>
              <h4 className="col-span-2 col-start-1 row-span-1 row-start-3 mb-8 text-[#dcca87]">
                {data.title}
              </h4>
              <p className="col-span-2 col-start-1 row-span-1 row-start-4 mb-8 text-[#aaa]">
                {data.description}
              </p>
              <p className="col-span-1 col-start-1 row-span-1 row-start-5 mb-8 cursor-pointer text-[#dcca87] ">
                Read More
              </p>
            </div>
          ))}
        </div>
        <button>View More</button>
      </div>
    </div>
  );
}

export default Social;
