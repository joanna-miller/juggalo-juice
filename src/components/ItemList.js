import React from 'react';
import { Card } from 'react-bootstrap'
import Item from './Item.js'
import { MDBCol } from 'mdbreact';

const masterItemList = [
  {
    name: 'Cotton Candy',
    description: 'Every memory you’ve ever had while eating cotton candy will immediately come flowing back.',
    quantity: 10
  },
  {
    name: 'Rock & Rye',
    description: 'Like cream soda, but with a delicious ¿¿cherry, maybe?? twist.',
    quantity: 10
  },
  {
    name: 'Moon Mist',
    description: 'From a citrus spring located on the moon.',
    quantity: 10
  },
  {
    name: 'Raspberry Blueberry',
    description: 'The name says it all. For when you can’t decide between red and blue.',
    quantity: 10
  },
  {
    name: 'Redpop!',
    description: 'Packed with a hint of strawberry, and a whole lot more, this is one of the flavors that started it all.',
    quantity: 10
  },
  {
    name: 'Dr Faygo',
    description: 'With a perfect combination of flavors, this pop has exactly what you’d want to remedy your thirst.',
    quantity: 10
  },
  {
    name: 'Grape',
    description: "Nature's candy, but with a lot more pop.",
    quantity: 10
  },
  {
    name: 'Candy Apple',
    description: "Enjoy the same taste of a fresh candied apple without getting any of it stuck in your teeth.",
    quantity: 10
  },
  {
    name: '60/40',
    description: 'A 60%, 40% split between grapefruit and lime. You’ll have to figure out which is which.',
    quantity: 10
  },
  {
    name: 'Pineapple Watermelon',
    description: 'It’s almost as if scientists somehow combined the two fruits into one.',
    quantity: 10
  },
  {
    name: 'Peach',
    description: 'Each sip is like taking the first bite of a peach freshly picked from the orchard.',
    quantity: 10
  },
  {
    name: 'Ginger Ale!',
    description: 'That warm fuzzy feeling delivered to you in liquid form.',
    quantity: 10
  },
  {
    name: 'Root Beer',
    description: 'Like drinking the feeling of the outdoors on a cool summer day.',
    quantity: 10
  },
  {
    name: "Jazzin' Blues Berry!",
    description: 'Our blueberries listen to eight hours of sax solos before they make it into our bottles.',
    quantity: 10
  },
  {
    name: 'Black Cherry',
    description: 'At one point in every cherry’s lifespan, they go through a rebellious phase. That is precisely when we pick them.',
    quantity: 10
  },
]

function ItemList() {
  return(
    <Card>
      <Card.Header style={{textAlign: 'center'}}>
        <h3>Juggalo Juice</h3>
      </Card.Header>
      <Card.Body style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        {masterItemList.map((faygo, index) =>
          <Item name={faygo.name}
          description={faygo.description}
          quantity={faygo.quantity}
          key={index}/>
        )}
      </Card.Body>
    </Card>
  );
}

export default ItemList;