var quickAdjust = require('../../index').quickAdjust;
var expect = require('chai').expect;

describe('Quick-adjust', () => {
  var T = (array, pivotIndex) => {
    var pivotValue = array[pivotIndex];
    var pivotIndexNew = quickAdjust(array, pivotIndex, 0, array.length);
    expect(array[pivotIndexNew]).to.equal(pivotValue);
    array.slice(0, pivotIndexNew).forEach(x => expect(x).to.be.at.most(pivotValue));
    array.slice(pivotIndexNew + 1).forEach(x => expect(x).to.be.at.least(pivotValue));
  };
  it('rearranges an array so that one specified element moves to its corrent position, where all elements before it are exactly those smaller than it.', () => {
    var array = [3, 6, 2, 7, 5, 4, 9, 8];
    T(array, 2);  // least
    T(array, 3);
    T(array, 6);  // most
  });
});
