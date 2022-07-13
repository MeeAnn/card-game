'use strict';

const DEAL_TYPES = {
  OneByOne: 'one-by-one',
  Half: 'half',
};

function discardOddCards(deck) {
  if (deck.length % 2 !== 0) {
    const tmpDeck = [...deck];
    tmpDeck.pop();
    return tmpDeck;
  }
  return deck;
}

function dealOneByOne(deck) {
  const cards = { player1Cards: [], player2Cards: [] };
  for (let i = 0; i < deck.length; i += 2) {
    cards.player1Cards.push(deck[i]);
    cards.player2Cards.push(deck[i + 1]);
  }
  return cards;
}

function dealByHalf(deck) {
  const half = deck.length / 2;
  const cards = { player1Cards: [], player2Cards: [] };
  cards.player1Cards = (deck.slice(0, half));
  cards.player2Cards = (deck.slice(half));
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

module.exports = { dealDeckFactory, DEAL_TYPES, discardOddCards };
