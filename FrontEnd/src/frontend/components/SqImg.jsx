import React from "react";
import "../css-assets/SqImg.css";

function SqImg() {
  return (
    <div className="sq-container">
      <div className="sq-text">
        <h1 className="smallest">
          SDA recruits and trains financial advisors and agency leaders to serve
          the Filipino market with Philam Life's products. They aim to develop
          skilled advisors who offer tailored financial solutions. After 11
          years, SDA has expanded its presence from Makati to several key
          locations nationwide.
        </h1>
      </div>
      <div className="sq-image">
        <img src="/Images/sqbuild.jpg" alt="Building" />
      </div>
    </div>
  );
}

export default SqImg;
