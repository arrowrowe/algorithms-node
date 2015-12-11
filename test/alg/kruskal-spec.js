var kruskal = require('../../alg/kruskal');
var expect = require('chai').expect;

describe('Kruskal\'s algorithm', () => {
  it('is a minimum-spanning-tree algorithm which finds an edge of the least possible weight that connects any two trees in the forest.', () => {
    expect(kruskal({
      vertex: ['a', 'b', 'c', 'd', 'e'],
      edge: [
        {vertex: ['a', 'b'], distance: 3},
        {vertex: ['a', 'e'], distance: 1},
        {vertex: ['b', 'c'], distance: 5},
        {vertex: ['b', 'e'], distance: 4},
        {vertex: ['c', 'd'], distance: 2},
        {vertex: ['c', 'e'], distance: 6},
        {vertex: ['d', 'e'], distance: 7}
      ]
    })).to.eql({
      vertex: ['a', 'b', 'c', 'd', 'e'],
      edge: [
        {vertex: ['a', 'e'], distance: 1},
        {vertex: ['c', 'd'], distance: 2},
        {vertex: ['a', 'b'], distance: 3},
        {vertex: ['b', 'c'], distance: 5}
      ]
    });
  });
});
