'use strict';

const triSwap = (a, i, j) => {
  const y = a[j];
  a[j] = a[i + 1];
  a[i + 1] = a[i];
  a[i] = y;
};

const q = module.exports = (a, lo, hi) => {
  lo = lo || 0;
  hi = hi === undefined ? a.length : hi;
  if (hi - lo <= 1) {
    return a;
  }
  let pI = Math.floor((lo + hi) / 2);
  let pV = a[pI];
  let i = lo;
  for (; i < pI; i++) {
    if (a[i] > pV) {
      break;
    }
  }
  if (i < pI) {
    triSwap(a, i, pI);
    pI = i;
  }
  for (i = pI + 1; i < hi; i++) {
    if (a[i] < pV) {
      triSwap(a, pI, i);
      pI++;
    }
  }
  q(a, lo, pI);
  q(a, pI + 1, hi);
  return a;
};
