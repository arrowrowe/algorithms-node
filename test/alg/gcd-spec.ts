import chai = require('chai');
const expect = chai.expect;

import gcd from '../../alg/gcd.ts';

describe('Eucliden and Extended Eucliden algorithm', () => {
  const _T = (a: number, b: number, d: number) => expect(gcd(a, b)).to.equal(d);
  const T = (a: number, b: number, d: number) => (_T(a, b, d), a === b || _T(b, a, d));
  it('finds greatest common divisor of two integers', () => {
    T(1, 0, 1);
    T(1, 1, 1);
    T(6, 6, 6);
    T(6, 12, 6);
    T(12, 18, 6);
  });
});
