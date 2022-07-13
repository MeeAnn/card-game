'use strict';

function readFightingCards(round, { player1Cards, player2Cards }) {
  const player1Card = player1Cards[round - 1];
  const player2Card = player2Cards[round - 1];
  return { player1Card, player2Card };
}

module.exports = { readFightingCards };
