'use strict';

const swap = require('../../util/swap');

module.exports = (a, g, k) => {
  g = g || 1;
  k = k || 0;
  for (;;) {
    let still = true;
    for (let i = k; i < a.length; i += g) {
      if (a[i - g] > a[i]) {
        still = false;
        swap(a, i, i - g);
      }
    }
    if (still) {
      break;
    }
  }
  return a;
};
