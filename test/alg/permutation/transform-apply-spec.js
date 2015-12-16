var transformApply = require('../../../alg/permutation/transform-apply');
var expect = require('chai').expect;

describe('Transform-apply', () => {
  var T = (array, transforms, transformed) => expect(transformApply(array, transforms)).to.eql(transformed);
  it('applies a transformation on an array', () => {
    T(['a', 'b', 'c'], [], ['a', 'b', 'c']);
    T(['a', 'b', 'c'], [[0, 1]], ['b', 'a', 'c']);
    T(['a', 'b', 'c'], [[0, 2], [1, 2]], ['c', 'a', 'b']);
  });
});
