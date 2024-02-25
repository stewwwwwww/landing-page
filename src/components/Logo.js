import React from "react";
import burgerLogo from "../assets/burgerLogo.png";
function Logo() {
  return (
    <div>
      <img
        className="absolute right-12 top-[130rem] z-10 h-[17.5rem]"
        src={burgerLogo}
        alt="logo"
      />
      <img
        className="absolute left-12 top-[170rem] z-10 h-[17.5rem]"
        src={burgerLogo}
        alt="logo"
      />
      <img
        className="ight-12 absolute top-[356.25rem] z-10 h-[17.5rem]"
        src={burgerLogo}
        alt="logo"
      />
      <img
        className="absolute left-12 top-[470rem] z-10 h-[17.5rem]"
        src={burgerLogo}
        alt="logo"
      />
    </div>
  );
}

export default Logo;
