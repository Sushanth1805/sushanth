import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const offers = [
    {
      title: 'Special Offer 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Get Offer',
      buttonVariant: 'primary',
    },
    {
      title: 'Special Offer 2',
      description: 'Praesent consectetur diam in nisi ultricies, sit amet vulputate erat mollis.',
      buttonText: 'Get Offer',
      buttonVariant: 'danger',
    },
    {
      title: 'Special Offer 3',
      description: 'Etiam tristique mauris id nulla tempus, vitae tempus erat rhoncus.',
      buttonText: 'Get Offer',
      buttonVariant: 'success',
    },
  ];

  return (
    <Container className="">
      <h1>Welcome to our Food Website</h1>
      <Row>
        {offers.map((offer, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="card text-bg-info mb-3">
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
                <Button variant={offer.buttonVariant}>{offer.buttonText}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="bg-image">
      <Container className="d-flex flex-column justify-content-center align-items-center text-center h-100">
        <h1>Welcome to Our Food Project</h1>
        <p>Discover the most delicious dishes from around the world.</p>
        <Button variant="primary">Explore Now</Button>
      </Container>
    </div>
    </Container>
  );
};

export default Home;
