import _ from 'lodash';

export function getUnshuffledCards(ranks, suits) {
  return _.chain(ranks)
        .map((rank)=> {
          return suits.map((suit)=> {
            return {
              suit,
              rank
            };
          });
        })
        .flatten()
        .value();
}

export function shuffle(data) {
  return _.shuffle(data);
}