var bracket = require('../../alg/bracket');
var expect = require('chai').expect;

describe('Brackets-finding', () => {
  var T = (n, brackets) => expect(bracket(n).sort()).to.eql(brackets.sort());
  it('finds all combinations of well-formed brackets', () => {
    T(0, []);
    T(1, ['()']);
    T(2, ['(())', '()()']);
    T(3, ['((()))', '(()())', '(())()', '()(())', '()()()']);
  });
});
