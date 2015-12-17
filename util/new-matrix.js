'use strict';

const newArray = require('./new-array');

module.exports = (size, fillWith) => {
  const fillWithFn = typeof fillWith === 'function' ?
    fillWith :
    () => fillWith;
  return newArray(size, (i, lastRow, rows) => newArray(size, (j, lastElement, row) => fillWithFn(i, j, lastElement, lastRow, row, rows)));
};
