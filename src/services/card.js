import * as lodashService from './lodash';
import Card from '../models/Card';

function unShuffled() {
  return lodashService.getUnshuffledCards(Card.ranksInImagesOrder, Card.suitsInImagesOrder).map((card) => new Card(card));
}

export function shuffled() {
  return lodashService.shuffle(unShuffled());
}

export function topCard(cards) {
  return cards[cards.length - 1];
}

export function removeCard(cards, card) {
  var index = cards.indexOf(card);
  cards.splice(index, 1);
}