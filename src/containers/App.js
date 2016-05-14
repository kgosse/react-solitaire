import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as deckActions from '../actions/deck';
import * as remainderActions from '../actions/remainder';
import * as CardService from '../services/card';

import Remainder from '../components/Remainder';
import Waste from '../components/Waste';
import NoPile from '../components/NoPile';

class App extends Component {

  constructor(props) {
    super(props);

  }
  
  _handleRemainderClick = () => {
    this.props.dispatch(remainderActions.click());
  };
  
  componentWillMount() {
    let cards = CardService.shuffled();
    this.props.dispatch(deckActions.newGame(cards));
    this.props.dispatch(remainderActions.newGame(cards));
  }
  
  render() {
    
    let foundations = [];
    for (let i = 0; i < 4; ++i) {
      let foundation = (
        <div className="pile" key={i}>
          <div></div>
        </div>
      );
      foundations.push(foundation);
    }
    
    let tableaux = [];
    for (let i = 0; i < 7; ++i) {
      let tableau = (
        <div className="pile" key={i}>
          <div></div>
        </div>
      );
      tableaux.push(tableau);
    }
    
    return (
      <div>
        <p>
          <button>New Game</button>&nbsp;
          Score: 0
        </p>
        <div className="top-row">
          {foundations}
          <NoPile></NoPile>
          <NoPile></NoPile>
          <Remainder card={CardService.topCard(this.props.remainder.cards)} click={this._handleRemainderClick}></Remainder>
          <Waste card={CardService.topCard(this.props.remainder.waste)}></Waste>
        </div>
        <div className="tableau-row">
          <NoPile></NoPile>
          {tableaux}
        </div>
      </div>
    );
  }
}

function mapStateToProps({deck, remainder}) {
  return {
    deck,
    remainder
  }
}

App = connect(mapStateToProps)(App);

export default App;
