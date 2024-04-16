// Sdab.jsx

import React from "react";
import "../css-assets/Sdab.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function Sdab() {
  return (
    <Container className="SdabContainer">
      <Row className="SdabRow">
        <Col xs={6} md={4} className="SdabCol">
          <div className="SdabImageContainer">
            <Image src="/Cebu.jpg" roundedCircle className="SdabImage" />
            <div className="SdabTextContainer">
              <div className="SdabText">Location 111111111111111111111111</div>
            </div>
          </div>
        </Col>
        <Col xs={6} md={4} className="SdabCol">
          <div className="SdabImageContainer">
            <Image src="/Bohol.jpg" roundedCircle className="SdabImage" />
            <div className="SdabTextContainer">
              <div className="SdabText">Location 2</div>
            </div>
          </div>
        </Col>
        <Col xs={6} md={4} className="SdabCol">
          <div className="SdabImageContainer">
            <Image src="/Makati.jpg" roundedCircle className="SdabImage" />
            <div className="SdabTextContainer">
              <div className="SdabText">Location 3</div>
            </div>
          </div>
        </Col>
        <Col xs={6} md={4} className="SdabCol">
          <div className="SdabImageContainer">
            <Image src="/Pampanga.jpg" roundedCircle className="SdabImage" />
            <div className="SdabTextContainer">
              <div className="SdabText">Location 4</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Sdab;
