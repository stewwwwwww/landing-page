import React from "react";
import vid from "../assets/vid.mp4";
function Vid() {
  return (
    <div className="clip-pa relative m-auto h-[40rem] w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute bottom-[-100%] left-[-100%] right-[-100%] top-[-145%] m-auto min-h-full min-w-full [clip-path:0_0]"
      >
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
}

export default Vid;
