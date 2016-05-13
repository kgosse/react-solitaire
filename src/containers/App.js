import React, { Component } from 'react';

export default class App extends Component {
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
    
    let remainder = (
      <div className="pile">
        <div></div>
      </div>
    );
    
    let waste = (
      <div className="pile">
        <div></div>
      </div>
    );
    
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
          <div className="no-pile"></div>
          <div className="no-pile"></div>
          {remainder}
          {waste}
        </div>
        <div className="tableau-row">
          <div className="no-pile"></div>
          {tableaux}
        </div>
      </div>
    );
  }
}
