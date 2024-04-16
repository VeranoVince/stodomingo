import React, { useState } from "react";
import { Tab, Tabs, Button, Container, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css-assets/Org.css";
import SdaChart from "../components/SdaChart";
import JoinUs from "../components/JoinUs";

function OrganizationPage() {
  return (
    <div className="Org">
      <div className="orgfam">
        <img
          src="/Images/OrganizationHeader.png"
          alt="Sto. Domingo Family"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
      <SdaChart />
      <JoinUs />
    </div>
  );
}

export default OrganizationPage;
