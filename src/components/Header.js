import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

function Header() {
  return (
    <Jumbotron style={{background: 'linear-gradient(red,yellow)'}}>
      <Container style={{textAlign: 'center', color: 'white'}}>
        <h1>Juggalos R' Us</h1>
        <h5>Faygo for Family Friends and Foes</h5>
      </Container>
    </Jumbotron>
  );
}

export default Header;