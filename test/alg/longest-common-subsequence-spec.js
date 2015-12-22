var longestCommonSubsequence = require('../../index').longestCommonSubsequence;
var expect = require('chai').expect;

describe('Longest common subsequence problem', () => {
  var T = (X, Y, lcs) => expect(longestCommonSubsequence(X, Y)).to.eql(lcs);
  it('is the problem of finding the longest subsequence common to all sequences in a set of sequences (here just two sequences)', () => {
    T([9, 1, 4, 2, 3], [5, 1, 7, 6, 2, 4, 3, 8], [1, 2, 3]);
    T([1, 3, 2, 6, 7, 9], [9, 6, 1, 2, 7], [1, 2, 7]);
  });
});
