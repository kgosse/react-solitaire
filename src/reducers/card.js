import * as Action from '../actions/card';

const card = (state, action) => {
  switch (action.type) {
    case Action.CARD_TURNUP:
      return Object.assign({}, state, {
        turnedUp: true
      });
    case Action.CARD_TURNDOWN:
      return Object.assign({}, state, {
        turnedUp: false
      });
    default:
      return state;
  }
};

export default card;

