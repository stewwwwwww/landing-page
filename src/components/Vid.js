import React from "react";
import "../styles/Vid.css";
import vid from "../assets/vid.mp4";
function Vid() {
  return (
    <div className="vidcontainer">
      <video autoPlay muted loop>
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
}

export default Vid;
