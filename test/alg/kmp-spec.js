var kmp = require('../../index').kmp;
var expect = require('chai').expect;

describe('KMP algorithm', () => {
  var T = (source, target) => expect(kmp(target)(source)).to.equal(source.indexOf(target));
  it('is a substring searching method', () => {
    T('', '');
    T('bca', 'a');
    T('acab', 'ab');
    T('abcdefg', 'cde');
    T('abcdabca', 'abca');
    T('aaabdaabc', 'aabc');
    T('abcabcabca', 'abcad');
  });
});
