var wordToTel = require('../../../alg/telword/word-to-tel');
var expect = require('chai').expect;

describe('WordToTel', () => {
  var T = (word, tel) => expect(wordToTel(word)).to.equal(tel);
  it('converts characters in a sentence to tel numbers', () => {
    T('The', '843');
    T('quick', '78425');
    T('brown', '27696');
    T('fox', '369');
    T('jumps', '58677');
    T('over', '6837');
    T('the', '843');
    T('lazy', '5299');
    T('dog', '364');
    T('The quick brown fox jumps over the lazy dog!', '84378425276963695867768378435299364');
  });
});
