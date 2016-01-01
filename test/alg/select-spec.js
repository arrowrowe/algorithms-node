var select = require('../../index').select;
var expect = require('chai').expect;

describe('Quickselect', () => {
  var T = (arrayOrigin, rank) => {
    var array = Array.apply(null, arrayOrigin);
    var value = select(array, rank);
    if (0 <= rank && rank < arrayOrigin.length) {
      expect(arrayOrigin.filter(x => x > value)).to.have.length.of.at.most(arrayOrigin.length - rank - 1);
      expect(arrayOrigin.filter(x => x < value)).to.have.length.of.at.most(rank);
    } else {
      expect(value).to.be.a('null');
    }
  };
  it('is a selection algorithm to find the kth smallest element in an unordered list.', () => {
    var array = [3, 6, 2, 7, 5, 4, 9, 8];
    T(array, -1);
    T(array, 0);  // least
    T(array, 4);
    T(array, 7);  // most
    T(array, 8);
  });
});
