import {DECK_NEW_GAME} from '../actions/deck';

const initialState = [];

export default function DeckReducer(state = initialState, action) {
  switch (action.type) {
    case DECK_NEW_GAME:
      return action.cards;
    default:
      return state;
  }
}