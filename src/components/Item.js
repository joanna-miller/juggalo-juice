import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

function Item(props){
  return(
    <Card style={{ width: '18rem', margin: '20px' }}>
      <Card.Header style={{color: 'purple', background: `linear-gradient(235deg, hotpink, cyan)`}}>
        <h3>{props.name}</h3>
      </Card.Header>
      <Card.Body>
        <p><b>Description: </b>{props.description}</p>
        <p><b>Quantity in Stock: </b>{props.quantity}</p>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button style={{marginRight: 25, background: `linear-gradient(45deg, hotpink, cyan)`}} variant="outline-primary" onClick = {() => props.clickedBuyFunc(props.name)}>Buy</Button>
          <Button style={{marginLeft: 25, background: `linear-gradient(235deg, hotpink, cyan)`}}variant="outline-primary" onClick = {() => props.clickedRestockFunc(props.name)}>Restock</Button>
        </div>
      </Card.Body>
    </Card>
  );
}


Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.number,
  clickedBuyFunc: PropTypes.func,
  clickedRestockFunc: PropTypes.func,
};

export default Item;