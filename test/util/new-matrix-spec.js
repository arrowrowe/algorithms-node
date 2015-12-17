var newMatrix = require('../../util/new-matrix');
var expect = require('chai').expect;

describe('The utility newMatrix', () => {
  it('creates a new square matrix with specified length and elements', () => {
    expect(newMatrix(2, 'a')).to.eql([['a', 'a'], ['a', 'a']]);
    expect(newMatrix(1, null)).to.eql([[null]]);
    expect(newMatrix(3)).to.eql([[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]]);
  });
  it('supports a constructor function for each element as well', () => {
    expect(newMatrix(3, (i, j) => i + j)).to.eql([[0, 1, 2], [1, 2, 3], [2, 3, 4]]);
  });
  it('supports look-before constructors', () => {
    const pascal = n => newMatrix(n, (i, j, lastElement, lastRow) => !i && !j ? 1 : (lastElement || 0) + (lastRow ? lastRow[j] : 0));
    expect(pascal(5)).to.eql([
      [1, 1,  1,  1,  1],
      [1, 2,  3,  4,  5],
      [1, 3,  6, 10, 15],
      [1, 4, 10, 20, 35],
      [1, 5, 15, 35, 70]
    ]);
  });
});
