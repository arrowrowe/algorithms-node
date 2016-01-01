'use strict';

const quickAdjust = require('./quick-adjust');

const _select = (array, rank, lo, hi) => {
  let pI = quickAdjust(array, Math.floor((lo + hi) / 2), lo, hi);
  return pI === rank ? array[pI] :
    pI > rank ? _select(array, rank, lo, pI) : _select(array, rank, pI + 1, hi);
};

module.exports = (array, rank) => {
  return 0 <= rank && rank < array.length ?
    _select(array, rank, 0, array.length) :
    null;
};
