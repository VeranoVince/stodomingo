import React from "react";
import "../css-assets/CircleImages.css"; // Make sure to import your CSS file for styling
import { CircleOpacity } from "../StyledComponents.js";

const Circles = () => {
  return (
    <>
      <CircleOpacity />
      <div>
        <h1 className="main-title">
          3 Ways to Protect your Finances for the Unexpected
        </h1>
        <div className="circles-container">
          <div className="circle left">
            <img src="/c1.png" alt="Analyze Available Resources 1" />
            <p>
              Identify and assess your needs so you'll know what to look for in
              a solution plan that best fits your needs.
            </p>
          </div>
          <div className="circle right" id="violet-hover">
            <img src="/c2.png" alt="Create a Priority-Spending Plan" />
            <p className="left-text">
              Evaluate your budget and create a priority list. Make sure that's
              realistic based on your monthly income.
            </p>
          </div>

          <div className="circle left">
            <img src="/c3.png" alt="Recover Strong" />
            <p>
              Although it is difficult to think about future emergencies when
              you are in the middle of a crisis, consider making a financial
              recovery plan or protect your finances through an insurance plan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Circles;
