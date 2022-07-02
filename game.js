'use strict';

function readFightingCards({ player1Cards, player2Cards }) {
  const player1Card = player1Cards[0];
  const player2Card = player2Cards[0];
  return { player1Card, player2Card };
}

function discardUsedCards({ player1Cards, player2Cards }) {
  player1Cards.shift();
  player2Cards.shift();
  return { player1Cards, player2Cards };
}

module.exports = { readFightingCards, discardUsedCards };
