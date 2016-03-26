'use strict';

module.exports = (length, fillWith) => {
  const newArray = new Array(length);
  const fillWithFn = typeof fillWith === 'function' ?
    fillWith :
    () => fillWith;
  for (let i = 0; i < length; i++) {
    newArray[i] = fillWithFn(i, newArray[i - 1], newArray);
  }
  return newArray;
};
