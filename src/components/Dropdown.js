import React from "react";
import "../styles/Dropdown.css";
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
    <div className="dropdownContainer">
      <div className="dropdownBtn" onClick={handleSelectDropdown}>
        {dropdownSelected}
        <div className="dropdownCursor"></div>
      </div>
      <div className={"dropdownList"} ref={eRef}></div>
    </div>
  );
}

export default Dropdown;
