var maxBy = require('../../util/max-by');
var expect = require('chai').expect;

describe('The utility maxBy', () => {
  it('finds the maximized in an array using a specified function to value each element', () => {
    expect(maxBy(Math.abs, [3, -5, 1, 7, -2])).to.equal(7);
  });
});
