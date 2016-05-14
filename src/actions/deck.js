export const DECK_NEW_GAME = '@@deck/NEW_GAME';

/**
 * Return an action in order to regenerate the deck
 * 
 * @param cards
 * @returns {{type: string, cards: *}}
 */
export function newGame(cards) {
  return {
    type: DECK_NEW_GAME,
    cards
  }
}