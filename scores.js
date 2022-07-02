'use strict';

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

module.exports = { compareValues, pointGiver, displayScores };
