var sortBy = require('../../util/sort-by');
var expect = require('chai').expect;

describe('The utility sortBy', () => {
  it('sorts an array using a specified function to value each element', () => {
    expect(sortBy(Math.abs, [7, 3, -5, 1, -2])).to.eql([1, -2, 3, -5, 7]);
  });
});
