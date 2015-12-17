var powerset = require('../../alg/powerset');
var expect = require('chai').expect;

describe('Powerset-finding', () => {
  var T = (array, pset) => expect(powerset(array)).to.eql(pset);
  it('finds the powerset of a set', () => {
    T([], [[]]);
    T(['a'], [[], ['a']]);
    T(['a', 'b'], [[], ['a'], ['b'], ['a', 'b']]);
    T(['a', 'b', 'c'], [[], ['a'], ['b'], ['a', 'b'], ['c'], ['a', 'c'], ['b', 'c'], ['a', 'b', 'c']]);
  });
});
