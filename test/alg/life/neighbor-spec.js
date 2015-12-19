var lifeNeighbor = require('../../../index').life.neighbor;
var expect = require('chai').expect;

describe('Life-neighbor', () => {
  var T = (world, neighbors) => expect(lifeNeighbor(world)).to.eql(neighbors);
  it('counts alive neighbors for each grid', () => {
    T([
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0]
    ], [
      [2, 3, 2],
      [1, 2, 1],
      [2, 3, 2]
    ]);
    T([
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
    ], [
      [2, 1, 2],
      [3, 2, 3],
      [2, 1, 2]
    ]);
    T([
      [0, 0, 0],
      [0, 1, 1],
      [0, 1, 0]
    ], [
      [1, 2, 2],
      [2, 2, 2],
      [2, 2, 3]
    ]);
  });
});
