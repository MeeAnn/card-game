'use strict';

const config = require('config');

const { figures, suits } = config;
const all = [];

suits.forEach(suit => {
  figures.forEach(figure => {
    all.push({
      suit,
      ...figure,
      rand: Math.random().toFixed(8),
    });
  });
});

all.sort((a, b) => a.rand - b.rand);

// const mapped = suits.map(suit => [`${suit}-${suit}`]); ??
const shuffledDeck = all.map(({ suit, name, value }) => ({ suit, name, value }));

module.exports = shuffledDeck;
