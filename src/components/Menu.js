import React from "react";
import "../styles/Menu.css";
import alcCup from "../assets/alcCup.png";
import { menu } from "../data/data.js";
import { useState, useRef } from "react";
function Menu() {
  const eRef = useRef(null);
  const [menuPage, setMenuPage] = useState("foodMenu");
  const menuClick = (e) => {
    setMenuPage(e.target.className);
    window.scrollTo({
      top: eRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="menuNavContainer">
        <h2 className="foodMenu" onClick={menuClick}>
          Food
        </h2>
        <h2 className="alcMenu" onClick={menuClick}>
          Alcohol
        </h2>
        <h2 className="nonAlcMenu" onClick={menuClick}>
          Non-Alc
        </h2>
      </div>
      <div className="menuContent" ref={eRef}>
        <h5 className="menuSubtitle">Menu says something</h5>
        <div className="linear4"></div>
        <h2>Today's Special</h2>
        <div className="menuDetails">
          <div className="firstMenu">
            <h3 className="menuTitle">{menu[menuPage].firstTitle}</h3>
            {menu[menuPage].category1.map((item) => {
              return (
                <div className="menuItem">
                  <h5 className="menuItemName">{item.dish}</h5>
                  <div className="menuItemLine"></div>
                  <h5 className="menuItemPrice">{item.price}</h5>
                  <p className="menuItemDescription">
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
          <img src={alcCup} alt="altCup" />
          <div className="secondMenu">
            <h3 className="menuTitle">{menu[menuPage].secondTitle}</h3>
            {menu[menuPage].category2.map((item) => {
              return (
                <div className="menuItem">
                  <h5 className="menuItemName">{item.dish}</h5>
                  <div className="menuItemLine"></div>
                  <h5 className="menuItemPrice">{item.price}</h5>
                  <p className="menuItemDescription">
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
