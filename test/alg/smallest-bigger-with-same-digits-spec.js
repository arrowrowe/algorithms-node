var smallestBiggerWithSameDigits = require('../../index').smallestBiggerWithSameDigits;
var expect = require('chai').expect;

describe('Smallest-bigger-with-same-digits', () => {
  var T = (src, result) => expect(smallestBiggerWithSameDigits(src)).to.equal(result);
  it('finds the smallest number which has the exact same digits as the original number and bigger than it', () => {
    T(12, 21);
    T(122, 212);
    T(123, 132);
    T(132, 213);
    T(213, 231);
    T(312, 321);
    T(1234, 1243);
    T(1423, 1432);
    T(1432, 2134);
    T(38276, 38627);
  });
  it('returns the origin number itself if no result found', () => {
    // No rearrangements
    T(1, 1);
    T(22, 22);
    T(333, 333);
    T(4444, 4444);
    // No larger rearrangements
    T(332, 332);
  });
});
