import React from 'react';
import ItemList from './ItemList.js';
// import { Card } from 'react-bootstrap';

class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterFaygoList: masterItemList.sort((a, b) => (a.name > b.name ? 1 : -1)),
      selectedItem: null
    }
  }

  handleBuyClick = (name) => {
    const selectedItem = this.state.masterFaygoList.filter(item => item.name === name)[0]
    const newMasterFaygoList = this.state.masterFaygoList.filter(item => item.name !== name)
    this.setState({
      masterFaygoList: newMasterFaygoList.concat({name: selectedItem.name, description: selectedItem.description, quantity: (selectedItem.quantity - 1 )}).sort((a, b) => (a.name > b.name ? 1 : -1)),
      selectedItem: null
    })
  }

  //props.onEditTicket({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: ticket.id})

  handleRestockClick = (name) => {
    const selectedItem = this.state.masterFaygoList.filter(item => item.name === name)[0]
    const newMasterFaygoList = this.state.masterFaygoList.filter(item => item.name !== name)
    this.setState({
      masterFaygoList: newMasterFaygoList.concat({name: selectedItem.name, description: selectedItem.description, quantity: (selectedItem.quantity + 1 )}).sort((a, b) => (a.name > b.name ? 1 : -1)),
      selectedItem: null
    })
  }

  render() {
    return (
      <ItemList faygoList={this.state.masterFaygoList}
      onBuyClickFunc={this.handleBuyClick}
      onRestockClickFunc={this.handleRestockClick}/>
    )
  }
}

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

export default ItemControl;