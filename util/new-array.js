'use strict';

module.exports = (length, fillWith) => {
  let newArray = new Array(length);
  const fillWithFn = typeof fillWith === 'function' ?
    fillWith :
    () => fillWith;
  for (let i = 0; i < length; i++) {
    newArray[i] = fillWithFn(i);
  }
  return newArray;
};
