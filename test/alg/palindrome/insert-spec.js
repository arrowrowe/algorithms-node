var palindromeInsert = require('../../../index').palindrome.insert;
var expect = require('chai').expect;

describe('Palindrome-insert', () => {
  var T = (word, palindrome) => expect(palindromeInsert(word)).to.equal(palindrome);
  it('inserts least characters to make a word palindrome', () => {
    T('', '');
    T('a', 'a');
    T('aa', 'aa');
    T('ah', 'aha');
    T('aaa', 'aaa');
    T('aab', 'baab');
    T('abc', 'abcba');
  });
});
