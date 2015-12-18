'use strict';

const newArray = require('../util/new-array');

const inc = (numbers, counts) => {
  const n = numbers.length;
  for (let i = n - 1; i >= 0; i--) {
    numbers[i]++;
    if (numbers[i] < counts[i]) {
      return true;
    }
    numbers[i] = 0;
  }
  return false;
};

module.exports = arrays => {
  const getLength = x => x.length;
  arrays = arrays.filter(getLength);
  const n = arrays.length;
  if (!n) {
    return [];
  }
  let lengths = arrays.map(getLength);
  let keys = newArray(n, 0);
  let combinations = [];
  for (;;) {
    combinations.push(arrays.map((array, i) => array[keys[i]]));
    if (!inc(keys, lengths)) {
      break;
    }
  }
  return combinations;
};
