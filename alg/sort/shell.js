'use strict';

const gaps = [701, 301, 132, 57, 23, 10, 4, 1];

const bubble = require('./bubble');

const sortWithGap = (a, g) => {
  for (let i = 0; i < g; i++) {
    bubble(a, g, i);
  }
  return a;
};

module.exports = a => {
  gaps.forEach(g => g < a.length && sortWithGap(a, g));
  return a;
};
