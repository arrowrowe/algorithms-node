var reduce = require('../../util/reduce');
var expect = require('chai').expect;

describe('Utility reduce', () => {

  var T = (reduced, array, fn, defaultValue) => expect(reduce(array, fn, defaultValue)).to.equal(reduced);

  var add = (a, b) => a + b;
  var mult = (a, b) => a * b;

  it('reduces elements in an array using a given function', () => {
    T(10, [1, 2, 3, 4], add);
    T(24, [1, 2, 3, 4], mult);
  });
  it('returns the element if there is only one', () => {
    T('a', ['a']);
  });
  it('returns a predefined default value for an empty array', () => {
    T('empty', [], add, 'empty');
  });
});
