var dijkstra = require('../../alg/dijkstra');
var expect = require('chai').expect;

describe('Dijkstra\'s algorithm', () => {
  it('is an algorithm for finding the shortest paths between nodes in a graph', () => {
    /*
      [0]--1--[1]
       | 6_ _2 |
       9  _x_  3
       | /   \ |
      [2]--4--[3]
     */
    expect(dijkstra([
      [0, 1, 9, 6],
      [1, 0, 2, 3],
      [9, 2, 0, 4],
      [6, 3, 4, 0]
    ])).to.eql([0, 1, 3, 4]);
  });
});
