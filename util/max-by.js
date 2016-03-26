'use strict';

module.exports = (fn, array) => {
  if (array.length <= 1) {
    return array[0];
  }
  let maxValue = fn(array[0]);
  let maxIndex = 0;
  for (let i = 1; i < array.length; i++) {
    const newValue = fn(array[i]);
    if (newValue > maxValue) {
      maxValue = newValue;
      maxIndex = i;
    }
  }
  return array[maxIndex];
};
