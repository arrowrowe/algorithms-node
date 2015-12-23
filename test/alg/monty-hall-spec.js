var montyHall = require('../../index').montyHall;
var expect = require('chai').expect;

describe('Monty Hall problem', () => {
  var T = (doorsCount, prizeCount, doorsOpenedCount, prizeRevealedCount, shouldSwitch) => expect(montyHall(doorsCount, prizeCount, doorsOpenedCount, prizeRevealedCount)).to.equal(shouldSwitch);
  it('asks if we should switch our previous chioce in a prize-in-doors-guess game after certain numbers of prizes and empty doors revealed', () => {
    T(3, 1, 1, 0, true);
  });
});
