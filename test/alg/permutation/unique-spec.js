var permutationUnique = require('../../../index').permutation.unique;
var expect = require('chai').expect;

describe('Permutation-unique', () => {
  var T = (array, permutations) => expect(permutationUnique(array).sort()).to.eql(permutations.sort());
  it('produces all rearrangements of an array without duplication', () => {
    T([1], [[1]]);
    T([1, 1], [[1, 1]]);
    T([1, 2], [[1, 2], [2, 1]]);
    T([1, 2, 3], [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]);
    T([1, 2, 1], [[1, 2, 1], [1, 1, 2], [2, 1, 1]]);
  });
});
