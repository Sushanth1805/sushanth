import React, { useState } from 'react';
import { Collapse, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyCollapsible = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="mx-3 my-3">
      <Button onClick={handleToggle} variant="primary" className="bg-dark ">Rupee 100</Button>
      <Collapse in={open}>
        <div>
          <h2>Free delivery todayyy</h2>
          <p>Press the button below to start ordering</p>
          <Button variant="danger" className="bg-dark ">Order</Button>
        </div>
      </Collapse>
    </div>
  );
};

export default MyCollapsible;
