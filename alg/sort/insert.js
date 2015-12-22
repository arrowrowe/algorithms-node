'use strict';

module.exports = a => {
  for (let l = 1; l < a.length; l++) {
    const v = a[l];
    let i = 0;
    for (; i < l; i++) {
      if (a[i] > v) {
        // Swap [i, l) and l
        for (let j = l; j > i; j--) {
          a[j] = a[j - 1];
        }
        a[i] = v;
        break;
      }
    }
  }
  return a;
};
