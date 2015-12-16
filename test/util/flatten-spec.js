var flatten = require('../../util/flatten');
var expect = require('chai').expect;

describe('The utility flatten', () => {
  var T = (arrays, flattened) => expect(flatten(arrays)).to.eql(flattened);
  it('flattens an array of arrays', () => {
    T([], []);
    T([[]], []);
    T([[], []], []);
    T([[], [0], []], [0]);
    T([[0, 1], [], [2], [], [3, 4]], [0, 1, 2, 3, 4]);
  });
});
