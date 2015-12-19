var binarySearch = require('../../index').binarySearch;
var expect = require('chai').expect;

describe('Binary search algorithm', () => {
  var T = (array, target) => expect(binarySearch(array, target)).to.equal(array.indexOf(target));
  it('finds the position of a target value within a sorted array', () => {
    T([], 0);
    T([0], -1);
    T([0], 0);
    T([0], 1);
    T([0, 1], -1);
    T([0, 1], 0);
    T([0, 1], 1);
    T([0, 1], 2);
    T([0, 1, 2], -1);
    T([0, 1, 2], 0);
    T([0, 1, 2], 1);
    T([0, 1, 2], 2);
    T([0, 1, 2], 3);
    T([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], -1);
    T([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
    T([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 7);
    T([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10);
  });
});
