import React, { Component } from 'react';

import Card from './Card';

class Remainder extends Component {
  
  render() {
    let card = null;
    
    if (this.props.card)
      card = <Card card={this.props.card}></Card>;
    
    return (
      <div className="pile" onClick={() => this.props.click()}>
        {card}
      </div>
    )
  }
}

export default Remainder;