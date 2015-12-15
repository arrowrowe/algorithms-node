var longestIncreasingSubsequence = require('../../alg/longest-increasing-subsequence');
var expect = require('chai').expect;

describe('The longest increasing subsequence problem', () => {
  var isNondecreasing = array => array.every((element, index) => index === 0 || element >= array[index - 1]);
  var T = (array, length) => expect(longestIncreasingSubsequence(array)).to.have.length(length).and.to.satisfy(isNondecreasing);
  it('is to find a subsequence of a given sequence' +
    ' in which the subsequence\'s elements are in sorted order, lowest to highest,' +
    ' and in which the subsequence is as long as possible.', () => {
    T([0, 4, 2, 5], 3);
    T([0, 4, 2, 5, 3], 3);
    T([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15], 6);
  });
  it('allows non-decreasing subsequences as well', () => {
    T([0, 1, 4, 4, 4, 4, 2, 3], 6);
  });
});
