'use strict';

module.exports = X => {
  // TODO: Rewrite.
  const N = X.length;
  let P = new Array(N);
  let M = new Array(N + 1);
  let L = 0;
  for (let i = 0; i < N; i++) {
    let lo = 1;
    let hi = L;
    while (lo <= hi) {
      let mid = Math.ceil((lo + hi) / 2);
      if (X[M[mid]] < X[i]) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    let newL = lo;
    P[i] = M[newL - 1];
    M[newL] = i;
    if (newL > L) {
      L = newL;
    }
  }
  let S = new Array(L);
  let k = M[L];
  for (let i = L - 1; i >= 0; i--) {
    S[i] = X[k];
    k = P[k];
  }
  return S;
};
