'use strict';

function generateDeck({ figures, suits }) {
  const deck = [];
  suits.forEach(suit => {
    figures.forEach(figure => {
      deck.push({
        suit,
        ...figure,
      });
    });
  });
  return deck;
}

function shuffleDeck(deck) {
  return deck
    .map(card => ({ card, random: Math.random().toFixed(8) }))
    .sort((a, b) => a.random - b.random)
    .map(({ card }) => ({ ...card }));
}

module.exports = { generateDeck, shuffleDeck };
