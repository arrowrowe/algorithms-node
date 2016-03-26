'use strict';

module.exports = A => {
  const memo = [];
  const getMemo = (i, r) => i in memo && r in memo[i] ? memo[i][r] : null;
  const setMemo = (i, r, value) => i in memo ? (memo[i][r] = value) : (memo[i] = [], memo[i][r] = value);
  const B = (i, r) => {
    const value = getMemo(i, r);
    if (value !== null) {
      return value;
    }
    return r === 0 ? A[i] : setMemo(i, r, Math.min(
      B(i, r - 1),  // Left half
      B(i + Math.pow(2, r - 1), r - 1)  // Right half
    ));
  };
  return (i, j) => {
    const length = j - i + 1;
    const r = Math.floor(Math.log2(length));
    return Math.min(
      B(i, r),  // Left side
      B(j + 1 - Math.pow(2, r), r)  // Right side
    );
  };
};
