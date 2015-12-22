'use strict';

const mergeSorted = (a, b) => {
  const m = a.length, n = b.length;
  let c = new Array(m + n);
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

const reduce = (array, fn, defaultValue) => {
  while (array.length > 1) {
    for (let i = 1; i < array.length; i ++) {
      array.splice(i - 1, 2, fn(array[i - 1], array[i]));
    }
  }
  return array.length ? array[0] : defaultValue;
};

module.exports = a => reduce(a.map(e => [e]), mergeSorted, []);
