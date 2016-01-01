'use strict';

const quickAdjust = require('../quick-adjust');

const q = module.exports = (a, lo, hi) => {
  lo = lo || 0;
  hi = hi === undefined ? a.length : hi;
  if (hi - lo <= 1) {
    return a;
  }
  let pI = quickAdjust(a, Math.floor((lo + hi) / 2), lo, hi);
  q(a, lo, pI);
  q(a, pI + 1, hi);
  return a;
};
