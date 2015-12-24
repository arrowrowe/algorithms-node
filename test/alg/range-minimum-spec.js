var rangeMinimum = require('../../index').rangeMinimum;
var expect = require('chai').expect;

describe('Range minimum query', () => {
  it('finds the minimal value in a sub-array', () => {
    var B = rangeMinimum([5, 2, 3, 1]);
    expect(B(0, 0)).to.equal(5);
    expect(B(1, 1)).to.equal(2);
    expect(B(2, 2)).to.equal(3);
    expect(B(3, 3)).to.equal(1);
    expect(B(0, 1)).to.equal(2);
    expect(B(1, 2)).to.equal(2);
    expect(B(2, 3)).to.equal(1);
    expect(B(0, 2)).to.equal(2);
    expect(B(1, 3)).to.equal(1);
    expect(B(0, 3)).to.equal(1);
  });
});
