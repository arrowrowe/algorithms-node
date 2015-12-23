var gcd = require('../../index').gcd;
var expect = require('chai').expect;

describe('Eucliden and Extended Eucliden algorithm', () => {
  var _T = (a, b, d) => expect(gcd(a, b)).to.equal(d);
  var T = (a, b, d) => (_T(a, b, d), _T(b, a, d));
  it('finds greatest common divisor of two integers', () => {
    T(1, 0, 1);
    T(1, 1, 1);
    T(6, 6, 6);
    T(6, 12, 6);
    T(12, 18, 6);
  });
});
