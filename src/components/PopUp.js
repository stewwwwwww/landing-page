import React from "react";
import reservepopup from "../assets/reservepopup.jpg";
function PopUp(props) {
  const handlePopUpConfirm = (event) => {
    event.preventDefault();
    document.getElementsByClassName("popUpScreen")[0].style.cssText =
      "display: none";
    document.body.style.overflow = "auto";
  };
  return (
    <div className="popUpScreen z-2 fixed hidden">
      <div className="z-1 fixed left-0 top-0 h-full w-full backdrop-blur-sm"></div>
      <div className="z-2 fixed left-1/2 top-1/2 flex translate-x-[-50%] translate-y-[-50%] justify-center">
        <img
          src={reservepopup}
          alt="popup"
          className="relative h-[37.5rem] w-[28.125rem]"
        ></img>
        <h1 className="left[7.5rem] z-3 absolute bottom-[-4.7rem] m-0 font-[Yellowtail] text-[12.5rem] text-[#fafafa] opacity-85">
          mcD
        </h1>
        <div className="flex h-[37.5rem] w-[37.5rem] flex-col items-center justify-center bg-[#e2d5a5]">
          <h3 className="m-0">{props.title}</h3>
          <h5 className="m0 mb-6 mt-9">{props.subtitle}</h5>
          <p className="m0 mb-12 mt-3">{props.description}</p>
          <button
            className="m-0 h-8 w-[13.5rem] cursor-pointer text-black"
            onClick={handlePopUpConfirm}
          >
            Confirm
          </button>
          <p
            className="mx-0 my-2 cursor-pointer text-[#6b6b6b]"
            onClick={handlePopUpConfirm}
          >
            cancel reservation
          </p>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
