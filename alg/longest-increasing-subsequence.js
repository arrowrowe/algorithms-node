'use strict';

module.exports = X => {
  const N = X.length;
  let P = new Array(N);
  let M = new Array(N + 1);
  let L = 0;
  for (let i = 0; i < N; i++) {
    let newL = M.findIndex(m => X[m] > X[i]);
    if (newL === -1) {
      newL = ++L;
    }
    P[i] = M[newL - 1];
    M[newL] = i;
  }
  let S = new Array(L);
  for (let i = L - 1, k = M[L]; i >= 0; i--, k = P[k]) {
    S[i] = X[k];
  }
  return S;
};
