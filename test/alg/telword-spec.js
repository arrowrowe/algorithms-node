var telword = require('../../alg/telword');
var expect = require('chai').expect;

describe('Telword', () => {

  beforeEach(() => telword.initialize());

  var T = (tel, words) => expect(telword.perform(tel).sort()).to.eql([tel].concat(words).sort());

  it('remembers given words and generates tel numbers accordingly', () => {
    var words = [
      'a',
      'dog',
      'X-Ray'
    ];
    telword.prepare(words);
    var lengthPrepared = 10 + words.length;
    expect(telword.words).to.have.length(lengthPrepared);
    expect(telword.tels).to.have.length(lengthPrepared);
    expect(telword.lengthPrepared).to.equal(lengthPrepared);
    T('2364', ['a-dog', 'a-364', '2-dog']);
    T('9729364', ['X-Ray-dog', '97-a-9-dog', '97-a-9364', '9729-dog']);
  });

});
