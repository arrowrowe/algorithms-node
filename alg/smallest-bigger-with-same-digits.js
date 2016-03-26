'use strict';

module.exports = number => {
  const src = number.toString();
  const maxIndex = src.length - 1;
  if (maxIndex > 0) {
    const max = Number(src[maxIndex]);
    for (let i = src.length - 2; i >= 0; i--) {
      if (Number(src[i]) < max) {
        return Number(src.substr(0, i) + src.charAt(maxIndex) + (src.substring(i, maxIndex) + src.substr(maxIndex + 1)).split('').sort().join(''));
      }
    }
  }
  return number;
};
