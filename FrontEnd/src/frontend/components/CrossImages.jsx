// CrossImages.jsx

import React from "react";
import "../css-assets/CrossImages.css";

const CrossImages = () => {
  return (
    <div className="cross-container pink-background">
      {" "}
      {/* Add a class or inline style for the background color */}
      <div className="quadrant top-left">
        <img src="/a1.png" alt="Image 1" />
      </div>
      <div className="quadrant top-right">
        <img src="/a2.png" alt="Image 2" />
      </div>
      <div className="quadrant bottom-left">
        <img src="/a3.png" alt="Image 3" />
      </div>
      <div className="quadrant bottom-right">
        <img src="/a4.png" alt="Image 4" />
      </div>
      <br />
    </div>
  );
};

export default CrossImages;
