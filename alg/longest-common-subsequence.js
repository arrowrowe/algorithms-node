'use strict';

const newArray = require('../util/new-array');
const maxBy = require('../util/max-by');

module.exports = (X, Y) => {
  const n = X.length, m = Y.length;
  let memo = newArray(n + 1, () => newArray(m + 1, null));
  const lcs = (r, s) => {
    if (memo[r][s]) {
      return memo[r][s];
    }
    let ret;
    if (r === 1) {
      ret = Y.slice(0, s).indexOf(X[0]) >= 0 ? [X[0]] : [];
    } else if (s === 1) {
      ret = X.slice(0, r).indexOf(Y[0]) >= 0 ? [Y[0]] : [];
    } else {
      ret = X[r - 1] === Y[s - 1] ?
        lcs(r - 1, s - 1).concat([X[r - 1]]) :
        maxBy(sub => sub.length, [
          lcs(r, s - 1),
          lcs(r - 1, s)
        ]);
    }
    return memo[r][s] = ret;
  };
  return lcs(n, m);
};
