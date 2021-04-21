import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap'

function Item(props){
  return(
    <Card style={{ width: '18rem', margin: '20px' }}>
      <Card.Header>
        <h3>{props.name}</h3>
      </Card.Header>
      <Card.Body>
        <p><b>Description: </b>{props.description}</p>
        <p><b>Quantity in Stock: </b>{props.quantity}</p>
        <button>Buy</button>
      </Card.Body>
    </Card>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default Item;