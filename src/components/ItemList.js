import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'

function ItemList(props) {
  return(
    <Card>
      <Card.Header style={{textAlign: 'center', background: 'linear-gradient(lime, black)'}}>
        <h3>Juggalo Juice</h3>
      </Card.Header>
      <Card.Body style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'black'}}>
        {props.faygoList.map((faygo, index) =>
          <Item clickedBuyFunc={ props.onBuyClickFunc }
          clickedRestockFunc={ props.onRestockClickFunc }
          name={faygo.name}
          description={faygo.description}
          quantity={faygo.quantity}
          key={index}
          id={index}/>
        )}
      </Card.Body>
    </Card>
  );
}

ItemList.propTypes = {
  onBuyClickFunc: PropTypes.func,
  faygoList: PropTypes.array,
  onRestockClickFunc: PropTypes.func
}

export default ItemList;