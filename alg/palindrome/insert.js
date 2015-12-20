'use strict';

const findFirstU = word => {
  const mid = Math.floor(word.length / 2);
  const op = word.length - 1;
  for (let i = 0; i < mid; i++) {
    if (word.charCodeAt(i) !== word.charCodeAt(op - i)) {
      return i;
    }
  }
  return -1;
};

const palindromeInsert = module.exports = word => {
  const firstU = findFirstU(word);
  if (firstU === -1) {
    return word;
  }
  const lastU = word.length - 1 - firstU;
  const head = word.charAt(firstU);
  const tail = word.charAt(lastU);
  const lengthCut = lastU - firstU;
  const headCut = palindromeInsert(word.substr(firstU + 1, lengthCut));
  const tailCut = palindromeInsert(word.substr(firstU, lengthCut));
  return word.substr(0, firstU) + (
    headCut.length <= tailCut.length ?
      head + headCut + head : tail + tailCut + tail
  ) + word.substr(lastU + 1);
};
