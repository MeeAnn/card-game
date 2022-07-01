'use strict';

function showFightingCards({ player1Cards, player2Cards }) {
  const player1Card = player1Cards[0];
  const player2Card = player2Cards[0];
  return { player1Card, player2Card };
}

function compareValues({ player1Card, player2Card }) {
  return player1Card.value - player2Card.value;
}

function pointGiver(result, { player1Score, player2Score }) {
  if (result > 0) {
    console.log('Player1 scores a point!');
    player1Score++;
    return { player1Score, player2Score };
  } if (result < 0) {
    console.log('Player2 scores a point!');
    player2Score++;
    return { player1Score, player2Score };
  } if (result === 0) {
    console.log('Draw. Keep playing!');
  } else console.log('The value is invalid.');
  return { player1Score, player2Score };
}

function displayScores({ player1Score, player2Score }) {
  console.log(`Player1 score: ${player1Score}, Player2 score: ${player2Score}`);
}

function discardUsedCards({ player1Cards, player2Cards }) {
  player1Cards.shift();
  player2Cards.shift();
  return { player1Cards, player2Cards };
}

module.exports = {
  showFightingCards, compareValues, pointGiver, displayScores, discardUsedCards
};
