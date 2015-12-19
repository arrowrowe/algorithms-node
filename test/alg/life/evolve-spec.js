var lifeEvolve = require('../../../index').life.evolve;
var expect = require('chai').expect;

describe('Life-evolve', () => {
  var T = (world, nextWorld) => expect(lifeEvolve(world)).to.eql(nextWorld);
  it('produces the future of current world', () => {
    var twins = [[
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0]
    ], [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
    ]];
    T(twins[0], twins[1]);
    T(twins[1], twins[0]);
    var taken = [[
      [0, 0, 0],
      [0, 1, 1],
      [0, 1, 0]
    ], [
      [0, 0, 0],
      [0, 1, 1],
      [0, 1, 1]
    ]];
    T(taken[0], taken[1]);
    T(taken[1], taken[1]);
  });
});
