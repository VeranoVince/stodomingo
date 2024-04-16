import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import "./css-assets/Login.css"; // Import CSS file
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <body>
      <Container className="login-container">
        <Row>
          <Col className="form-container">
            <Form>
              <Form.Control type="text" placeholder="Email" />
              <br />
              <Form.Control type="password" placeholder="Password" />
              <br />
            </Form>
          </Col>
          <Button
            type="submit"
            className="loginBtn"
            onClick={() => {
              navigate("/");
            }}
          >
            Login
          </Button>
        </Row>
      </Container>
    </body>
  );
}

export default Login;
