import {REMAINDER_NEW_GAME, REMAINDER_CLICK} from '../actions/remainder';
import {CARD_TURNDOWN, CARD_TURNUP} from '../actions/card';
import * as CardService from '../services/card';

import Card from './card';

const initialState = {
  cards: [],
  waste: []
};

export default function remainder(state = initialState, action) {
  switch (action.type) {
    case REMAINDER_NEW_GAME:
      return {
        cards: action.cards.slice(28),
        waste: []
      };
    case REMAINDER_CLICK:
      return Object.assign({}, state, flipTopCardToWaste(state.cards, state.waste));
    default:
      return state;
  }
}

function flipTopCardToWaste(cards, waste) {
  let remainder = {};
  let card = CardService.topCard(cards);
  if (card === undefined) {
    remainder.waste = [];
    const action = {
      type: CARD_TURNDOWN
    };
    remainder.cards = [...waste].reverse().map((item) => Card(item, action));
  }
  else {
    const action = {
      type: CARD_TURNUP
    };
    remainder.cards = cards.filter((item) => item !== card);
    remainder.waste = [...waste, Card(card, action)];
  }
  return remainder;
}

