var newArray = require('../../util/new-array');
var expect = require('chai').expect;

describe('The utility newArray', () => {
  it('creates a new array with specified length and elements', () => {
    expect(newArray(4, 'a')).to.eql(['a', 'a', 'a', 'a']);
    expect(newArray(2, null)).to.eql([null, null]);
    expect(newArray(3)).to.eql([undefined, undefined, undefined]);
  });
  it('supports a constructor function for each element as well', () => {
    expect(newArray(5, x => x)).to.eql([0, 1, 2, 3, 4]);
    expect(newArray(10, x => x === 7 ? 'me' : 'he')).to.eql(['he', 'he', 'he', 'he', 'he', 'he', 'he', 'me', 'he', 'he']);
  });
  it('supports look-before constructors', () => {
    const hailstone = (n, length) => newArray(length, (i, k) => i ? (k % 2 ? k * 3 + 1 : k / 2) : n);
    expect(hailstone(5, 9)).to.eql([5, 16, 8, 4, 2, 1, 4, 2, 1]);
    const fibonacci = length => newArray(length, (i, k, f) => i < 2 ? 1 : f[i - 1] + f[i - 2]);
    expect(fibonacci(7)).to.eql([1, 1, 2, 3, 5, 8, 13]);
  });
});
