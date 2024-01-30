import React from "react";
import mLogo from "../assets/mLogo.png";
import "../styles/NavBar.css";

function NavBar() {
  const scrollToHomeMenu = () => {
    window.scrollTo({ top: document.getElementsByClassName("menuNav")[0].offsetTop, behavior: "smooth" });
  }
  const scrollToHomeAbout = () => {
    window.scrollTo({ top: document.getElementsByClassName("about")[0].offsetTop, behavior: "smooth" });
  }
  const scrollToHomeContact = () => {
    window.scrollTo({ top: document.getElementsByClassName("footerContainer")[0].offsetTop, behavior: "smooth" });
  }
  return (
    <div className="navContainer">
      <img src={mLogo} alt="logo" />
      <div className="navList">
        <p onClick={scrollToHomeAbout}>About</p>
        <p onClick={scrollToHomeMenu}>Menu</p>
        <p onClick={scrollToHomeContact}>Contact</p>
      </div>
      <p className="navBookTable">Book Table</p>
    </div>
  );
}

export default NavBar;