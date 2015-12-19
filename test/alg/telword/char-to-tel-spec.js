var charToTel = require('../../../alg/telword/char-to-tel');
var expect = require('chai').expect;

describe('CharToTel', () => {
  var T = (chars, tel) => chars.split('').forEach(char => expect(charToTel(char)).to.equal(tel));
  it('converts a character to a tel number', () => {
    T('abc', '2');
    T('def', '3');
    T('ghi', '4');
    T('jkl', '5');
    T('mno', '6');
    T('pqrs', '7');
    T('tuv', '8');
    T('wxyz', '9');
  });
});
