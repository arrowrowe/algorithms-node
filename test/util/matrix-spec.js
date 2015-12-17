var Matrix = require('../../util/matrix');
var expect = require('chai').expect;

var newMatrix = require('../../util/new-matrix');

describe('The utility matrix', () => {
  it('provides forEach and map for an array of arrays', () => {
    var expected = newMatrix(3, (i, j) => i + j);
    // forEach
    var matrix = newMatrix(3);
    Matrix.forEach((element, i, j) => matrix[i][j] = i + j, matrix);
    expect(matrix).to.eql(expected);
    // map
    expect(Matrix.map((element, i, j) => i + j, matrix)).to.eql(expected);
  });
});
