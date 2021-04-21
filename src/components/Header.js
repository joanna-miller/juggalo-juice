import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

function Header() {
  return (
    <Jumbotron>
      <Container>
        <h1 style={{textAlign: 'center'}}>Juggalos R' Us</h1>
      </Container>
    </Jumbotron>
  );
}

export default Header;