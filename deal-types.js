'use strict';

const DEAL_TYPES = {
  OneByOne: 'one-by-one',
  Half: 'half',
};

function makeDeckEven(deck) {
  if (deck.length % 2 !== 0) {
    deck.pop();
  }
  return deck;
}

function dealOneByOne(deck) {
  const cards = { player1Cards: [], player2Cards: [] };
  for (let i = 0; i < deck.length / 2; i++) {
    cards.player1Cards.push(deck.shift());
    cards.player2Cards.push(deck.shift());
  }
  return cards;
}

function dealByHalf(deck) {
  const cards = { player1Cards: [], player2Cards: [] };
  cards.player1Cards.push(deck.slice(0, deck.length / 2));
  cards.player2Cards.push(deck.slice(deck.length / 2, deck.length));
  return cards;
}

function dealDeckFactory(dealType) {
  switch (dealType) {
    case DEAL_TYPES.OneByOne:
      return dealOneByOne;
    case DEAL_TYPES.Half:
      return dealByHalf;
    default:
      throw new Error('You have to choose how the cards will be dealt.');
  }
}

module.exports = { dealDeckFactory, DEAL_TYPES, makeDeckEven };
