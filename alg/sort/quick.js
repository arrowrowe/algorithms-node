'use strict';

const quickAdjust = require('../quick-adjust');

const _quickSort = (array, lo, hi) => {
  if (hi - lo <= 1) {
    return array;
  }
  const pI = quickAdjust(array, Math.floor((lo + hi) / 2), lo, hi);
  _quickSort(array, lo, pI);
  _quickSort(array, pI + 1, hi);
  return array;
};

module.exports = array => _quickSort(array, 0, array.length);
