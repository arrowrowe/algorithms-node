'use strict';

module.exports = number => {
  let src = number.toString();
  let maxIndex = src.length - 1;
  if (maxIndex > 0) {
    let max = Number(src[maxIndex]);
    for (let i = src.length - 2; i >= 0; i--) {
      if (Number(src[i]) < max) {
        return Number(src.substr(0, i) + src.charAt(maxIndex) + (src.substring(i, maxIndex) + src.substr(maxIndex + 1)).split('').sort().join(''));
      }
    }
  }
  return number;
};
