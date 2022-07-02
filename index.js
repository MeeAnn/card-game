'use strict';

const config = require('config');
const { generateDeck, shuffleDeck } = require('./src/deck');
const { dealDeckFactory, makeDeckEven } = require('./src/deal-types');
const { readFightingCards, discardUsedCards } = require('./src/game');
const { compareValues, pointGiver, displayScores } = require('./src/scores');
const { displayWinner } = require('./src/display-winner');

/* - - - - -  T A S K S / R U L E S - - - - -
1. Create a deck of cards and shuffle it ✓ --> deck.js
2. Deal the cards between 2 players (Half-Half or One-By-One) ✓ --> deal-types.js
3. Play the game: higher card value wins, lower loses, draw = no points for any player ✓ --> game.js, scores.js
4. Display the players score and result of each round ✓ --> scores.js
5. When hand is empty display who won the game ✓ --> display-winner.js
6. Test the whole thing using unit tests ✗
*/

const { figures, suits, dealType } = config;

const deck = generateDeck({ figures, suits });
const shuffledDeck = shuffleDeck(deck);

const dealDeck = dealDeckFactory(dealType);
makeDeckEven(shuffledDeck);
const { player1Cards, player2Cards } = dealDeck(shuffledDeck);

let scores = { player1Score: 0, player2Score: 0 };

while (player1Cards.length) {
  const fightingCards = readFightingCards({ player1Cards, player2Cards });
  // console.log(fightingCards);
  const result = compareValues(fightingCards);
  scores = pointGiver(result, scores);
  displayScores(scores);
  discardUsedCards({ player1Cards, player2Cards });
}
displayWinner(scores);

process.exit(0);
