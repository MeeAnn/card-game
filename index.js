'use strict';

const config = require('config');
const { generateDeck, shuffleDeck } = require('./src/deck');
const { dealDeckFactory, discardOddCards } = require('./src/deal-types');
const { readFightingCards } = require('./src/game');
const { compareValues, displayRoundWinner, displayScores } = require('./src/scores');

/* - - - - -  T A S K S / R U L E S - - - - -
1. Create a deck of cards and shuffle it ✓ --> deck.js
2. Deal the cards between 2 players (Half-Half or One-By-One) ✓ --> deal-types.js
3. Play the game: higher card value wins, lower loses, draw = no points for any player ✓ --> game.js, scores.js
4. Display the players score and result of each round ✓ --> scores.js
5. When hand is empty display who won the game ✓
6. Test the whole thing using unit tests ✗
*/

const { figures, suits, dealType } = config;

function game() {
  const deck = generateDeck({ figures, suits });
  const shuffledDeck = shuffleDeck(deck);

  const dealDeck = dealDeckFactory(dealType);
  const finalDeck = discardOddCards(shuffledDeck);

  const { player1Cards, player2Cards } = dealDeck(finalDeck);
  const scores = { player1: 0, player2: 0 };
  let roundCount = 0;

  while (roundCount < player1Cards.length) {
    const fightingCards = readFightingCards(roundCount, { player1Cards, player2Cards });
    const deckLength = [player1Cards.length, player2Cards.length];
    console.log(deckLength);
    const result = compareValues(fightingCards);
    if (result > 0) scores.player1 += 1;
    else if (result < 0) scores.player2 += 1;
    displayRoundWinner(result);
    displayScores(scores);
    roundCount += 1;
  }
}

game();
process.exit(0);
