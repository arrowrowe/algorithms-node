'use strict';

module.exports = (array, target) => {
  let lower = 0;
  let upper = array.length;
  // Ensure target's index belongs to [lower, upper)
  while (upper > lower) {
    let middle = Math.floor((lower + upper) / 2);
    switch (Math.sign(target - array[middle])) {
      case  1: lower = middle + 1;  break;
      case -1: upper = middle;      break;
      default: return middle;
    }
  }
  return -1;
};
