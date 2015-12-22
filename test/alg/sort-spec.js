var alg = require('../../index');
var sort = alg.sort;
var expect = require('chai').expect;

var permutationSimple = alg.permutation.simple;
var newArray = require('../../util/new-array');
var naturals = length => newArray(length, i => i + 1);
var copyArray = a => a.length <= 1 ? a : Array.apply([], a);

describe('Sort algorithms', () => {
  var T = array => {
    var arrayOrigin = copyArray(array);
    array.sort();
    for (var methodName in sort) {
      var method = sort[methodName];
      var arrayToSort = copyArray(arrayOrigin);
      expect(method(arrayToSort)).to.eql(array);
    }
  };
  it('sorts a given array', () => {
    naturals(5).forEach(n => permutationSimple(naturals(n - 1)).forEach(T));
  });
});
