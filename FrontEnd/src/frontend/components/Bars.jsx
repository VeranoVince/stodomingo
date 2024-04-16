import React from "react";
import "../css-assets/Bars.css";

const Bars = () => {
  return (
    <div className="bars-container">
      <div className="vsecondary-bar"></div>
      <div className="bar left-bar">
        <span className="text">
          EXPLORE LIMITLESS CAREER GROWTH. <br></br>GROW YOUR SKILLS WITH US!
        </span>
      </div>
      <br></br>
      <div className="bar right-bar">
        <div className="vfourth-bar"></div>
        <span className="text">
          CONTROL YOUR OWN TIME.<br></br>ENJOY A FLEXIBLE SCHEDULE!
        </span>
      </div>
      <br></br>
      <div className="bar left-bar">
        <div className="vthird-bar"></div>
        <span className="text">
          GET REWARDED WITH LOCAL & INTERNATIONAL TRAVELS!<br></br> LOCAL &
          INTERNATIONAL TRAVELS
        </span>
      </div>
      <br></br>
      <div className="bar right-bar">
        <div className="vfifth-bar"></div>
        <span className="text">
          BE PERSONALLY FULFILLED.<br></br> SERVE A GREATER PURPOSE!
        </span>
      </div>
    </div>
  );
};

export default Bars;
