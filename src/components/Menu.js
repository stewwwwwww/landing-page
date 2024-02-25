import React from "react";
import alcCup from "../assets/alcCup.png";
import { menu } from "../data/data.js";
import { useState, useRef } from "react";
function Menu() {
  const eRef = useRef(null);
  const [menuPage, setMenuPage] = useState("foodMenu");
  const menuClick = (e) => {
    setMenuPage(e.target.id);
    window.scrollTo({
      top: eRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="flex h-[56.25rem] w-full items-center justify-center gap-40 bg-[url('./assets/barbackground.jpg')] bg-cover bg-blend-darken">
        <h2
          className="cursor-pointer text-center text-[#fff]"
          onClick={menuClick}
          id="foodMenu"
        >
          Food
        </h2>
        <h2
          className="cursor-pointer text-center text-[#fff]"
          onClick={menuClick}
          id="alcMenu"
        >
          Alcohol
        </h2>
        <h2
          className="cursor-pointer text-center text-[#fff]"
          onClick={menuClick}
          id="nonAlcMenu"
        >
          Non-Alc
        </h2>
      </div>
      <div
        className="flex flex-col items-center justify-center p-28"
        ref={eRef}
      >
        <h5 className="m-0 mb-4 text-[#fff]">Menu says something</h5>
        <div className="m-0 mb-4 h-0.5 w-14 bg-[linear-gradient(_to_left,_rgba(220,_202,_135,_1),_rgba(220,_202,_135,_0.24),_rgba(220,_202,_135,_1)_)]"></div>
        <h2 className="m-0 mb-6 text-[#dcca87]">Today's Special</h2>
        <div className="flex h-[41.25rem] w-[81.25rem] items-center justify-center">
          <div className="flex w-[31.25rem] flex-col">
            <h3 className="m-0 mb-16 mt-7 text-center text-[#fff]">
              {menu[menuPage].firstTitle}
            </h3>
            {menu[menuPage].category1.map((item) => {
              return (
                <div className="mb-8 grid h-16 grid-cols-[5fr_3fr_1fr] grid-rows-2 items-center gap-y-3">
                  <h5 className="col-span-2 col-start-1 row-span-2 row-start-1 m-0 text-[#dcca87]">
                    {item.dish}
                  </h5>
                  <div className="col-span-3 col-start-2 row-span-2 row-start-1 h-[0.065rem] w-[7.5rem] bg-[#fafafa]"></div>
                  <h5 className="col-span-4 col-start-3 row-span-2 row-start-1 m-0 text-[#fff]">
                    {item.price}
                  </h5>
                  <p className="col-span-2 col-start-1 row-span-3 row-start-2 m-0 mt-1 text-[#aaa]">
                    {item.origin ? item.origin + " " : ""}
                    {item.origin && (item.type || item.side || item.volume)
                      ? "| "
                      : ""}
                    {item.type ? item.type + " " : ""}
                    {item.type && (item.side || item.volume) ? "| " : ""}
                    {item.side ? item.side + " " : ""}
                    {item.side && item.volume ? "| " : ""}
                    {item.volume ? item.volume + " " : ""}
                  </p>
                </div>
              );
            })}
          </div>
          <img src={alcCup} alt="alcCup" className="w-[28.125rem]" />
          <div className="flex w-[31.25rem] flex-col">
            <h3 className="m-0 mb-16 mt-7 text-center text-[#fff]">
              {menu[menuPage].secondTitle}
            </h3>
            {menu[menuPage].category2.map((item) => {
              return (
                <div className="mb-8 grid h-16 grid-cols-[5fr_3fr_1fr] grid-rows-2 items-center gap-y-3">
                  <h5 className="col-span-2 col-start-1 row-span-2 row-start-1 m-0 text-[#dcca87]">
                    {item.dish}
                  </h5>
                  <div className="col-span-3 col-start-2 row-span-2 row-start-1 h-[0.065rem] w-[7.5rem] bg-[#fafafa]"></div>
                  <h5 className="col-span-4 col-start-3 row-span-2 row-start-1 m-0 text-[#fff]">
                    {item.price}
                  </h5>
                  <p className="col-span-2 col-start-1 row-span-3 row-start-2 m-0 mt-1 text-[#aaa]">
                    {item.origin ? item.origin + " " : ""}
                    {item.origin && (item.type || item.side || item.volume)
                      ? "| "
                      : ""}
                    {item.type ? item.type + " " : ""}
                    {item.type && (item.side || item.volume) ? "| " : ""}
                    {item.side ? item.side + " " : ""}
                    {item.side && item.volume ? "| " : ""}
                    {item.volume ? item.volume + " " : ""}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
