import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../css-assets/Benefits.css";

function Benefits() {
  // Define arrays of titles, images, and descriptions
  const titles = [
    "Advancement",
    "Flexibility",
    "Travel Rewards",
    "Fulfillment",
  ];

  const images = [
    "/Images/Advancement.png",
    "/Images/Flexibility.png",
    "/Images/TravelRewards.png",
    "/Images/Fullfillment.png",
  ];

  const descriptions = [
    "EXPLORE LIMITLESS CAREER GROWTH. GROW YOUR SKILLS WITH US!",
    "CONTROL YOUR OWN TIME. ENJOY A FLEXIBLE SCHEDULE!",
    "GET REWARDED WITH LOCAL & INTERNATIONAL TRAVELS! LOCAL & INTERNATIONAL TRAVELS",
    "BE PERSONALLY FULFILLED. SERVE A GREATER PURPOSE!",
  ];

  // State to track hover status of each card
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Row xs={1} md={2} className="g-4">
      {images.map((image, idx) => (
        <Col key={idx}>
          <div
            className={
              idx % 2 === 1 ? "BenefitsCard secondColumn" : "BenefitsCard"
            }
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                width: "600px",
                height: "200px",
                position: "relative",
              }}
            >
              <Card.Body className={hoveredIndex === idx ? "hovered" : ""}>
                <Card.Title className="highlighted">{titles[idx]}</Card.Title>
                <Card.Text className="ShowDesc">{descriptions[idx]}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Benefits;
