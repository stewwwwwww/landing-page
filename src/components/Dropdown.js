import React from "react";
import { useState, useEffect, useRef } from "react";

function Dropdown(props) {
  const [dropdownSelected, setDropdownSelected] = useState(props.selector);
  const eRef = useRef(null);
  useEffect(() => {
    props.dropdownList.forEach((element) => {
      const p = document.createElement("p");
      p.textContent = element;
      p.onclick = handleSelectDropdownOption;
      document
        .getElementsByClassName("dropdownList")
        [props.dropdownId].appendChild(p);
      return () => {
        document
          .getElementsByClassName("dropdownList")
          [props.dropdownId].forEach((element) => {
            element.remove();
          });
      };
    });
  }, []);
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  });
  useEffect(() => {
    document.addEventListener("scroll", () => {
      document.getElementsByClassName("dropdownList")[
        props.dropdownId
      ].style.display = "none";
    });
    return () => {
      document.removeEventListener("scroll", () => {
        document.getElementsByClassName("dropdownList")[
          props.dropdownId
        ].style.display = "none";
      });
    };
  });
  const handleOutsideClick = (event) => {
    if (!eRef.current.contains(event.target)) {
      document.getElementsByClassName("dropdownList")[
        props.dropdownId
      ].style.display = "none";
    }
  };
  const handleSelectDropdown = (event) => {
    document.getElementsByClassName("dropdownList")[
      props.dropdownId
    ].style.display = "block";
  };
  const handleSelectDropdownOption = (event) => {
    document.getElementsByClassName("dropdownList")[
      props.dropdownId
    ].style.display = "none";
    setDropdownSelected(event.target.innerHTML);
    if (props.getSelectedReservePeople !== undefined) {
      props.getSelectedReservePeople(event.target.innerHTML);
    }
    if (props.getSelectedReserveTime !== undefined) {
      props.getSelectedReserveTime(event.target.innerHTML);
    }
    if (props.getReservePeopleValid !== undefined) {
      props.getReservePeopleValid(true);
    }
    if (props.getReserveTimeValid !== undefined) {
      props.getReserveTimeValid(true);
    }
  };
  return (
    <div className="relative flex flex-col items-center">
      <div
        className=" font-cormorant relative flex h-[3.125rem] w-[25rem] cursor-pointer items-center justify-center border-[1px] border-[#f5efdb] border-[solid] bg-transparent text-[16px] font-semibold capitalize not-italic lining-nums tabular-nums leading-[175%] tracking-[0.64px] text-[#aaa]"
        onClick={handleSelectDropdown}
      >
        {dropdownSelected}
        <div
          className="absolute right-5 border-l-[0.4rem] border-r-[0.4rem]
          border-t-[0.6rem] border-l-transparent
          border-r-transparent border-t-[#f5efdb]"
        ></div>
      </div>
      <div
        className={
          "dropdownList absolute top-16 hidden w-full flex-col justify-center border-[1px] border-[solid] bg-[#0c0c0c] text-center font-[ComorantUpright] text-[16px] font-[600] capitalize lining-nums tabular-nums leading-[175%] tracking-[0.64px] text-[#aaa] [&_p]:m-0 [&_p]:p-1 hover:[&_p]:cursor-pointer hover:[&_p]:bg-[#494646]"
        }
        ref={eRef}
      ></div>
    </div>
  );
}

export default Dropdown;
