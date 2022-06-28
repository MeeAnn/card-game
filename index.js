'use strict';

const shuffledDeck = require('./deck');

/* - - - - -  T A S K S / R U L E S - - - - -
1. Create a deck of cards and shuffle it ✓ --> deck.js
2. Deal the cards between 2 players (Half-Half or One-By-One) ✓
3. Play the game: higher card value wins, lower loses, draw = no points for any player ✓
4. Display the players score and result of each round ✓
5. When hand is empty display who won the game ✓
6. Test the whole thing using unit tests ✗
*/

console.log(shuffledDeck);
process.exit(0);

// Players:
const p1 = { startDeck: [], score: 0, poolDeck: [] };
const p2 = { startDeck: [], score: 0, poolDeck: [] };

// Shuffles any array (Fisher–Yates shuffle)
function shuffle(array) {
  let currentIndex = array.length;
  let oldPlacement;
  let newPlacement;

  while (currentIndex) {
    newPlacement = Math.floor(Math.random() * currentIndex--);

    oldPlacement = array[currentIndex];
    array[currentIndex] = array[newPlacement];
    array[newPlacement] = oldPlacement;
  }
  return array;
}

// Checks whether the deck is even
function isNumberEven(number) {
  if (number % 2 === 0) return true;
}

// Half-half deck deal
function dealEvenly() {
  if (isNumberEven(deck.length)) {
    const half = deck.length / 2;
    p1.startDeck = deck.slice(0, half);
    p2.startDeck = deck.slice(half, deck.length);
  } else {
    deck.pop(); // If the deck is uneven, one card is discarded
    dealEvenly();
  }
}

// One-by-One deck deal (no. 1)
function dealOneByOne() {
  if (isEven()) {
    for (let i = 0; i < deck.length; i += 2) {
      p1.startDeck.unshift(deck[i]);
      p2.startDeck.unshift(deck[i + 1]);
    }
  } else {
    deck.pop();
    dealOneByOne();
  }
}

// One-by-One deck deal (no. 2)
function dealOneByOneAlt() {
  if (isEven()) {
    const half = deck.length / 2;
    for (let i = 0; i < half; i++) {
      p1.startDeck.unshift(deck.shift());
      p2.startDeck.unshift(deck.shift());
    }
  } else {
    deck.pop();
    dealOneByOneAlt();
  }
}

// Checks if player has cards 'in hand', if not, shuffles the 'won cards deck' (if empty - game ends)
function prepareCards(player) {
  if (player.startDeck.length === 0 && player.poolDeck.length !== 0) {
    shuffle(player.poolDeck);
    while (player.poolDeck.length) {
      player.startDeck.push(player.poolDeck.pop());
    }
  } else if (player.startDeck.length === 0 && player.poolDeck.length === 0) {
    displayWinner();
    process.exit(0);
  }
}

// Takes one card from each players' hand, saves it to the 'win pool' and starts the fight
function fight() {
  prepareCards(p1);
  prepareCards(p2);
  const p1Card = p1.startDeck.shift();
  const p2Card = p2.startDeck.shift();
  pool.push(p1Card, p2Card);
  console.log(p1Card, 'vs', p2Card);
  const result = p1Card[2] - p2Card[2];
  judge(result);
}

// Judges who won the fight
function judge(result) {
  if (result > 0) {
    console.log('Player 1 scores a point!');
    p1.score++;
    console.log(`Score:  ${p1.score} : ${p2.score}`);
    while (pool.length) {
      p1.poolDeck.push(pool.pop());
    }
    pool.length = 0;
  } else if (result < 0) {
    console.log('Player 2 scores a point!');
    p2.score++;
    console.log(`Score:  ${p1.score} : ${p2.score}`);
    while (pool.length) {
      p2.poolDeck.push(pool.pop());
    }
    pool.length = 0;
  } else if (result === 0) {
    console.log('This means war!');
    console.log(`Score:  ${p1.score} : ${p2.score}`);
    fight();
  } else console.log('Something went wrong. :(');
}

// Decides who won the whole game based on score
function displayWinner() {
  if (p1.score > p2.score) {
    console.log('Player 1 won!');
  } else if (p1.score < p2.score) {
    console.log('Player 2 won!');
  } else {
    console.log('Draw, or is it?');
  }
}

// - - - - - - G A M E  S T A R T - - - - - - - - //
const deck = shuffle(wholeDeck);
const pool = [];
dealEvenly();
// dealOneByOne();
// dealOneByOneAlt();
for (;;) fight();
// - - - - - - G A M E  E N D S - - - - - - - - - //
