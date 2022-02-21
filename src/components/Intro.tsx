import React from 'react';
import './Intro.css';
import SocialIcons from './SocialIcons';
import profileImg from '../assets/peemtanapat.jpg';
import { Container, Row, Col } from 'react-bootstrap';

const Intro = () => {
  return (
    <div className="intro-section">
      <div className="container">
        <div className="intro-text">
          <Container fluid>
            <Row>
              <Col lg={6}>
                <div className="left-side">
                  <h4>Hello there. I'm</h4>
                  <h1>peemtanapat</h1>
                  <p>I'm a Software Developer.</p>

                  <p><SocialIcons /></p>
                </div>
              </Col>
              <Col lg={6}>
                <img
                  className="profile-img"
                  src={profileImg}
                  alt="My Profile"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Intro;
