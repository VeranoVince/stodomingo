import React from "react";
import "../css-assets/FourGrid.css"; // Importing the CSS file

const CASES = [
  {
    title: "Advancement",
    description: "EXPLORE LIMITLESS CAREER GROWTH. GROW YOUR SKILLS WITH US!",
  },
  {
    title: "Flexibility",
    description: "CONTROL YOUR OWN TIME. ENJOY A FLEXIBLE SCHEDULE!",
  },
  {
    title: "Travel Rewards",
    description:
      "GET REWARDED WITH LOCAL & INTERNATIONAL TRAVELS! LOCAL & INTERNATIONAL TRAVELS",
  },
  {
    title: "Fulfillment",
    description: "BE PERSONALLY FULFILLED. SERVE A GREATER PURPOSE!",
  },
];

function FourGrid() {
  return (
    <div className="grid">
      {CASES.map((item, index) => (
        <div key={index} className="grid__item">
          <div className="item__content">
            <div className="title font-bold mb-2">{item.title}</div>
            <p className="description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FourGrid;
