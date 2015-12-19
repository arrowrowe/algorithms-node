var permutationSimple = require('../../../index').permutation.simple;
var permutationSimpleByTransform = require('../../../alg/permutation/simple-by-transform');
var expect = require('chai').expect;

describe('Permutation-simple (or Permutation-simple-by-transform)', () => {
  var T = (array, permutations) => {
    permutations.sort();
    expect(permutationSimple(array).sort()).to.eql(permutations);
    expect(permutationSimpleByTransform(array).map(x => { delete x.duplicate; return x; }).sort()).to.eql(permutations);
  };
  it('produces all rearrangements of an array, assuming all elements are different', () => {
    T([1], [[1]]);
    T([1, 1], [[1, 1], [1, 1]]);
    T([1, 2], [[1, 2], [2, 1]]);
    T([1, 2, 3], [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]);
    T([1, 2, 1], [[1, 2, 1], [1, 1, 2], [2, 1, 1], [2, 1, 1], [1, 1, 2], [1, 2, 1]]);
  });
});
