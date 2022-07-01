'use strict';

const config = require('config');
const { generateDeck, shuffleDeck } = require('./src/deck');
const { dealDeckFactory, makeDeckEven } = require('./deal-types');
const {
  showFightingCards, compareValues, pointGiver, displayScores, discardUsedCards
} = require('./game');
const { displayWinner } = require('./display-winner');

/* - - - - -  T A S K S / R U L E S - - - - -
1. Create a deck of cards and shuffle it ✓ --> deck.js
2. Deal the cards between 2 players (Half-Half or One-By-One) ✓ --> deal-types.js
3. Play the game: higher card value wins, lower loses, draw = no points for any player ✓
4. Display the players score and result of each round ✓ --> game.js
5. When hand is empty display who won the game ✓
6. Test the whole thing using unit tests ✗
*/

const { figures, suits, dealType } = config;

const deck = generateDeck({ figures, suits });
const shuffledDeck = shuffleDeck(deck);

const dealDeck = dealDeckFactory(dealType);
makeDeckEven(shuffledDeck);
const { player1Cards, player2Cards } = dealDeck(shuffledDeck);

while (player1Cards.length) {
  const scores = { player1Score: 0, player2Score: 0 };
  const fightingCards = showFightingCards({ player1Cards, player2Cards });
  const result = compareValues(fightingCards);
  pointGiver(result, scores);
  displayScores(scores);
  discardUsedCards({ player1Cards, player2Cards });
}
// displayWinner(scores);

process.exit(0);
