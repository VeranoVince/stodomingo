import React from "react";
import { Link } from "react-router-dom";
import "../css-assets/ImageArt.css";

function ImageArt() {
  const locations = [
    { name: "Makati", imageSrc: "/Images/Makati.jpg" },
    { name: "Cebu", imageSrc: "/Images/Cebu.jpg" },
    { name: "Pampanga", imageSrc: "/Images/Pampanga.jpg" },
    { name: "Bohol", imageSrc: "/Images/Bohol.jpg" },
    { name: "Dumaguete", imageSrc: "/Images/Dumaguete.jpg" },
  ];

  // Array of colors
  const colors = ["#3d83ba", "#2e7bb8", "#2578ba", "#1c74ba", "#0b70bf"];

  return (
    <div className="custom-image-gallery">
      {locations.map((location, index) => (
        <Link to={`/organization?tab=${location.name}`} key={index}>
          <img
            src={location.imageSrc}
            className="custom-image"
            alt={location.name}
            style={{
              width: "250px",
              height: "250px",
              "--color": colors[index],
            }} // Assign a color based on index
          />
          <div className="ImageTestOverlay">
            <h1>{location.name}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ImageArt;
