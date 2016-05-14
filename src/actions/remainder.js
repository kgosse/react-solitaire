export const REMAINDER_NEW_GAME = '@@remainder/NEW_GAME';
export const REMAINDER_CLICK = '@@remainder/CLICK';

/**
 * Return an action in order to regenerate the remainder
 *
 * @param cards
 * @returns {{type: string, cards: *}}
 */
export function newGame(cards) {
  return {
    type: REMAINDER_NEW_GAME,
    cards
  }
}

/**
 * Return an action in order to handle the click on the remainder
 * 
 * @returns {{type: string}}
 */
export function click() {
  return {
    type: REMAINDER_CLICK
  }
}
