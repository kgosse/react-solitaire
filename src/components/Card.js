/**
 * Created by kevin on 14/05/2016.
 */

import React, { PropTypes } from 'react';

let Card = ({card}) => (
  <div>
    { card.turnedUp ?
        <img src={`public/assets/img/${card.image}`} /> :
        <div className="turned-down-card"></div>
    }
  </div>
);

Card.PropTypes = {
  card: React.PropTypes.shape({
    turnedUp: React.PropTypes.bool,
    image: React.PropTypes.string
  }).isRequired
};

export default Card;