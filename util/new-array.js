'use strict';

module.exports = (length, fillWith) => {
  let newArray = new Array(length);
  for (let i = 0; i < length; i++) {
    newArray[i] = fillWith;
  }
  return newArray;
};
