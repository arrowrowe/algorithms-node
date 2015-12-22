var knapsack = require('../../index').knapsack;
var expect = require('chai').expect;

describe('Knapsack problem', () => {
  var T = (plan, weightsPlan, valueTotalMax) => {
    expect(plan.value).to.equal(valueTotalMax);
    expect(plan.packs.map(pack => pack.weight).sort()).to.eql(weightsPlan.sort());
  };
  it('asks for a maximized total value of items, given upperbound of total weights.', () => {
    var planner = knapsack([
      {weight: 1, value: 1},
      {weight: 2, value: 3},
      {weight: 3, value: 5}
    ]);
    T(planner(4), [1, 3], 6);
    T(planner(5), [2, 3], 8);
    T(planner(7), [1, 3, 3], 11);
  });
});
