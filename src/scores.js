'use strict';

function compareValues({ player1Card, player2Card }) {
  return player1Card.value - player2Card.value;
}

function displayRoundWinner(result) {
  if (result > 0) {
    roundWinner('Player1');
  } if (result < 0) {
    roundWinner('Player2');
  } if (result === 0) {
    console.log('Draw. Keep playing!');
  }
}
function roundWinner(player) {
  console.log(`${player} scores a point!`);
}

function displayScores(scores) {
  console.log(scores);
}
module.exports = { compareValues, displayRoundWinner, displayScores };
