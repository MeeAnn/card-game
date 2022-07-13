'use strict';

function readFightingCards(round, { player1Cards, player2Cards }) {
  const player1Card = player1Cards[round];
  const player2Card = player2Cards[round];
  return { player1Card, player2Card };
}

module.exports = { readFightingCards };
