import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from './images/about.jpg'
const About = () => {
  return (
    <Container className="mt-5 .bg-light .bg-lighten-md ">
      <Row>
        <Col md={6}>
          <Image src={myImage} className="mt-5 rounded mx-auto d-block" />
        </Col>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec sem sed dui malesuada interdum. Fusce
            luctus tortor in ipsum scelerisque fermentum. Cras scelerisque sagittis scelerisque. Duis maximus sapien
            non augue iaculis, eget pharetra purus dictum. Nulla ut sem ullamcorper, tempor purus vitae, pellentesque
            metus. In nec eleifend tellus. Donec aliquam odio quis lectus tincidunt, id volutpat sem consequat.
          </p>
          <p>
            Phasellus malesuada, lacus ut tristique volutpat, purus magna bibendum nibh, nec condimentum tellus elit eu
            lacus. Sed dictum dui ac est commodo, id feugiat nibh sagittis. Curabitur pharetra, tellus nec tincidunt
            placerat, neque turpis laoreet neque, sed lobortis ex metus ac elit.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
