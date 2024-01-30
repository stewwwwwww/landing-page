import React from "react";
import "../styles/PopUp.css";
import reservepopup from "../assets/reservepopup.jpg";
function PopUp(props) {
  const handlePopUpConfirm = (event) => {
    event.preventDefault();
    document.getElementsByClassName("popUpScreen")[0].style.cssText =
      "display: none";
      document.body.style.overflow = "auto"
  };
  return (
    <div className="popUpScreen">
      <div className="popUpBackground"></div>
      <div className="popUpContainer">
        <img src={reservepopup} alt="popup"></img>
        <h1 className="popUpSignature">mcD</h1>
        <div className="popUpContent">
          <h3 className="popUpTitle">{props.title}</h3>
          <h5 className="popUpSubTitle">{props.subtitle}</h5>
          <p className="popUpDescription">{props.description}</p>
          <button className="popUpYesButton" onClick={handlePopUpConfirm}>
            Confirm
          </button>
          <p className="popUpNoButton" onClick={handlePopUpConfirm}>
            cancel reservation
          </p>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
