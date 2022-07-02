'use strict';

function displayWinner({ player1Score, player2Score }) {
  if (player1Score > player2Score) {
    console.log(`Player 1 wins with the score: ${player1Score}:${player2Score}`);
  } else if (player1Score < player2Score) {
    console.log(`Player 2 wins with the score: ${player2Score}:${player1Score}`);
  } else if (player1Score === player2Score) {
    console.log(`There is a draw! The score: ${player1Score}:${player2Score}`);
  } else console.log('Something went wrong.');
}

module.exports = { displayWinner };
