
import React, { useEffect } from "react";
import { Button, Container, Row,Col, } from "react-bootstrap";
import quizImage from './quizz.png';
import { Link } from "react-router-dom";
import "./LandingStyles.css";

function LandingPage() {


  return (
<div className="main">
      <Container>
        <Row>
          <Col md={6} className="intro-text">
            <div className="content">
              <h1 className="title">Welcome to Quizzy</h1>
              <p className="subtitle">Unlock your knowledge potential with our interactive quizzes, tailored to challenge and entertain you on a wide range of topics. Start your journey of discovery today with Quizzy!</p>
              <div className="buttonContainer">
                {/* <Button size="lg" className="landing-button">Login</Button>
                <Button variant="outline-primary" size="lg" className="landing-button">Sign Up</Button> */}

                <Link to="/login">
                <Button size="lg" className="landing-button">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landing-button"
                >
                  Signup
                </Button>
              </Link>


              </div>
            </div>
          </Col>
          <Col md={6}>
            <img src={quizImage} alt="Quiz Image" className="quiz-image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;