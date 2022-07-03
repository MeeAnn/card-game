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
  while (deck.length) {
    cards.player1Cards.push(deck.shift());
    cards.player2Cards.push(deck.shift());
  }
  return cards;
}

function dealByHalf(deck) {
  const half = deck.length / 2;
  const cards = { player1Cards: [], player2Cards: [] };
  cards.player1Cards = (deck.slice(0, half));
  cards.player2Cards = (deck.slice(half, deck.length));
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
