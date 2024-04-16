import React, { useState, useEffect } from "react";
import { Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavScrollExample from "./NavScrollExample";

function CarouselImgs() {
  const navigate = useNavigate();
  const [imageDimensions, setImageDimensions] = useState({
    width: "100%",
    height: "auto",
  });

  const [captions, setCaptions] = useState([
    {
      title: "Welcome to Sto Domingo Associates Damaso",
      description:
        "Your healthier, longer and better life starts here. Discover our products today.",
    },
    {
      title: "Your Second Slide Title",
      description: "Your description for the second slide goes here.",
    },
    {
      title: "Your Third Slide Title",
      description: "Your description for the third slide goes here.",
    },
  ]);

  const [buttons, setButtons] = useState([
    {
      text: "Learn More",
      variant: "warning",
      style: { marginTop: "150px", width: "180px" },
    },
    {
      text: "Explore Now",
      variant: "info",
      style: { marginTop: "150px", width: "180px" },
    },
    {
      text: "Get Started",
      variant: "success",
      style: { marginTop: "150px", width: "180px" },
    },
  ]);

  const calculateImageDimensions = (naturalWidth, naturalHeight) => {
    const aspectRatio = naturalWidth / naturalHeight;
    const maxWidth = 800;
    const maxHeight = maxWidth / aspectRatio;
    const incHeight = maxHeight * 1.5;

    return {
      width: "100%",
      height: `${incHeight}px`,
      objectFit: "cover",
    };
  };

  useEffect(() => {
    const img = new Image();
    img.src = "CarouselImage/carousel1.jpg";
    img.onload = () => {
      const dimensions = calculateImageDimensions(
        img.naturalWidth,
        img.naturalHeight
      );
      setImageDimensions(dimensions);
    };
  }, []);

  const handleClick = () => {
    navigate("/about-us");
  };

  return (
    <div className="carousel-wrapper">
      <Carousel xs={10} md={10} nextLabel="Next" prevLabel="Previous">
        {captions.map((caption, index) => (
          <Carousel.Item key={index}>
            <img
              src={`CarouselImage/carousel${index + 1}.jpg`}
              alt={`Slide ${index + 1}`}
              className="carousel-slide-image"
              style={{ ...imageDimensions, marginTop: "0%" }}
            />
            <Carousel.Caption className="upper-left-caption">
              <h2>{caption.title}</h2>
              <p>{caption.description}</p>
              <Button
                variant={buttons[index].variant}
                style={buttons[index].style}
                onClick={handleClick}
              >
                {buttons[index].text}
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselImgs;
