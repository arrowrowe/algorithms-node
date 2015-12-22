'use strict';

module.exports = (array, fn, defaultValue) => {
  while (array.length > 1) {
    for (let i = 0; i < array.length - 1; i ++) {
      array[i] = fn(array[i], array.pop());
    }
  }
  return array.length ? array[0] : defaultValue;
};
