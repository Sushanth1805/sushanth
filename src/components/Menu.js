import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import pizzaImage from './images/pizza.jpg';
import burgerImage from './images/burger.jpg';
import saladImage from './images/salad.jpg';

import MyCollapsible from './MyCollapsible';
import 'bootstrap/dist/css/bootstrap.min.css';
const Menu = () => {
  const foodItems = [
    { id: 1, name: 'Pizza', description: 'Delicious cheesy pizza.', image: pizzaImage },
    { id: 2, name: 'Burger', description: 'Juicy burger with all the fixings.', image: burgerImage },
    { id: 3, name: 'Salad', description: 'Fresh and healthy salad.', image: saladImage },
   
  ];

  return (
    <div className="bg-light">
      <h1 className="text-center my-4">Welcome to the Food Website</h1>
      <Container>
        <Row>
          {foodItems.map((item) => (
            <Col key={item.id} md={4} className="mb-4 mt-4">
              <Card className="bg-card text-bg-info mb-3 bg-darken-sm">
                <Card.Img variant="top" src={item.image} alt={item.name} className="wt-4"/>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <MyCollapsible />
              </Card>
            </Col>
          ))}
        
        </Row>
      </Container>
    </div>
  );
};

export default Menu;