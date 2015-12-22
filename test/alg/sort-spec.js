var alg = require('../../index');
var sort = alg.sort;
var expect = require('chai').expect;

var permutationSimple = alg.permutation.simple;
var newArray = require('../../util/new-array');
var naturals = length => newArray(length, i => i + 1);
var copyArray = a => a.length <= 1 ? a : Array.apply([], a);

describe('Sort algorithms', () => {
  var _T = array => {
    var arrayOrigin = copyArray(array);
    array.sort();
    for (var methodName in sort) {
      var method = sort[methodName];
      var arrayToSort = copyArray(arrayOrigin);
      expect(method(arrayToSort)).to.eql(array);
    }
  };
  var T = array => permutationSimple(array).forEach(_T);
  it('sorts a given array', () => {
    // Natrual rearrangements
    naturals(5).forEach(n => T(naturals(n - 1)));
    // Duiplicated Natural
    T([1, 1, 2, 3]);
  });
});
