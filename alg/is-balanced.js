'use strict';

const newArray = require('../util/new-array');

const brackets = ['()', '[]', '{}'];
const n = brackets.length;
const getPart = c => {
  for (let i = 0; i < n; i++) {
    const j = brackets[i].indexOf(c);
    if (j >= 0) {
      return {
        kind: i,
        value: 1 - j * 2
      };
    }
  }
  return null;
};

module.exports = source => {
  const v = newArray(n, 0);
  for (let k = 0; k < source.length; k++) {
    const part = getPart(source[k]);
    if (!part || (v[part.kind] += part.value) < 0) {
      return false;
    }
  }
  return v.every(x => x === 0);
};
