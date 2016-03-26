'use strict';

module.exports = T => {
  const L = T.length;
  if (L === 0) {
    return () => 0;
  }
  const P = new Array(L);
  P[0] = 1;
  if (L > 1) {
    P[1] = T[0] === T[1] ? 2 : 1;
    for (let k = 2; k < L; k++) {
      let p = P[k - 1] + (k > P[k - 1] ? 1 : 0);
      for (; p <= k; p++) {
        if (T[k] !== T[k - p]) {
          P[k] = p;
          break;
        }
      }
      if (p > k) {
        P[k] = p;
      }
    }
  }
  return S => {
    const N = S.length;
    let k = 0;
    for (let i = 0; i < N;) {
      for (k = Math.max(0, k); k < L; k++) {
        if (T[k] !== S[i + k]) {
          i += P[k];
          k -= P[k];
          break;
        }
      }
      if (k === L) {
        return i;
      }
    }
    return -1;
  };
};
