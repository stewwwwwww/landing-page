import React from "react";
import mLogo from "../assets/mLogo.png";

function NavBar() {
  const scrollToHomeMenu = () => {
    window.scrollTo({
      top: document.getElementsByClassName("menuNav")[0].offsetTop,
      behavior: "smooth",
    });
  };
  const scrollToHomeAbout = () => {
    window.scrollTo({
      top: document.getElementsByClassName("about")[0].offsetTop,
      behavior: "smooth",
    });
  };
  const scrollToHomeContact = () => {
    window.scrollTo({
      top: document.getElementsByClassName("footerContainer")[0].offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex items-center justify-between pb-6 pl-32 pr-32 pt-11 text-[#fff]">
      <img src={mLogo} alt="logo" className="w-[9rem]" />
      <div className="flex w-[25rem] justify-between">
        <p onClick={scrollToHomeAbout} className="cursor-pointer">
          About
        </p>
        <p onClick={scrollToHomeMenu} className="cursor-pointer">
          Menu
        </p>
        <p onClick={scrollToHomeContact} className="cursor-pointer">
          Contact
        </p>
      </div>
      <p className="cursor-pointer">Book Table</p>
    </div>
  );
}

export default NavBar;
