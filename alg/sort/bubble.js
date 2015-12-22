'use strict';

module.exports = (a, g, k) => {
  g = g || 1;
  k = k || 0;
  for (;;) {
    let still = true;
    for (let i = k; i < a.length; i += g) {
      if (a[i - g] > a[i]) {
        still = false;
        let t = a[i];
        a[i] = a[i - g];
        a[i - g] = t;
      }
    }
    if (still) {
      break;
    }
  }
  return a;
};
