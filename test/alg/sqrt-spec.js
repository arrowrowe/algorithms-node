var sqrt = require('../../alg/sqrt');
var expect = require('chai').expect;

describe('Newton\'s method for square root', () => {
  it('is a method for finding successively better approximations to the square root of a given number.', () => {
    var delta = .001;
    var T = x => expect(sqrt(x * x, delta)).to.be.within(x - delta, x + delta);
    T(0);
    T(3);
    T(4);
    T(100);
    T(98.76);
  });
  it('returns NaN for negative inputs', () => {
    expect(isNaN(sqrt(-1))).to.be.true;
  });
  it('has a default delta', () => {
    sqrt(4);
  });
});
