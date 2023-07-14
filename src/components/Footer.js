import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
    return (
      <footer className="footer mt-auto py-3">
        <Container>
          <Row>
            <Col>
              <p>© 2023 Your Website</p>
            </Col>
            <Col className="text-right">
              <p>Terms of Service | Privacy Policy</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  };
  
  export default Footer;
  