'use strict';

const triSwap = (a, i, j) => {
  const y = a[j];
  a[j] = a[i + 1];
  a[i + 1] = a[i];
  a[i] = y;
};

module.exports = (array, pivotIndex, lo, hi) => {
  let pivotValue = array[pivotIndex];
  let i = lo;
  for (; i < pivotIndex; i++) {
    if (array[i] > pivotValue) {
      break;
    }
  }
  if (i < pivotIndex) {
    triSwap(array, i, pivotIndex);
    pivotIndex = i;
  }
  for (i = pivotIndex + 1; i < hi; i++) {
    if (array[i] < pivotValue) {
      triSwap(array, pivotIndex, i);
      pivotIndex++;
    }
  }
  return pivotIndex;
};
