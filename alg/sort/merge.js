'use strict';

const reduce = require('../../util/reduce');

const mergeSorted = (a, b) => {
  const m = a.length, n = b.length;
  const c = new Array(m + n);
  for (let i = 0, j = 0, k = 0; ; k++) {
    if (a[i] < b[j]) {
      c[k] = a[i];
      i++;
      if (i === m) {
        return c.slice(0, k + 1).concat(b.slice(j));
      }
    } else {
      c[k] = b[j];
      j++;
      if (j === n) {
        return c.slice(0, k + 1).concat(a.slice(i));
      }
    }
  }
};

module.exports = a => reduce(a.map(e => [e]), mergeSorted, []);
