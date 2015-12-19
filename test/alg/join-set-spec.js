var joinSet = require('../../index').joinSet;
var expect = require('chai').expect;

describe('Join-set', () => {
  var T = (arrays, combinations) => expect(joinSet(arrays)).to.eql(combinations);
  it('finds all combinations of set joining', () => {
    T([], []);
    T([[]], []);
    T([[], ['a'], []], [['a']]);
    T([
      ['a', 'b'], ['c', 'd'], ['e']
    ], [
      ['a', 'c', 'e'], ['a', 'd', 'e'], ['b', 'c', 'e'], ['b', 'd', 'e']
    ]);
  });
});
