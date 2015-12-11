var newArray = require('../../util/new-array');
var expect = require('chai').expect;

describe('The utility newArray', () => {
  it('creates a new array with specified length and elements', () => {
    expect(newArray(4, 'a')).to.eql(['a', 'a', 'a', 'a']);
    expect(newArray(2, null)).to.eql([null, null]);
    expect(newArray(3)).to.eql([undefined, undefined, undefined]);
  });
});
